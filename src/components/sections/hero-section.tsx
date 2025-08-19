import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Risk Management Platform"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center page-fade-in">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Alternative Risk</span>
            <br />
            <span className="text-foreground">for AI Startups</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Parametric insurance solutions that transform AI startup risks into 
            tradeable assets, connecting founders with sophisticated investors.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center delay-300">
            <Button size="lg" className="neomorphic-btn text-lg px-8 py-4 group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 glass-card">
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 delay-500">
            <div className="glass-card p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-foreground">$50M+</div>
              <div className="text-muted-foreground">Risk Capital Deployed</div>
            </div>
            <div className="glass-card p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-muted-foreground">Payout Accuracy</div>
            </div>
            <div className="glass-card p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-foreground">150+</div>
              <div className="text-muted-foreground">AI Startups Protected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}