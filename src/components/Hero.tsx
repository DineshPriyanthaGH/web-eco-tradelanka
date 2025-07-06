
import { ChevronRight, Leaf, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QuoteForm } from "./QuoteForm";

export const Hero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float opacity-20">
            <Leaf className="h-20 w-20 text-green-300 transform rotate-12" />
          </div>
          <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <Leaf className="h-16 w-16 text-green-400 transform -rotate-45" />
          </div>
          <div className="absolute bottom-32 left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Leaf className="h-24 w-24 text-green-200 transform rotate-45" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Sri Lanka's Premier
              <span className="block text-green-600">
                Eco Product
              </span>
              <span className="text-gray-700">Exporter</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sustainably Sourced. Globally Delivered. Inspired by Nature.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg group">
                Browse Products
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsQuoteFormOpen(true)}
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                Get Quote
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">-+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">-+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Eco-Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </>
  );
};
