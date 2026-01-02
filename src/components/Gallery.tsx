import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gelNails from "@/assets/gel-nails.jpg";
import frenchTips from "@/assets/french-tips.jpg";
import acrylicArt from "@/assets/acrylic-art.jpg";
import bridalNails from "@/assets/bridal-nails.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Bridal", "Casual", "Minimalist", "Artistic"];
  
  const galleryItems = [
    {
      image: bridalNails,
      title: "Elegant Bridal Design",
      category: "Bridal",
      description: "Delicate lace patterns with pearl accents"
    },
    {
      image: gelNails,
      title: "Glossy Gel Finish",
      category: "Casual",
      description: "Pink and gold gradient with crystal details"
    },
    {
      image: frenchTips,
      title: "Modern French Tips",
      category: "Minimalist",
      description: "Classic elegance with contemporary twist"
    },
    {
      image: acrylicArt,
      title: "Floral Acrylic Art",
      category: "Artistic",
      description: "Hand-painted florals in lilac and pink"
    },
    {
      image: gelNails,
      title: "Subtle Glam",
      category: "Casual",
      description: "Perfect for everyday elegance"
    },
    {
      image: frenchTips,
      title: "Clean Minimalism",
      category: "Minimalist", 
      description: "Pure sophistication in simplicity"
    },
    {
      image: acrylicArt,
      title: "Artistic Expression",
      category: "Artistic",
      description: "Bold designs that make a statement"
    },
    {
      image: bridalNails,
      title: "Wedding Perfection",
      category: "Bridal",
      description: "Dreams come true in every detail"
    }
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our stunning collection of nail art designs and get inspired
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`font-poppins rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-gradient-pink shadow-elegant scale-105' 
                    : 'border-primary/20 hover:bg-primary/5 hover:border-primary/40'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative overflow-hidden rounded-xl bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="mb-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="font-playfair text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-sm opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Category Badge (visible by default) */}
              <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity duration-300">
                <Badge className="bg-white/90 text-foreground font-poppins">
                  {item.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-card p-6 rounded-xl shadow-soft">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <p className="font-poppins text-foreground">
              Love what you see? Let's create your perfect nail art!
            </p>
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;