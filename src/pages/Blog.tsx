import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Risk Management: Beyond Traditional Insurance",
    excerpt: "As AI systems become more complex, traditional insurance models are struggling to keep pace. Discover how parametric insurance is revolutionizing risk coverage for AI companies.",
    content: "Traditional insurance was designed for predictable, well-understood risks. But AI systems present entirely new categories of risk that don't fit neatly into conventional coverage models...",
    author: "Sarah Chen",
    date: "2024-01-15",
    category: "Industry Insights",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Regulatory Compliance in AI: Navigating the New Landscape",
    excerpt: "With new AI regulations emerging globally, startups need proactive risk management strategies. Learn how to stay ahead of compliance challenges.",
    content: "The regulatory landscape for AI is evolving rapidly. From the EU AI Act to emerging frameworks in the US and Asia, AI companies must navigate an increasingly complex compliance environment...",
    author: "Dr. Emily Park",
    date: "2024-01-10",
    category: "Regulatory",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Case Study: How TechFlow Mitigated Model Performance Risk",
    excerpt: "A deep dive into how one AI startup used parametric insurance to protect against catastrophic model failures and maintain investor confidence.",
    content: "TechFlow, a Series B AI company specializing in financial risk modeling, faced a critical challenge: how to protect against model performance degradation that could impact their entire business...",
    author: "Marcus Rodriguez",
    date: "2024-01-05",
    category: "Case Study",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Understanding Parametric Insurance for AI Startups",
    excerpt: "A comprehensive guide to parametric insurance products and how they differ from traditional coverage for AI-specific risks.",
    content: "Parametric insurance represents a fundamental shift from indemnity-based coverage to predefined trigger-based payouts. For AI companies, this means faster claims processing and coverage for previously uninsurable risks...",
    author: "Sarah Chen",
    date: "2024-01-01",
    category: "Education",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Risk Pooling Strategies for AI Companies",
    excerpt: "Explore how collaborative risk pooling can reduce costs and improve coverage for AI startups facing similar operational challenges.",
    content: "Risk pooling allows AI companies with similar risk profiles to share coverage costs and reduce individual exposure. This collaborative approach is particularly effective for emerging risks...",
    author: "Dr. Emily Park",
    date: "2023-12-28",
    category: "Strategy",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Investment Opportunities in AI Risk Notes",
    excerpt: "For sophisticated investors, AI Risk Notes represent a new asset class with attractive risk-adjusted returns and portfolio diversification benefits.",
    content: "AI Risk Notes offer institutional investors exposure to the rapidly growing AI sector through a structured, risk-managed approach. These instruments provide defined payouts based on specific AI risk events...",
    author: "Marcus Rodriguez",
    date: "2023-12-20",
    category: "Investment",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
  }
];

const categories = ["All", "Industry Insights", "Regulatory", "Case Study", "Education", "Strategy", "Investment"];

export function Blog() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Insights & Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about the latest developments in AI risk management, 
              parametric insurance, and industry best practices.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Featured Article
          </h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="glass-card p-0 overflow-hidden hover:scale-[1.02] transition-transform">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">By {post.author}</span>
                    <Button variant="outline" className="hover:bg-primary/10">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="glass-card overflow-hidden hover:scale-[1.05] transition-transform group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground gap-2">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span className="text-xs font-medium">By {post.author}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest insights on AI risk management delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="neomorphic-btn">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}