
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award, Globe, Heart, Target, Eye } from "lucide-react";

interface CompanyStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyStoryModal = ({ isOpen, onClose }: CompanyStoryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-green-600 mb-4">
            Our Story - Eco TradeLanka
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Company Overview */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Leaf className="h-6 w-6 text-green-600 mr-2" />
              About Eco TradeLanka
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to showcase Sri Lanka's incredible biodiversity and traditional craftsmanship to the world, 
              Eco TradeLanka has become the island's premier exporter of sustainable, eco-friendly products. We bridge the gap 
              between local artisans and global markets, ensuring that every product we export tells a story of environmental 
              consciousness, cultural heritage, and ethical business practices.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="h-5 w-5 text-green-600 mr-2" />
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower Sri Lankan communities through sustainable trade, preserve traditional craftsmanship, 
                and deliver authentic eco-friendly products that make a positive impact on both people and planet.
              </p>
            </div>

            <div className="bg-white border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Eye className="h-5 w-5 text-green-600 mr-2" />
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be recognized globally as the leading exporter of authentic Sri Lankan eco products, 
                setting the standard for sustainable trade practices and environmental stewardship.
              </p>
            </div>
          </div>

          {/* Journey Timeline */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Journey</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2010 - Foundation</h4>
                  <p className="text-gray-600">Started as a small family business with a passion for Sri Lankan heritage and sustainability.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2015 - First International Export</h4>
                  <p className="text-gray-600">Successfully exported our first container of coconut shell products to European markets.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2018 - Certifications & Growth</h4>
                  <p className="text-gray-600">Achieved ISO, HACCP, and organic certifications while expanding our artisan network.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2024 - Global Recognition</h4>
                  <p className="text-gray-600">Now serving 35+ countries with 800+ artisan partners and a diverse product portfolio.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Heart className="h-6 w-6 text-green-600 mr-2" />
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">Every decision considers environmental impact</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                <p className="text-sm text-gray-600">Supporting local artisans and communities</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality</h4>
                <p className="text-sm text-gray-600">Uncompromising standards in every product</p>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">800+</div>
                <div className="text-sm text-gray-600">Artisan Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">35+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">100K+</div>
                <div className="text-sm text-gray-600">Trees Saved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">15</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications & Standards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["ISO 9001:2015", "HACCP Certified", "Organic Certified", "Fair Trade", "FSC Certified", "EU Food Grade", "FDA Approved", "Ceylon Tea Board"].map((cert, index) => (
                <Badge key={index} variant="outline" className="border-green-300 text-green-700 justify-center p-2">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4 text-center">
            <Button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white px-8">
              Partner With Us Today
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
