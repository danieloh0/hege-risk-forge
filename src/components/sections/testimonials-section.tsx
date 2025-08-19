import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Hege transformed our risk management. The parametric triggers gave us instant coverage for our AI model failures.",
    author: "Sarah Chen",
    role: "CTO",
    company: "NeuroTech AI",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    type: "startup"
  },
  {
    quote: "Outstanding returns on AI risk investments. The transparency and automation make this a game-changer.",
    author: "Marcus Rodriguez",
    role: "Portfolio Manager",
    company: "Vertex Capital",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    type: "investor"
  },
  {
    quote: "Finally, insurance that understands AI risks. No more endless paperwork or claim disputes.",
    author: "David Kim",
    role: "Founder",
    company: "DataFlow Labs",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    type: "startup"
  },
  {
    quote: "The risk scoring engine helped us identify opportunities we never saw before. Incredible platform.",
    author: "Emma Thompson",
    role: "Investment Director",
    company: "TechVenture Fund",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    type: "investor"
  },
  {
    quote: "Hege's risk pooling feature reduced our premiums by 40% while expanding our coverage. Brilliant solution.",
    author: "Alex Patel",
    role: "CFO",
    company: "VisionAI Corp",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    type: "startup"
  },
  {
    quote: "Direct access to AI startup risks as an asset class. The platform makes complex investments simple.",
    author: "Jennifer Walsh",
    role: "Fund Manager",
    company: "Alpha Investments",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    type: "investor"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 page-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the founders and investors who are transforming 
            risk management with Hege's innovative platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.author}-${index}`} 
              className={`glass-card border-white/10 page-fade-in delay-${(index + 1) * 100} hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Type Badge */}
              <div className="absolute top-4 right-4">
                <Badge 
                  variant={testimonial.type === 'startup' ? 'default' : 'secondary'} 
                  className={testimonial.type === 'startup' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}
                >
                  {testimonial.type === 'startup' ? 'Startup' : 'Investor'}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center page-fade-in delay-600">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center page-fade-in delay-700">
            <div className="text-4xl font-bold gradient-text mb-2">24h</div>
            <div className="text-muted-foreground">Average Payout Time</div>
          </div>
          <div className="text-center page-fade-in delay-800">
            <div className="text-4xl font-bold gradient-text mb-2">$0</div>
            <div className="text-muted-foreground">Claims Processing Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
}