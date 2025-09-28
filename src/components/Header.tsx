import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Zap, Settings } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI Data Agent
              </h1>
              <p className="text-sm text-muted-foreground">
                Intelligent Business Analytics Platform
              </p>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Zap className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Database className="h-4 w-4" />
                Connected to 12 data sources
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div className="text-chart-success">● System Online</div>
            </div>
            
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};