
import { TreePine, Droplets, Users, Recycle } from "lucide-react";

export const Sustainability = () => {
  const impacts = [
    {
      icon: TreePine,
      value: "10,000+",
      label: "Trees Protected",
      description: "Through sustainable farming practices"
    },
    {
      icon: Droplets,
      value: "50M",
      label: "Liters Water Saved",
      description: "Using efficient irrigation systems"
    },
    {
      icon: Users,
      value: "500+",
      label: "Farmers Supported",
      description: "Fair trade partnerships"
    },
    {
      icon: Recycle,
      value: "95%",
      label: "Waste Reduction",
      description: "Zero-waste production processes"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <TreePine className="h-32 w-32 transform rotate-12" />
        </div>
        <div className="absolute bottom-20 right-20">
          <TreePine className="h-24 w-24 transform -rotate-45" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Sustainability Commitment
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We believe in protecting our planet while delivering exceptional coconut products. Our sustainable practices benefit both the environment and local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                  <impact.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold mb-2">{impact.value}</div>
                <div className="text-lg font-semibold mb-2">{impact.label}</div>
                <div className="text-sm opacity-80">{impact.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Empowering Local Communities</h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Our partnership with local farmers goes beyond business. We provide training, fair prices, and support sustainable farming practices that preserve Sri Lanka's natural beauty for future generations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fair trade pricing for all farmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Training in sustainable farming techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Community development programs</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=400&fit=crop"
                alt="Sri Lankan farmers"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
