import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  BarChart3,
  Plus,
  Filter,
  AlertCircle,
  Clock
} from "lucide-react";

const investments = [
  {
    id: "INV-001",
    startup: "NeuroVision AI",
    riskType: "Model Performance",
    invested: "$50,000",
    expectedReturn: "18%",
    status: "Active",
    timeRemaining: "8 months",
    riskLevel: "Medium"
  },
  {
    id: "INV-002",
    startup: "DataFlow Labs",
    riskType: "Compliance Risk",
    invested: "$25,000",
    expectedReturn: "22%",
    status: "Active",
    timeRemaining: "3 months",
    riskLevel: "Low"
  },
  {
    id: "INV-003",
    startup: "AutoDrive Systems",
    riskType: "Operational Risk",
    invested: "$75,000",
    expectedReturn: "15%",
    status: "Matured",
    timeRemaining: "Completed",
    riskLevel: "High"
  }
];

const availableRisks = [
  {
    startup: "CloudAI Inc",
    riskType: "Data Breach Protection",
    premium: "$18,000",
    coverage: "$500,000",
    expectedReturn: "24%",
    duration: "12 months",
    sector: "Cloud AI"
  },
  {
    startup: "MedTech Analytics",
    riskType: "Regulatory Compliance",
    premium: "$32,000",
    coverage: "$800,000",
    expectedReturn: "20%",
    duration: "18 months",
    sector: "Healthcare AI"
  },
  {
    startup: "FinBot Solutions",
    riskType: "Model Accuracy",
    premium: "$12,500",
    coverage: "$300,000",
    expectedReturn: "28%",
    duration: "6 months",
    sector: "Fintech AI"
  }
];

export function InvestorDashboard() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 page-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Investor <span className="gradient-text">Portfolio</span>
                </h1>
                <p className="text-muted-foreground">Track and manage your AI risk investments</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="glass-card">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="neomorphic-btn">
                  <Plus className="w-4 h-4 mr-2" />
                  New Investment
                </Button>
              </div>
            </div>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card border-white/10 page-fade-in delay-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="h-5 w-5 text-success" />
                  <span className="text-sm text-muted-foreground">Total Invested</span>
                </div>
                <div className="text-2xl font-bold text-success">$1.2M</div>
                <div className="text-xs text-muted-foreground">+12% this month</div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 page-fade-in delay-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Expected Returns</span>
                </div>
                <div className="text-2xl font-bold text-primary">19.2%</div>
                <div className="text-xs text-muted-foreground">Avg annual return</div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 page-fade-in delay-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Active Contracts</span>
                </div>
                <div className="text-2xl font-bold text-accent">24</div>
                <div className="text-xs text-muted-foreground">Across 18 startups</div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 page-fade-in delay-400">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-warning" />
                  <span className="text-sm text-muted-foreground">Pending Payouts</span>
                </div>
                <div className="text-2xl font-bold text-warning">$180K</div>
                <div className="text-xs text-muted-foreground">3 contracts triggered</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="portfolio" className="space-y-6">
            <TabsList className="glass-card p-1">
              <TabsTrigger value="portfolio" className="data-[state=active]:bg-primary/20">
                Current Portfolio
              </TabsTrigger>
              <TabsTrigger value="marketplace" className="data-[state=active]:bg-primary/20">
                Risk Marketplace
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-primary/20">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-6">
              <Card className="glass-card border-white/10 page-fade-in delay-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Active Investments</span>
                  </CardTitle>
                  <CardDescription>
                    Your current risk contract investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investments.map((investment) => (
                      <div key={investment.id} className="p-4 rounded-lg bg-gradient-secondary/30 border border-white/10">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold">{investment.startup}</span>
                              <Badge 
                                variant={investment.status === 'Active' ? 'default' : 'secondary'}
                                className={investment.status === 'Active' ? 'bg-success/20 text-success' : 'bg-primary/20 text-primary'}
                              >
                                {investment.status}
                              </Badge>
                              <Badge variant="outline" className={
                                investment.riskLevel === 'Low' ? 'text-success' :
                                investment.riskLevel === 'Medium' ? 'text-warning' : 'text-destructive'
                              }>
                                {investment.riskLevel} Risk
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {investment.riskType}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Invested</div>
                              <div className="font-semibold text-warning">{investment.invested}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Expected Return</div>
                              <div className="font-semibold text-success">{investment.expectedReturn}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Time Remaining</div>
                              <div className="font-semibold">{investment.timeRemaining}</div>
                            </div>
                            <div>
                              <Button size="sm" variant="outline" className="w-full">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketplace" className="space-y-6">
              <Card className="glass-card border-white/10 page-fade-in delay-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-accent" />
                    <span>Available Risk Contracts</span>
                  </CardTitle>
                  <CardDescription>
                    New investment opportunities in AI startup risks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {availableRisks.map((risk, index) => (
                      <Card key={index} className="glass-card border-white/10 hover:scale-105 transition-all duration-300 group">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {risk.startup}
                              </CardTitle>
                              <CardDescription>{risk.riskType}</CardDescription>
                            </div>
                            <Badge variant="outline" className="text-accent">
                              {risk.sector}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <div className="text-muted-foreground">Premium</div>
                              <div className="font-semibold text-warning">{risk.premium}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Coverage</div>
                              <div className="font-semibold">{risk.coverage}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Expected Return</div>
                              <div className="font-semibold text-success">{risk.expectedReturn}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Duration</div>
                              <div className="font-semibold">{risk.duration}</div>
                            </div>
                          </div>
                          <Button className="w-full neomorphic-btn group-hover:shadow-lg">
                            Invest Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card className="glass-card border-white/10 page-fade-in delay-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-chart-1" />
                    <span>Portfolio Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-2 text-primary" />
                      <p className="text-sm text-muted-foreground">Advanced analytics coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}