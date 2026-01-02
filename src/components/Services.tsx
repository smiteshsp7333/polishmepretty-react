import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, IndianRupee } from "lucide-react";
import gelNails from "@/assets/gel-nails.jpg";
import frenchTips from "@/assets/french-tips.jpg";
import acrylicArt from "@/assets/acrylic-art.jpg";
import bridalNails from "@/assets/bridal-nails.jpg";

const Services = () => {
  const services = [
    {
      title: "Gel Manicure",
      description: "Long-lasting, glossy finish with chip-resistant gel polish",
      price: 800,
      duration: "45 mins",
      image: gelNails,
      popular: true
    },
    {
      title: "French Tips",
      description: "Classic elegance with modern twists and perfect precision",
      price: 600,
      duration: "30 mins", 
      image: frenchTips,
      popular: false
    },
    {
      title: "Acrylic Art",
      description: "Custom nail art with intricate designs and premium materials",
      price: 1200,
      duration: "90 mins",
      image: acrylicArt,
      popular: false
    },
    {
      title: "Bridal Package",
      description: "Complete bridal nail experience with consultation and touch-ups",
      price: 2000,
      duration: "2 hours",
      image: bridalNails,
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium nail services, each crafted to perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group cursor-pointer bg-gradient-card border-primary/10 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {service.popular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-poppins">
                    Popular
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="font-playfair text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-poppins text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-primary font-poppins font-semibold">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    {service.price}
                  </div>
                  <div className="flex items-center text-muted-foreground font-poppins text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                
                <div className="w-full h-1 bg-gradient-pink rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-poppins text-muted-foreground mb-4">
            All services include nail care consultation and aftercare tips
          </p>
          <div className="inline-flex items-center space-x-2 bg-accent/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-poppins text-sm text-foreground">Book your appointment today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;