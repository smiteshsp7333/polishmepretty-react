import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Smartphone, CreditCard, Wallet, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import upiQR from "@/assets/upi-qr.png";

const Payment = () => {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const { toast } = useToast();

  const upiId = "siddhibhumkar11@paytm";

  const paymentMethods = [
    {
      name: "PhonePe",
      icon: "📱",
      color: "bg-purple-500"
    },
    {
      name: "Google Pay",
      icon: "💳",
      color: "bg-blue-500"
    },
    {
      name: "Paytm",
      icon: "💰",
      color: "bg-blue-600"
    },
    {
      name: "BHIM UPI",
      icon: "🏦",
      color: "bg-green-500"
    }
  ];

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUPI(true);
    toast({
      title: "UPI ID Copied! 📋",
      description: "You can now paste it in your payment app",
    });
    setTimeout(() => setCopiedUPI(false), 2000);
  };

  return (
    <section id="payment" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Easy Payments
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure and convenient payment options for your nail art services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* QR Code Payment */}
          <Card className="bg-gradient-card shadow-elegant border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="font-playfair text-2xl text-foreground mb-2">
                Scan & Pay
              </CardTitle>
              <Badge className="bg-gradient-pink text-primary-foreground font-poppins mx-auto">
                Instant Payment
              </Badge>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              {/* QR Code */}
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-soft">
                  <img 
                    src={upiQR} 
                    alt="UPI QR Code" 
                    className="w-48 h-48 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-poppins text-muted-foreground">
                  Scan this QR code with any UPI payment app
                </p>

                {/* UPI ID */}
                <div className="bg-accent/30 p-4 rounded-xl border border-primary/10">
                  <p className="font-poppins text-sm text-muted-foreground mb-2">UPI ID</p>
                  <div className="flex items-center justify-between bg-background p-3 rounded-lg border border-primary/20">
                    <span className="font-poppins font-medium text-foreground">{upiId}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCopyUPI}
                      className="border-primary/20 hover:bg-primary/5"
                    >
                      {copiedUPI ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Supported Apps */}
                <div className="space-y-3">
                  <p className="font-poppins text-sm text-muted-foreground">Supported Payment Apps</p>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.name}
                        className="flex items-center space-x-3 bg-background p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        <div className={`w-8 h-8 ${method.color} rounded-full flex items-center justify-center text-white text-sm`}>
                          {method.icon}
                        </div>
                        <span className="font-poppins text-sm text-foreground">{method.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-lilac shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground flex items-center">
                  <Wallet className="mr-3 w-6 h-6 text-primary" />
                  Payment Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-poppins font-medium">UPI Payment</p>
                      <p className="font-poppins text-sm text-muted-foreground">Instant, secure & free</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-poppins font-medium">Cash Payment</p>
                      <p className="font-poppins text-sm text-muted-foreground">Pay at the studio</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-poppins font-medium text-foreground mb-2">Advance Payment</h4>
                  <p className="font-poppins text-sm text-muted-foreground">
                    For bridal packages, we recommend 50% advance payment to secure your booking.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground">
                  Payment Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-poppins font-medium">Secure Transactions</p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      All payments are processed through secure UPI gateways
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-poppins font-medium">Instant Confirmation</p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      Receive immediate payment confirmation via SMS
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-poppins font-medium">Refund Policy</p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      24-hour cancellation allows full refund
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground">
                  Quick Payment Steps
                </h4>
                <div className="font-poppins text-sm text-muted-foreground space-y-1">
                  <p>1. Open your UPI payment app</p>
                  <p>2. Scan the QR code above</p>
                  <p>3. Enter the service amount</p>
                  <p>4. Complete the payment</p>
                  <p>5. Screenshot the confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;