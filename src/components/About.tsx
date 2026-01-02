import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Sparkles, Star } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certified Professional",
      description: "Licensed nail technician with advanced certifications"
    },
    {
      icon: Heart,
      title: "500+ Happy Clients",
      description: "Building beautiful relationships one nail at a time"
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "Only the finest materials and luxury brands"
    },
    {
      icon: Star,
      title: "3 Years Experience",
      description: "Mastering the art of nail design since 2021"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Our Studio
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Where passion meets precision in the art of nail design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-gradient-pink text-primary-foreground font-poppins">
                  Our Story
                </Badge>
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  Creating Beauty, One Nail at a Time
                </h3>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  Welcome to our nail art sanctuary, where creativity meets craftsmanship. 
                  For over three years, we've been transforming nails into miniature works of art, 
                  helping our clients express their unique style and personality.
                </p>
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  What started as a passion for beautiful nails has grown into a thriving studio 
                  where every client is treated like family. We believe that nail art is more than 
                  just decoration – it's a form of self-expression that makes you feel confident and beautiful.
                </p>
              </div>

              <div className="bg-gradient-card p-6 rounded-xl shadow-soft">
                <blockquote className="font-poppins italic text-foreground text-center">
                  "Your nails are the canvas, and we are the artists. 
                  Let's create something beautiful together."
                </blockquote>
                <p className="font-playfair text-primary text-center mt-3 font-semibold">
                  - Siddhi Bhumkar, Founder & Lead Artist
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.title}
                  className="group bg-gradient-card border-primary/10 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-lilac p-8 rounded-2xl shadow-elegant">
            <h3 className="font-playfair text-2xl font-semibold text-foreground text-center mb-8">
              What We Stand For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground">Quality</h4>
                <p className="font-poppins text-sm text-muted-foreground">
                  We never compromise on the quality of our products or services
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground">Creativity</h4>
                <p className="font-poppins text-sm text-muted-foreground">
                  Every design is unique, reflecting your personal style and vision
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground">Excellence</h4>
                <p className="font-poppins text-sm text-muted-foreground">
                  We strive for perfection in every detail of your experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;