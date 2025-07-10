
import { useState } from "react";    
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "./QuoteForm";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-green-700">
                Eco <span className="text-2xl font-bold text-black">
               Trade
              </span>Lanka
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                onClick={() => {
                  setIsQuoteFormOpen(true);
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </>
  );
};
