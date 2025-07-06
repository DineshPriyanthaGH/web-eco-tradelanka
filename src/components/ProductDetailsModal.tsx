
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Award, Globe, CheckCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const ProductDetailsModal = ({ isOpen, onClose, product }: ProductDetailsModalProps) => {
  if (!product) return null;

  const getProductDetails = (productName: string) => {
    const details: { [key: string]: any } = {
      "Coconut Shell Utensils": {
        fullDescription: "Our coconut shell utensils are handcrafted by skilled Sri Lankan artisans using traditional techniques passed down through generations. Made from 100% natural coconut shells, these eco-friendly alternatives to plastic utensils are perfect for conscious consumers and businesses looking to reduce their environmental footprint.",
        certifications: ["HACCP Certified", "ISO 9001:2015", "Organic Certified", "Fair Trade"],
        specifications: {
          "Material": "100% Natural Coconut Shell",
          "Sizes Available": "Small (10cm), Medium (15cm), Large (20cm)",
          "Colors": "Natural Brown variations",
          "Packaging": "Eco-friendly paper packaging",
          "Shelf Life": "5+ years with proper care"
        },
        benefits: [
          "100% biodegradable and compostable",
          "Naturally antimicrobial properties",
          "Lightweight yet durable",
          "Unique natural patterns",
          "Heat resistant up to 80°C"
        ],
        applications: ["Restaurants", "Hotels", "Home Use", "Catering", "Events"]
      },
      "Areca Leaf Plates": {
        fullDescription: "Made from naturally fallen areca palm leaves, our plates are 100% biodegradable and chemical-free. These sturdy, elegant plates are perfect for eco-conscious dining, events, and food service establishments seeking sustainable alternatives to plastic and paper plates.",
        certifications: ["FDA Approved", "EU Food Grade", "Compostable Certified", "Biodegradable"],
        specifications: {
          "Material": "Natural Areca Palm Leaves",
          "Sizes": "6\", 8\", 10\", 12\" diameter",
          "Thickness": "1-2mm",
          "Color": "Natural golden brown",
          "Decomposition": "60-90 days"
        },
        benefits: [
          "Microwave and freezer safe",
          "Oil and water resistant",
          "No chemicals or additives",
          "Elegant natural appearance",
          "Compostable within 60 days"
        ],
        applications: ["Fine Dining", "Weddings", "Corporate Events", "Street Food", "Takeaway"]
      },
      "Wooden Homeware": {
        fullDescription: "Crafted from sustainably sourced hardwood, our wooden homeware collection represents the finest Sri Lankan woodworking traditions. Each piece is carefully selected, seasoned, and finished to create beautiful, functional items that last for generations.",
        certifications: ["FSC Certified", "Food Safe Finish", "Handmade Guarantee", "Sustainable Wood"],
        specifications: {
          "Wood Types": "Teak, Mahogany, Jak Wood",
          "Finish": "Natural food-safe oil",
          "Sizes": "Various sizes available",
          "Care": "Hand wash only",
          "Origin": "Sustainably sourced Sri Lankan forests"
        },
        benefits: [
          "Natural antibacterial properties",
          "Durable and long-lasting",
          "Unique wood grain patterns",
          "Improves with age",
          "Carbon neutral production"
        ],
        applications: ["Kitchen Use", "Serving", "Gifts", "Home Decor", "Restaurant Service"]
      },
      "Kithul Syrup": {
        fullDescription: "Pure Kithul syrup is extracted from the sap of the Caryota urens palm tree, native to Sri Lanka. This golden nectar is rich in minerals and has been used for centuries as a natural sweetener. Our syrup is processed using traditional methods without any artificial additives.",
        certifications: ["Organic Certified", "HACCP", "ISO 22000", "Non-GMO"],
        specifications: {
          "Source": "Caryota urens palm sap",
          "Processing": "Traditional boiling method",
          "Color": "Golden amber",
          "Consistency": "Medium viscosity",
          "Shelf Life": "2 years"
        },
        benefits: [
          "Rich in potassium and iron",
          "Lower glycemic index than sugar",
          "Natural antioxidants",
          "Distinctive caramel-like flavor",
          "Supports local communities"
        ],
        applications: ["Baking", "Desserts", "Beverages", "Health Foods", "Traditional Medicine"]
      },
      "Eco Bags & Handicrafts": {
        fullDescription: "Our eco-friendly bags and handicrafts are woven by skilled artisans using natural fibers like water hyacinth, banana fiber, and recycled materials. Each piece tells a story of Sri Lankan craftsmanship and environmental consciousness.",
        certifications: ["Fair Trade", "Handmade Certified", "Eco-Friendly", "Artisan Made"],
        specifications: {
          "Materials": "Water hyacinth, banana fiber, jute",
          "Sizes": "Small to extra large",
          "Colors": "Natural and dyed options",
          "Durability": "5+ years regular use",
          "Closure": "Various options available"
        },
        benefits: [
          "Supports rural communities",
          "Biodegradable materials",
          "Unique handwoven patterns",
          "Strong and durable",
          "Plastic-free alternative"
        ],
        applications: ["Shopping", "Storage", "Gifts", "Fashion", "Corporate Merchandise"]
      },
      "Herbal Teas & Spices": {
        fullDescription: "Our premium collection of Ceylon herbal teas and authentic Sri Lankan spices captures the essence of the island's rich biodiversity. Grown in the pristine highlands and processed using traditional methods, each product delivers exceptional flavor and therapeutic benefits.",
        certifications: ["Ceylon Tea Board Certified", "Organic", "GMP Certified", "Export Quality"],
        specifications: {
          "Origin": "Sri Lankan highlands",
          "Processing": "Traditional methods",
          "Packaging": "Airtight sealed pouches",
          "Grades": "PEKOE, OP, BOP available",
          "Shelf Life": "3 years"
        },
        benefits: [
          "High antioxidant content",
          "Natural therapeutic properties",
          "Authentic Ceylon flavor",
          "Sustainably harvested",
          "Premium export quality"
        ],
        applications: ["Wellness", "Culinary", "Export", "Retail", "Food Service"]
      }
    };

    return details[productName] || details["Coconut Shell Utensils"];
  };

  const productDetails = getProductDetails(product.name);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-600 mb-4">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="bg-green-100 text-green-700">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <Leaf className="h-5 w-5 text-green-600 mr-2" />
                Product Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {productDetails.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <Award className="h-5 w-5 text-green-600 mr-2" />
                Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {productDetails.certifications.map((cert: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(productDetails.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="text-sm font-medium text-gray-700">{key}:</span>
                    <span className="text-sm text-gray-600">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <Globe className="h-5 w-5 text-green-600 mr-2" />
                Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {productDetails.applications.map((app: string, index: number) => (
                  <Badge key={index} variant="outline" className="border-green-300 text-green-700">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Request Quote for {product.name}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
