import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Bell,
  Plus,
  Activity,
  DollarSign,
  Clock
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-illustration.jpg";

const riskScores = [
  { category: "Operational Risk", score: 85, status: "Good", color: "text-success" },
  { category: "Model Risk", score: 72, status: "Moderate", color: "text-warning" },
  { category: "Compliance Risk", score: 94, status: "Excellent", color: "text-success" },
  { category: "Market Risk", score: 68, status: "Moderate", color: "text-warning" }
];

const activeContracts = [
  {
    id: "RC-001",
    riskType: "Model Failure Protection",
    premium: "$12,500",
    coverage: "$500,000",
    status: "Active",
    trigger: "Model accuracy < 85%",
    expiry: "Dec 2024"
  },
  {
    id: "RC-002", 
    riskType: "Data Breach Coverage",
    premium: "$8,000",
    coverage: "$250,000",
    status: "Active",
    trigger: "Unauthorized access detected",
    expiry: "Jan 2025"
  },
  {
    id: "RC-003",
    riskType: "Regulatory Compliance",
    premium: "$15,000",
    coverage: "$750,000", 
    status: "Pending",
    trigger: "Compliance violation",
    expiry: "Nov 2024"
  }
];

export function StartupDashboard() {
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
                  Welcome back, <span className="gradient-text">TechCorp AI</span>
                </h1>
                <p className="text-muted-foreground">Monitor your risks and manage protection contracts</p>
              </div>
              <Button className="neomorphic-btn">
                <Plus className="w-4 h-4 mr-2" />
                New Contract
              </Button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Risk Score Overview */}
              <Card className="glass-card border-white/10 page-fade-in delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Real-time Risk Scoring</span>
                  </CardTitle>
                  <CardDescription>
                    Live monitoring of your AI systems and operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {riskScores.map((risk) => (
                      <div key={risk.category} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{risk.category}</span>
                          <Badge variant="outline" className={risk.color}>
                            {risk.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <Progress value={risk.score} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Score: {risk.score}/100</span>
                            <span>Last updated: 5m ago</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Active Contracts */}
              <Card className="glass-card border-white/10 page-fade-in delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-accent" />
                    <span>Active Protection Contracts</span>
                  </CardTitle>
                  <CardDescription>
                    Your current parametric insurance coverage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeContracts.map((contract) => (
                      <div key={contract.id} className="p-4 rounded-lg bg-gradient-secondary/30 border border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold">{contract.riskType}</span>
                              <Badge 
                                variant={contract.status === 'Active' ? 'default' : 'secondary'}
                                className={contract.status === 'Active' ? 'bg-success/20 text-success' : ''}
                              >
                                {contract.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Trigger: {contract.trigger}
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Premium</div>
                              <div className="font-semibold text-warning">{contract.premium}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Coverage</div>
                              <div className="font-semibold text-success">{contract.coverage}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Expires</div>
                              <div className="font-semibold">{contract.expiry}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Analytics */}
              <Card className="glass-card border-white/10 page-fade-in delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-chart-1" />
                    <span>Performance Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 bg-gradient-secondary/20 rounded-lg flex items-center justify-center">
                    <img 
                      src={dashboardImage} 
                      alt="Analytics Dashboard" 
                      className="w-full h-full object-cover rounded-lg opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Interactive charts coming soon</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <Card className="glass-card border-white/10 page-fade-in delay-400">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-warning" />
                    <span>Recent Alerts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Model accuracy dropped</p>
                        <p className="text-muted-foreground">Vision AI model: 82% (threshold: 85%)</p>
                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-start space-x-2">
                      <Shield className="h-4 w-4 text-success mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium">Compliance check passed</p>
                        <p className="text-muted-foreground">All systems compliant</p>
                        <p className="text-xs text-muted-foreground mt-1">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Risk Pool Options */}
              <Card className="glass-card border-white/10 page-fade-in delay-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-accent" />
                    <span>Risk Pools</span>
                  </CardTitle>
                  <CardDescription>Join with other startups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-gradient-secondary/30 border border-white/10">
                    <h4 className="font-medium mb-2">AI Healthtech Pool</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      15 members • 40% lower premiums
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Join Pool
                    </Button>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-secondary/30 border border-white/10">
                    <h4 className="font-medium mb-2">Series A+ Group</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      8 members • Premium coverage
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="glass-card border-white/10 page-fade-in delay-600">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Coverage</span>
                    <span className="font-semibold text-success">$1.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Monthly Premium</span>
                    <span className="font-semibold text-warning">$35,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. Response Time</span>
                    <span className="font-semibold text-primary">2.3 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Risk Score</span>
                    <span className="font-semibold text-accent">79/100</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}