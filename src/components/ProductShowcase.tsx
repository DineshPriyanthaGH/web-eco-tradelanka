
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
      image: "https://i.etsystatic.com/26320561/r/il/7f58ff/2908823073/il_fullxfull.2908823073_5xdd.jpg?w=400&h=300&fit=crop",
      features: ["100% Natural", "Biodegradable", "Handcrafted"]
    },
    {
      id: 2,
      name: "Areca Leaf Plates",
      description: "Biodegradable, sturdy, and stylish plates perfect for conscious dining.",
      image: "https://cocohitech.com/wp-content/uploads/2020/04/Areca-Leaf-Plates-2.jpg?w=400&h=300&fit=crop",
      features: ["Biodegradable", "Chemical-Free", "Various Sizes"]
    },
    {
  id: 4,
  name: "Dry Coconut",
  description: "Dried coconut, perfect for cooking, baking, and snacking.",
  image: "https://img2.exportersindia.com/product_images/bc-full/2025/8/14874244/dried-coconut-1754541320-8252484.jpeg",
  features: ["High in Fiber", "Rich in Healthy Fats", "Naturally Sweet"]
},
    {
  id: 5,
  name: "Coconut Husk",
  description: "Natural coconut husks, ideal for eco-friendly products and crafting.",
  image: "https://i.etsystatic.com/24552157/r/il/df5847/2907100485/il_1588xN.2907100485_2o3g.jpg",
  features: ["Eco-Friendly", "Natural Material", "Sustainable"]
},

   {
  id: 6,
  name: "Husked Coconuts",
  description: "Mature coconuts with the outer husk removed, ready for culinary and industrial use.",
  image: "https://th.bing.com/th/id/R.6057e00271fc5316cac5539b275708ce?rik=zSumOLTKwjDhPg&riu=http%3a%2f%2fspecialtyproduce.com%2fsppics%2f943.png&ehk=4ojyVsglsIIUwSX%2bwCXv70STdBluQTS%2fs9nQ7IGvqxg%3d&risl=&pid=ImgRaw&r=0",
  features: ["Matured Fruit", "Shell Removed", "Versatile Applications"]
}
,
  {
  id: 7,
  name: "Fresh Coconut",
  description: "Whole, mature coconuts with the outer husk intact, offering natural coconut water and fresh coconut meat.",
  image: "https://www.tastingtable.com/img/gallery/which-country-produces-the-most-coconuts/l-intro-1661971699.jpg",
  features: ["Natural Coconut Water", "Fresh Coconut Meat", "Versatile Culinary Use"]
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
