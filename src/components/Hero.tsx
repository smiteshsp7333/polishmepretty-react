import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-nails.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 opacity-30">
        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
      </div>
      <div className="absolute top-32 right-32 opacity-30">
        <Star className="w-6 h-6 text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-32 left-32 opacity-30">
        <Star className="w-10 h-10 text-primary animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Beautiful Nail Art
          </span>
          That Speaks Volume
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your nails into works of art with our premium nail services. 
          From elegant French tips to stunning gel designs, we create beauty that speaks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="font-poppins text-lg px-8 py-6 rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-gradient-pink border-0"
            onClick={() => scrollToSection('booking')}
          >
            <Sparkles className="mr-2 w-5 h-5" />
            Book Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="font-poppins text-lg px-8 py-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105 border-primary/20 hover:bg-primary/5"
            onClick={() => scrollToSection('gallery')}
          >
            View Gallery
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-primary/20">
          <div className="text-center">
            <div className="font-playfair text-2xl font-bold text-primary">500+</div>
            <div className="font-poppins text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-2xl font-bold text-primary">3 Years</div>
            <div className="font-poppins text-sm text-muted-foreground">Experience</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-2xl font-bold text-primary">50+</div>
            <div className="font-poppins text-sm text-muted-foreground">Designs</div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default Hero;