import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className=" p-2 rounded-full">
                {/* Replace Leaf icon with logo */}
                <img 
                  src="https://scontent.fcmb10-1.fna.fbcdn.net/v/t39.30808-6/472142611_122146234724383123_4395380209239405586_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEEgJoOu0jH7EG0j-KSC2UztUPkvlJyok-1Q-S-UnKiT9mgK8fDQghpqMS1vXDTLKlwxzKaKEvzcq8f1obaiSaq&_nc_ohc=PYpq2cy4qRQQ7kNvwHxNPRP&_nc_oc=Adm5gicHmN9_viWavztPdlPi3emKCGhVlgibnB5FfFEIyGZF8aB--gegnj4NeDVqxFA&_nc_zt=23&_nc_ht=scontent.fcmb10-1.fna&_nc_gid=iFblhw71yhVBhVB8LM5d-A&oh=00_AfXpoQDpV0taBO2ZYXBSKpb22vCn_A1OGOXDMW-K7qQl7A&oe=68A1690A"
                  alt="EcoGreen Global Logo"
                  className="h-20 w-20 object-cover rounded-full" // Adjust the size here
                />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-brown-400">EcoGreen</span>
                <span className="text-green-400"> Global Pvt Ltd</span>
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
                <span className="text-gray-300">0725604666</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brown-400" />
                <span className="text-gray-300">info@ecogreenglobal.lk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brown-400 mt-1" />
                <span className="text-gray-300">
                  188/B Mahawewa<br />
                  Chilaw, Sri Lanka
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
            © 2025 <span className="text-brown-400">EcoGreen</span><span className="text-green-400"> Global Pvt Ltd</span>. All rights reserved. | Proudly Sri Lankan
          </p>
        </div>
      </div>
    </footer>
  );
};
