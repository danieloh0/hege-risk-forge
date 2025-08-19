import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Users, Zap, Target, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Risk Marketplace",
    description: "Browse, invest in, or create parametric insurance contracts tailored for AI startup risks.",
    color: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Real-time Risk Scoring",
    description: "Advanced analytics engine monitoring operational, compliance, and model risks in real-time.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Risk Pooling",
    description: "Join forces with other startups in group captives to reduce premiums and share resources.",
    color: "text-chart-3"
  },
  {
    icon: Zap,
    title: "Smart Contract Triggers",
    description: "Automated payouts based on predefined parameters eliminate claims disputes and delays.",
    color: "text-chart-4"
  },
  {
    icon: Target,
    title: "AI Risk Notes",
    description: "Tradeable instruments that allow investors to directly participate in AI startup risk markets.",
    color: "text-chart-5"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Comprehensive protection for AI startups worldwide with local regulatory compliance.",
    color: "text-primary"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 page-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Revolutionary</span> Risk Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming how AI startups manage risk with parametric insurance, 
            real-time monitoring, and innovative capital market solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`glass-card border-white/10 page-fade-in delay-${(index + 1) * 100} hover:scale-105 transition-all duration-300 group`}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-secondary ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}