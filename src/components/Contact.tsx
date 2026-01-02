import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 90215 06205",
      secondary: "Available 10 AM - 9 PM",
      action: () => window.open("tel:+919021506205")
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+91 90215 06205",
      secondary: "Quick responses guaranteed",
      action: () => window.open("https://wa.me/919021506205", "_blank")
    },
    {
      icon: Mail,
      title: "Email",
      primary: "siddhibhumkar11@gmail.com",
      secondary: "We reply within 24 hours",
      action: () => window.open("mailto:siddhibhumkar11@gmail.com")
    },
    {
      icon: Instagram,
      title: "Instagram",
      primary: "@polishmeprettyyy",
      secondary: "Follow for daily inspiration",
      action: () => window.open("https://instagram.com/polishmeprettyyy", "_blank")
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Message Sent Successfully! 📧",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });

    // In a real app, you would send this data to your backend
    console.log("Contact form data:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to book an appointment? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <Card 
                  key={info.title}
                  className="group cursor-pointer bg-gradient-card border-primary/10 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105"
                  onClick={info.action}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    <p className="font-poppins font-medium text-foreground mb-1">
                      {info.primary}
                    </p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {info.secondary}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location Card */}
            <Card className="bg-gradient-lilac shadow-elegant border-primary/20">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground flex items-center">
                  <MapPin className="mr-3 w-6 h-6 text-primary" />
                  Visit Our Studio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-poppins font-medium text-foreground">
                    PolishMePrettyyy
                  </p>
                  <p className="font-poppins text-muted-foreground">
                    Siddhi Enterprises, Ground Floor<br />
                    Saundarya Heights, Manchar<br />
                    Pune 410503
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-poppins font-medium text-foreground">Studio Hours</p>
                  <div className="font-poppins text-sm text-muted-foreground space-y-1">
                    <p>Monday - Saturday: 11:00 AM - 8:00 PM</p>
                    <p>Sunday: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  <MapPin className="mr-2 w-4 h-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-elegant border-primary/20">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-foreground">
                {isSubmitted ? "Message Sent! ✨" : "Send us a Message"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-pink rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                    Thank You!
                  </h3>
                  <p className="font-poppins text-muted-foreground mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="bg-gradient-pink"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-poppins">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-poppins">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-poppins">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your nail art ideas, questions, or feedback..."
                      required
                      className="border-primary/20 focus:border-primary resize-none"
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-pink hover:shadow-hover transition-all duration-300 transform hover:scale-105 font-poppins text-lg py-6"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
            <Button 
              size="lg"
              className="bg-gradient-pink font-poppins"
              onClick={() => window.open("https://wa.me/919021506205", "_blank")}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 font-poppins"
              onClick={() => window.open("tel:+919021506205")}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;