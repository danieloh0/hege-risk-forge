import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, TrendingUp, Award, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Head of Risk at Stripe, 10+ years in fintech and insurance.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b787?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Google AI engineer, specialist in machine learning risk models.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Emily Park",
    role: "Head of Risk Sciences",
    bio: "PhD in Quantitative Finance, former Goldman Sachs risk analyst.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
  }
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in complete transparency in risk assessment and contract terms."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive ecosystem where startups and investors thrive together."
  },
  {
    icon: Target,
    title: "Precision & Innovation",
    description: "Leveraging cutting-edge AI to deliver precise risk measurement and mitigation."
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Creating sustainable risk solutions that scale with the AI industry."
  }
];

const stats = [
  { number: "$50M+", label: "Risk Capital Deployed" },
  { number: "200+", label: "AI Startups Protected" },
  { number: "95%", label: "Risk Prediction Accuracy" },
  { number: "24/7", label: "Monitoring & Support" }
];

export function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Redefining Risk for the AI Era
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Hege is pioneering the future of parametric insurance for AI startups, creating 
            innovative risk transfer solutions that protect innovation while enabling sustainable growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're building the infrastructure that enables AI innovation to flourish by 
                providing sophisticated, data-driven risk management solutions. Our parametric 
                insurance products protect against the unique risks facing AI companies while 
                creating new investment opportunities for risk capital.
              </p>
              <p className="text-lg text-muted-foreground">
                From model performance failures to regulatory compliance issues, we help AI 
                startups quantify, transfer, and mitigate risks that traditional insurance 
                simply cannot address.
              </p>
            </div>
            <Card className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Industry Leading</h3>
                  <p className="text-sm text-muted-foreground">First parametric insurance platform for AI risks</p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Serving AI companies worldwide</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission to transform risk management in the AI industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders from fintech, insurance, and AI bringing together decades 
              of expertise in risk management and technology innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Risk Management?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the growing ecosystem of AI companies and investors leveraging 
              Hege's innovative risk solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neomorphic-btn">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Schedule a Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}