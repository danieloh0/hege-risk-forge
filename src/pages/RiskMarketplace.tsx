import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Shield, 
  Clock,
  DollarSign,
  Target,
  Star
} from "lucide-react";

const riskContracts = [
  {
    id: "RC-101",
    startup: "VisionAI Corp",
    riskType: "Model Performance Failure",
    description: "Protection against computer vision model accuracy dropping below 85%",
    premium: "$15,000",
    coverage: "$500,000",
    expectedReturn: "22%",
    duration: "12 months",
    sector: "Computer Vision",
    riskLevel: "Medium",
    rating: 4.5,
    fundingProgress: 75
  },
  {
    id: "RC-102",
    startup: "HealthBot AI",
    riskType: "Regulatory Compliance Risk",
    description: "Coverage for FDA regulatory compliance violations in medical AI",
    premium: "$28,000",
    coverage: "$1,000,000",
    expectedReturn: "18%",
    duration: "18 months",
    sector: "Healthcare AI",
    riskLevel: "Low",
    rating: 4.8,
    fundingProgress: 90
  },
  {
    id: "RC-103",
    startup: "AutoDrive Systems",
    riskType: "Operational Downtime",
    description: "Protection against system outages affecting autonomous vehicle fleet",
    premium: "$45,000",
    coverage: "$2,000,000",
    expectedReturn: "25%",
    duration: "24 months",
    sector: "Autonomous Vehicles",
    riskLevel: "High",
    rating: 4.2,
    fundingProgress: 45
  },
  {
    id: "RC-104",
    startup: "CryptoAnalytics",
    riskType: "Data Breach Protection",
    description: "Coverage against unauthorized access to financial AI models",
    premium: "$20,000",
    coverage: "$750,000",
    expectedReturn: "20%",
    duration: "12 months",
    sector: "Fintech AI",
    riskLevel: "Medium",
    rating: 4.6,
    fundingProgress: 60
  },
  {
    id: "RC-105",
    startup: "CloudIntel AI",
    riskType: "Model Bias Detection",
    description: "Protection against AI model bias violations and discrimination claims",
    premium: "$12,500",
    coverage: "$400,000",
    expectedReturn: "24%",
    duration: "9 months",
    sector: "Cloud AI",
    riskLevel: "Low",
    rating: 4.7,
    fundingProgress: 85
  },
  {
    id: "RC-106",
    startup: "RoboManufacturing",
    riskType: "Safety System Failure",
    description: "Coverage for robotic system safety failures in manufacturing",
    premium: "$35,000",
    coverage: "$1,500,000",
    expectedReturn: "19%",
    duration: "15 months",
    sector: "Robotics",
    riskLevel: "High",
    rating: 4.3,
    fundingProgress: 30
  }
];

export function RiskMarketplace() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 page-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Risk <span className="gradient-text">Marketplace</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover and invest in parametric insurance contracts for AI startup risks. 
                Diversify your portfolio with innovative risk transfer instruments.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-1 max-w-md space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search startups or risk types..." 
                    className="pl-10 glass-card border-white/20"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="w-40 glass-card border-white/20">
                    <SelectValue placeholder="Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sectors</SelectItem>
                    <SelectItem value="healthcare">Healthcare AI</SelectItem>
                    <SelectItem value="fintech">Fintech AI</SelectItem>
                    <SelectItem value="autonomous">Autonomous Vehicles</SelectItem>
                    <SelectItem value="computer-vision">Computer Vision</SelectItem>
                    <SelectItem value="robotics">Robotics</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-40 glass-card border-white/20">
                    <SelectValue placeholder="Risk Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="low">Low Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="glass-card border-white/20">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card border-white/10 page-fade-in delay-100">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary">156</div>
                <div className="text-sm text-muted-foreground">Active Contracts</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10 page-fade-in delay-200">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 mx-auto mb-3 text-success" />
                <div className="text-2xl font-bold text-success">$85M</div>
                <div className="text-sm text-muted-foreground">Total Coverage</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10 page-fade-in delay-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold text-accent">21.4%</div>
                <div className="text-sm text-muted-foreground">Avg. Expected Return</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/10 page-fade-in delay-400">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-warning" />
                <div className="text-2xl font-bold text-warning">14</div>
                <div className="text-sm text-muted-foreground">Months Avg. Duration</div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Contracts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskContracts.map((contract, index) => (
              <Card 
                key={contract.id} 
                className={`glass-card border-white/10 page-fade-in delay-${(index + 1) * 100} hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Funding Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                  <div 
                    className="h-full bg-gradient-primary transition-all duration-300"
                    style={{ width: `${contract.fundingProgress}%` }}
                  />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-accent">
                      {contract.sector}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={
                        contract.riskLevel === 'Low' ? 'text-success' :
                        contract.riskLevel === 'Medium' ? 'text-warning' : 'text-destructive'
                      }
                    >
                      {contract.riskLevel} Risk
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {contract.startup}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {contract.riskType}
                  </CardDescription>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{contract.rating}</span>
                    <span className="text-xs text-muted-foreground">({contract.fundingProgress}% funded)</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {contract.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-muted-foreground">Premium</div>
                      <div className="font-semibold text-warning">{contract.premium}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Coverage</div>
                      <div className="font-semibold">{contract.coverage}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Expected Return</div>
                      <div className="font-semibold text-success">{contract.expectedReturn}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Duration</div>
                      <div className="font-semibold">{contract.duration}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button className="flex-1 neomorphic-btn group-hover:shadow-lg text-sm">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Invest
                    </Button>
                    <Button variant="outline" size="sm" className="glass-card border-white/20">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 page-fade-in delay-700">
            <Button variant="outline" size="lg" className="glass-card border-white/20">
              Load More Contracts
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}