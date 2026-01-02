import { Heart, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/polishmeprettyyy",
      color: "hover:text-pink-500"
    },
    {
      name: "WhatsApp", 
      icon: Phone,
      href: "https://wa.me/919021506205",
      color: "hover:text-green-500"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:siddhibhumkar11@gmail.com",
      color: "hover:text-blue-500"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-foreground/95 to-foreground text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              PolishMePrettyyy
            </h3>
            <p className="font-poppins text-gray-300 leading-relaxed">
              Creating beautiful nail art that reflects your unique style and personality. 
              Where creativity meets craftsmanship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-pink-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-poppins text-gray-300 hover:text-pink-300 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-pink-300">Our Services</h4>
            <ul className="space-y-2 font-poppins text-gray-300">
              <li>Gel Manicure</li>
              <li>French Tips</li>
              <li>Acrylic Art</li>
              <li>Bridal Packages</li>
              <li>Custom Designs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-pink-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <div className="font-poppins text-gray-300 text-sm">
                  <p>Siddhi Enterprises, Ground Floor</p>
                  <p>Saundarya Heights, Manchar, Pune 410503</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-300 flex-shrink-0" />
                <span className="font-poppins text-gray-300 text-sm">+91 90215 06205</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-300 flex-shrink-0" />
                <span className="font-poppins text-gray-300 text-sm">siddhibhumkar11@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 font-poppins text-gray-300 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-400 fill-current" />
            <span>for beautiful nails</span>
          </div>
          
          <div className="font-poppins text-gray-300 text-sm text-center md:text-right">
            <p>&copy; 2024 PolishMePrettyyy. All rights reserved.</p>
            <p className="mt-1">Designed for beauty enthusiasts</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 opacity-60"></div>
      </div>
    </footer>
  );
};

export default Footer;