import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const services = [
    "Gel Manicure (₹800)",
    "French Tips (₹600)",
    "Acrylic Art (₹1200)",
    "Bridal Package (₹2000)",
    "Custom Design (Price on consultation)"
  ];

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    setIsSubmitted(true);
    toast({
      title: "Booking Request Sent! 💅",
      description: "We'll confirm your appointment within 24 hours via WhatsApp or call.",
    });

    // In a real app, you would send this data to your backend
    console.log("Booking data:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto bg-gradient-card shadow-elegant border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Booking Request Sent! ✨
              </h3>
              <p className="font-poppins text-muted-foreground mb-6">
                Thank you for choosing our nail art studio! We've received your booking request and will confirm your appointment within 24 hours.
              </p>
              <div className="space-y-2 text-sm font-poppins text-muted-foreground">
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Time:</strong> {formData.time}</p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-gradient-pink"
              >
                Book Another Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Appointment
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your nails? Schedule your appointment today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <Card className="bg-gradient-card shadow-elegant border-primary/20">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-foreground">
                Schedule Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-poppins">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-poppins">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-poppins">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="font-poppins">Service *</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-primary/20 rounded-md focus:border-primary focus:outline-none bg-background"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="font-poppins">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="font-poppins">Preferred Time *</Label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-primary/20 rounded-md focus:border-primary focus:outline-none bg-background"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-poppins">Special Requests</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special design requests or notes..."
                    className="border-primary/20 focus:border-primary resize-none"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-pink hover:shadow-hover transition-all duration-300 transform hover:scale-105 font-poppins text-lg py-6"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Studio Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-lilac shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground">
                  Studio Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-poppins font-medium">Monday - Saturday</p>
                    <p className="font-poppins text-sm text-muted-foreground">11:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-poppins font-medium">Sunday</p>
                    <p className="font-poppins text-sm text-muted-foreground">12:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-poppins font-medium">+91 90215 06205</p>
                    <p className="font-poppins text-sm text-muted-foreground">WhatsApp available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-poppins font-medium">siddhibhumkar11@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-poppins font-medium">Siddhi Enterprises, Ground Floor</p>
                    <p className="font-poppins text-sm text-muted-foreground">Saundarya Heights, Manchar, Pune 410503</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="flex items-start space-x-3">
                <Badge className="bg-primary text-primary-foreground">
                  Note
                </Badge>
                <div className="font-poppins text-sm text-muted-foreground">
                  <p>We'll confirm your appointment within 24 hours via WhatsApp or call. 
                  Please arrive 10 minutes early for your appointment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;