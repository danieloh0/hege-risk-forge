import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Shield } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch with our team",
    contact: "hello@hege.ai",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with a risk specialist",
    contact: "+1 (555) 123-4567",
    action: "Call Now"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available 24/7",
    action: "Start Chat"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Financial District, SF, CA 94111",
    description: "Our headquarters and main operations center"
  },
  {
    city: "New York",
    address: "456 Wall Street, New York, NY 10005",
    description: "East coast operations and investor relations"
  },
  {
    city: "London",
    address: "789 Canary Wharf, London E14 5AB, UK",
    description: "European headquarters and regulatory affairs"
  }
];

const faqItems = [
  {
    question: "What types of risks does Hege cover for AI startups?",
    answer: "Hege provides parametric insurance for various AI-specific risks including model performance degradation, regulatory compliance failures, data quality issues, algorithmic bias incidents, and operational technology failures. Our coverage is designed specifically for the unique challenges facing AI companies."
  },
  {
    question: "How is parametric insurance different from traditional insurance?",
    answer: "Parametric insurance pays out based on predefined triggers rather than actual losses. This means faster claim processing, transparent terms, and coverage for risks that traditional insurance cannot address. For AI companies, this provides more predictable and relevant coverage."
  },
  {
    question: "What's the minimum coverage amount and duration?",
    answer: "Our parametric contracts start at $100,000 with terms ranging from 6 months to 3 years. We work with each startup to design coverage that matches their specific risk profile and business needs."
  },
  {
    question: "How quickly can claims be processed and paid out?",
    answer: "One of the key advantages of parametric insurance is speed. Most claims are processed and paid within 48-72 hours of trigger verification, as there's no need for lengthy loss assessments or negotiations."
  },
  {
    question: "Can investors participate in risk pools?",
    answer: "Yes, qualified investors can participate in our risk pools through AI Risk Notes. These structured products provide exposure to AI risk premiums while offering attractive risk-adjusted returns and portfolio diversification."
  },
  {
    question: "What data do you need to assess our startup's risk profile?",
    answer: "Our risk assessment considers factors like model architecture, training data quality, operational procedures, compliance frameworks, and historical performance metrics. We work with your team to gather relevant data while respecting confidentiality."
  },
  {
    question: "Do you offer group coverage for accelerators or venture portfolios?",
    answer: "Yes, we provide group captive solutions for accelerators, VCs, and other organizations looking to provide risk coverage across their portfolio companies. This approach often reduces costs and improves coverage terms."
  },
  {
    question: "How do you monitor triggers for parametric contracts?",
    answer: "We use automated monitoring systems combined with third-party data sources to track trigger conditions in real-time. This includes performance metrics, regulatory announcements, and other relevant data points specific to each contract."
  }
];

export function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore how Hege can protect your AI startup or discuss investment 
            opportunities? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                <p className="font-medium mb-4">{method.contact}</p>
                <Button variant="outline" size="sm" className="hover:bg-primary/10">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">I'm interested in...</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Parametric Insurance for my AI startup</option>
                      <option>Investing in AI Risk Notes</option>
                      <option>Group coverage for my portfolio</option>
                      <option>Partnership opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your specific needs..."
                    ></textarea>
                  </div>
                  <Button size="lg" className="w-full neomorphic-btn">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm mt-2">Emergency support available 24/7</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Who We Work With
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• AI startups (Seed to Series C)</p>
                    <p>• Institutional investors</p>
                    <p>• Venture capital firms</p>
                    <p>• Accelerators and incubators</p>
                    <p>• Insurance brokers</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Data Security
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All communications are encrypted and we maintain strict confidentiality 
                    agreements. Your proprietary information is protected throughout our 
                    assessment process.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{office.city}</h3>
                <p className="text-muted-foreground text-sm mb-3">{office.address}</p>
                <p className="text-muted-foreground text-xs">{office.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Card className="glass-card p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>
    </div>
  );
}