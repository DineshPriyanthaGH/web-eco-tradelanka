
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-brown-400">Eco</span>
                <span className="text-green-400"> TradeLanka</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sri Lanka's premier eco product exporter, connecting the world with authentic, sustainable Sri Lankan products. From natural homeware to organic foods, we deliver quality, sustainability, and ethical value to global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brown-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brown-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-brown-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-brown-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-brown-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-brown-400 transition-colors">About Us</a></li>
              <li><a href="#sustainability" className="text-gray-300 hover:text-brown-400 transition-colors">Sustainability</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brown-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brown-400" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brown-400" />
                <span className="text-gray-300">info@ecotradelanka.lk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brown-400 mt-1" />
                <span className="text-gray-300">
                  123 Export Avenue,<br />
                  Colombo 03, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Our Certifications</h4>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span className="bg-gray-800 px-4 py-2 rounded-full">ISO 22000</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">HACCP</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">Organic Certified</span>
              <span className="bg-gray-800 px-4 py-2 rounded-full">Fair Trade</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 <span className="text-brown-400">Eco</span><span className="text-green-400"> TradeLanka</span>. All rights reserved. | Proudly Sri Lankan
          </p>
        </div>
      </div>
    </footer>
  );
};
