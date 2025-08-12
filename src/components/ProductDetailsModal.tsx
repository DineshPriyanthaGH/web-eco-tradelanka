
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
      "Dry Coconut": {
  fullDescription: "Our dry coconut is harvested from mature coconuts, carefully dried to retain its natural sweetness and nutrients. It's perfect for cooking, baking, and as a healthy snack. Enjoy the rich flavor and texture of Sri Lanka's finest dry coconut.",
  certifications: ["Organic Certified", "Non-GMO", "Sustainably Sourced"],
  specifications: {
    "Type": "Matured Coconut",
    "Drying Process": "Sun-Dried",
    "Sizes": "Available in various sizes",
    "Storage": "Store in a cool, dry place",
    "Origin": "Sustainably sourced from Sri Lanka"
  },
  benefits: [
    "Rich in fiber and essential nutrients",
    "Supports heart health",
    "Boosts energy levels",
    "Naturally sweet and delicious",
    "Versatile for various recipes"
  ],
  applications: ["Cooking", "Baking", "Smoothies", "Snacking", "Vegan Recipes"]
},
      "Coconut Husk": {
  fullDescription: "Coconut husks are a by-product of coconut processing and are widely used in eco-friendly products such as biodegradable brushes, doormats, and crafts. These husks are durable, versatile, and an excellent natural alternative for sustainable products.",
  certifications: ["Organic Certified", "Fair Trade", "Sustainable Sourcing"],
  specifications: {
    "Source": "Coconut palm",
    "Processing": "Hand-harvested and sun-dried",
    "Sizes": "Various sizes available",
    "Storage": "Store in a dry, cool place",
    "Origin": "Sri Lanka"
  },
  benefits: [
    "Biodegradable and compostable",
    "Supports eco-friendly initiatives",
    "Durable and long-lasting",
    "Perfect for crafts and decoration",
    "Natural fiber with multiple uses"
  ],
  applications: ["Crafts", "Eco-Friendly Products", "Doormats", "Brushes", "Gardening"]
},
      
      "Husked Coconuts": {
  fullDescription: "Husked coconuts are mature coconuts with the outer fibrous husk removed, leaving the hard shell that encases the coconut water and edible white flesh. These coconuts are ideal for both culinary uses and industrial applications due to their durability and ease of handling.",
  certifications: ["Organic Certified", "Fair Trade", "Sustainable Sourcing"],
  specifications: {
    "Type": "Matured Coconut",
    "Processing": "Outer husk removed, shell intact",
    "Weight": "Approximately 1.4 kg per coconut",
    "Storage": "Store in a cool, dry place",
    "Origin": "Sri Lanka"
  },
  benefits: [
    "Long shelf life compared to whole coconuts",
    "Easier to handle and process",
    "Suitable for both food and industrial uses",
    "Natural and eco-friendly packaging material"
  ],
  applications: ["Culinary Uses", "Coconut Water Extraction", "Copra Production", "Coir Fiber Extraction", "Crafts and Decorations"]
},
"Fresh Coconut": {
  fullDescription: "Fresh coconuts are mature coconuts with the outer husk intact, containing natural coconut water and fresh coconut meat. They are ideal for hydration, cooking, and snacking, offering a pure and refreshing tropical experience.",
  certifications: ["Organic Certified", "Fair Trade", "Sustainably Sourced"],
  specifications: {
    "Type": "Matured Coconut",
    "Processing": "Outer husk intact, shell and meat preserved",
    "Weight": "Approximately 1.4 kg per coconut",
    "Storage": "Store in a cool, dry place",
    "Origin": "Sri Lanka"
  },
  benefits: [
    "Rich in electrolytes and nutrients",
    "Supports hydration and digestion",
    "Versatile for various culinary applications",
    "Natural and eco-friendly packaging material"
  ],
  applications: ["Coconut Water", "Coconut Milk", "Smoothies", "Baking", "Snacking"]
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
