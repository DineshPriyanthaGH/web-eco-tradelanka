
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ProductDetailsModal } from "./ProductDetailsModal";

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Coconut Shell Utensils",
      description: "Handcrafted bowls, spoons, and trays made from natural coconut shells.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["100% Natural", "Biodegradable", "Handcrafted"]
    },
    {
      id: 2,
      name: "Areca Leaf Plates",
      description: "Biodegradable, sturdy, and stylish plates perfect for conscious dining.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["Biodegradable", "Chemical-Free", "Various Sizes"]
    },
    {
      id: 3,
      name: "Wooden Homeware",
      description: "Beautiful wooden bowls, mugs, and platters crafted by local artisans.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["Sustainable Wood", "Handmade", "Food Safe"]
    },
    {
      id: 4,
      name: "Kithul Syrup",
      description: "Pure, natural sweetener from the Kithul palm, rich in minerals.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["Pure Natural", "Rich in Minerals", "Traditional Process"]
    },
    {
      id: 5,
      name: "Eco Bags & Handicrafts",
      description: "Handwoven bags, baskets, and mats made from natural fibers.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["Handwoven", "Durable", "Eco-Friendly"]
    },
    {
      id: 6,
      name: "Herbal Teas & Spices",
      description: "Premium Ceylon tea blends and authentic Sri Lankan spices.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      features: ["Ceylon Quality", "Organic", "Traditional Blends"]
    }
  ];

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Eco Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From natural homeware to organic foods, discover our diverse collection of sustainable Sri Lankan products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleViewDetails(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white group"
                  >
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      <ProductDetailsModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
};
