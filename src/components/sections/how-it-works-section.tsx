import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, DollarSign, Activity, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Define Risk Parameters",
    description: "AI startups specify their unique risks - model failures, compliance breaches, operational disruptions.",
    step: "01"
  },
  {
    icon: DollarSign,
    title: "Fund Smart Contracts",
    description: "Investors review risk profiles and fund parametric insurance contracts with clear payout triggers.",
    step: "02"
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Our platform continuously monitors predefined parameters using APIs, data feeds, and automated checks.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Automatic Payouts",
    description: "When triggers are met, smart contracts automatically execute payouts - no claims process needed.",
    step: "04"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 bg-gradient-secondary/30" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 page-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">Hege</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process transforms traditional insurance into 
            transparent, automated risk transfer solutions.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className={`glass-card border-white/10 page-fade-in delay-${(index + 1) * 100} hover:scale-105 transition-all duration-300 group`}>
                <CardHeader className="text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="p-4 rounded-xl bg-gradient-secondary group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 page-fade-in delay-500">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to revolutionize your risk management strategy?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neomorphic-btn px-8 py-3 text-lg font-medium text-foreground hover:text-primary transition-colors">
              Start as Startup
            </button>
            <button className="glass-card px-8 py-3 text-lg font-medium text-foreground hover:text-accent transition-colors border border-white/20">
              Invest in Risks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}