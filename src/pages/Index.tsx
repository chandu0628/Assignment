import { Header } from "@/components/Header";
import { ChatInterface } from "@/components/ChatInterface";
import { DataVisualization } from "@/components/DataVisualization";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, MessageSquare, BarChart3, Shield, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Brain className="h-3 w-3 mr-1" />
              Powered by Advanced AI
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              AI Data Agent
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform complex business questions into actionable insights with our conversational AI that handles bad schemas, dirty data, and vague queries with exceptional analytical precision.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Start Analyzing Data
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Natural Language Queries</h3>
                  <p className="text-sm text-muted-foreground">Ask complex questions in plain English and get precise analytical insights</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Smart Visualizations</h3>
                  <p className="text-sm text-muted-foreground">Automatically generate relevant charts and tables for every insight</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-chart-success mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Handles Complex Data</h3>
                  <p className="text-sm text-muted-foreground">Works with bad schemas, unnamed columns, and dirty data seamlessly</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="xl:col-span-1">
              <ChatInterface />
            </div>
            
            {/* Data Visualizations */}
            <div className="xl:col-span-2">
              <DataVisualization />
            </div>
          </div>
          
          {/* Data Table */}
          <div className="mt-8">
            <DataTable />
          </div>
        </div>
      </section>

      {/* Technical Requirements Banner */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Ready for Production Implementation</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  This interface demonstrates the conversational AI capabilities. To enable full backend functionality with Python, SQL databases, and real-time analytics, connect to Supabase for seamless data integration.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">SQL Database Integration</h3>
                  <p className="text-sm text-muted-foreground">Connect to any SQL database with complex schemas and dirty data</p>
                </div>
                
                <div className="text-center">
                  <Brain className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
                  <p className="text-sm text-muted-foreground">Advanced NLP understands vague queries and generates precise insights</p>
                </div>
                
                <div className="text-center">
                  <Zap className="h-8 w-8 text-chart-success mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Real-time Processing</h3>
                  <p className="text-sm text-muted-foreground">Fast query processing with automatic chart and table generation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;