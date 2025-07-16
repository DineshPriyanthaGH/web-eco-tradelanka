
import { ChevronRight, Leaf, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { QuoteForm } from "./QuoteForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80",
    title: "Premium Coconut Products",
    subtitle: "From shell to oil - sustainable coconut solutions",
    description: "Handcrafted coconut shell bowls, utensils, and eco-friendly kitchenware exported globally"
  },
  {
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1920&q=80",
    title: "Sustainable Export Excellence",
    subtitle: "Connecting Sri Lanka to the world",
    description: "Leading the way in eco-friendly exports with quality products and ethical sourcing"
  },
  {
    image: "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=1920&q=80",
    title: "Traditional Craftsmanship",
    subtitle: "Preserving heritage through export",
    description: "Supporting local artisans while delivering authentic Sri Lankan products worldwide"
  },
  {
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1920&q=80",
    title: "Global Reach, Local Impact",
    subtitle: "Serving 30+ countries worldwide",
    description: "Building bridges between Sri Lankan producers and international markets"
  }
];

export const Hero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides for text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Auto-sliding Carousel Background */}
        <Carousel
          className="absolute inset-0 w-full h-full"
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-screen">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float opacity-20">
            <Leaf className="h-20 w-20 text-green-300 transform rotate-12" />
          </div>
          <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <Leaf className="h-16 w-16 text-green-400 transform -rotate-45" />
          </div>
          <div className="absolute bottom-32 left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Leaf className="h-24 w-24 text-green-200 transform rotate-45" />
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Side - Sliding Text Content and Static Branding */}
            <div className="animate-fade-in">
              {/* Static Branding Content */}
             

              {/* Dynamic Text Content */}
              <div className="mb-8 h-64 flex flex-col justify-center relative">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 transform ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-green-200 mb-4">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg text-white/90 max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {heroSlides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-green-400 w-8'
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Stats Cards */}
               <div className="flex justify-end min-h-screen items-center">
            
            {/* Right Side - All Content */}
            <div className="max-w-2xl w-full animate-fade-in">
              {/* Static Branding Content */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Sri Lanka's Premier
                  <span className="block text-green-400">
                    Eco Product Exporter
                  </span>
                </h2>
                
                <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                  Sustainably Sourced. Globally Delivered. Inspired by Nature.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg group">
                    Browse Products
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => setIsQuoteFormOpen(true)}
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-3 text-lg backdrop-blur-sm bg-white/10"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>

              

              

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20 text-center">
                  <Globe className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">30+</div>
                  <div className="text-green-100 text-sm">Countries Served</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20 text-center">
                  <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-green-100 text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20 text-center">
                  <Leaf className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-green-100 text-sm">Eco-Friendly</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </>
  );
};
