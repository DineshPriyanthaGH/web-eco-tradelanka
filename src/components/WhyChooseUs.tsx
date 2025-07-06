
import { Shield, Leaf, Globe, Truck } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "All our products are sustainably sourced and environmentally responsible."
    },
    {
      icon: Shield,
      title: "Certified Quality",
      description: "ISO, HACCP, and organic certifications ensure the highest quality standards."
    },
    {
      icon: Globe,
      title: "Ethical Sourcing",
      description: "Fair trade partnerships supporting local communities and artisans."
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description: "Reliable worldwide shipping with eco-friendly packaging solutions."
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-600">Eco TradeLanka</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to sustainability, quality, and ethical business practices makes us your ideal partner for Sri Lankan eco products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center group"
            >
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
