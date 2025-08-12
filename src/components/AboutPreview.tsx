
import { useState } from "react";
import { Users, Award, Leaf, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyStoryModal } from "./CompanyStoryModal";

export const AboutPreview = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const handleDiscoverStory = () => {
    setIsStoryModalOpen(true);
  };

  const handleCloseStoryModal = () => {
    setIsStoryModalOpen(false);
  };

  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connecting the World with
                <span className="block text-green-600">
                  Authentic Sri Lankan
                </span>
                <span className="text-gray-700">Eco Products</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Eco TradeLanka is your trusted partner for authentic Sri Lankan eco products. We bring together the island's finest artisans and natural resources to deliver quality, sustainability, and ethical value to global markets.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">800+</div>
                  <div className="text-gray-600">Artisan Partners</div>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">ISO</div>
                  <div className="text-gray-600">Certified</div>
                </div>
              </div>

              <Button 
                onClick={handleDiscoverStory}
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Discover Our Story
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.LAKWhgW78edwV6DlLdKKXwHaE3?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3?w=600&h=400&fit=crop"
                  alt="Sri Lankan landscape"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">100% Eco-Friendly</div>
                      <div className="text-sm text-gray-600">Sustainable practices</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyStoryModal 
        isOpen={isStoryModalOpen}
        onClose={handleCloseStoryModal}
      />
    </>
  );
};
