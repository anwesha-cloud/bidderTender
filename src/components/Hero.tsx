import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Tender Intelligence
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Global Government{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Tenders
                </span>{" "}
                at Your Fingertips
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Access government and public tenders from around the world. Get AI-generated proposals, 
                personalized recommendations, and secure transactions - all in one platform.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-success" />
                </div>
                <span className="text-foreground font-medium">Smart Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-foreground font-medium">AI Proposals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-warning/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-warning" />
                </div>
                <span className="text-foreground font-medium">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Global Coverage</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Tenders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-2">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Global tender marketplace platform showing professional business environment with digital screens and tender documents"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;