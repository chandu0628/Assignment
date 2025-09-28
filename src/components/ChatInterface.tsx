import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, BarChart3, Table, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  hasChart?: boolean;
  hasTable?: boolean;
}

const sampleQuestions = [
  "What are the top 5 performing products by revenue this quarter?",
  "Show me customer retention trends over the last 12 months",
  "Analyze sales performance by region and identify underperforming areas",
  "What's the correlation between marketing spend and customer acquisition?"
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI Data Agent. I can help you analyze complex business data and answer sophisticated analytical questions. Ask me anything about your data!",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response with chart/table indicators
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Based on your query, I've analyzed the data and found some interesting insights. The revenue trends show a 23% increase in Q3, with the Technology and Healthcare sectors leading the growth. I've generated visualizations to help illustrate these findings.",
        timestamp: new Date(),
        hasChart: true,
        hasTable: true,
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleSampleQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="bg-gradient-card border-b">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          AI Data Agent
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user' ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    {message.role === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card border'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    {message.hasChart || message.hasTable ? (
                      <div className="flex gap-2 mt-2">
                        {message.hasChart && (
                          <Badge variant="secondary" className="text-xs">
                            <BarChart3 className="h-3 w-3 mr-1" />
                            Chart Generated
                          </Badge>
                        )}
                        {message.hasTable && (
                          <Badge variant="secondary" className="text-xs">
                            <Table className="h-3 w-3 mr-1" />
                            Data Table
                          </Badge>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-card border rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                    <span className="text-sm text-muted-foreground">Analyzing data...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Sample Questions */}
        <div className="p-4 border-t bg-muted/30">
          <p className="text-xs text-muted-foreground mb-2">Try these sample questions:</p>
          <div className="flex flex-wrap gap-2">
            {sampleQuestions.slice(0, 2).map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7"
                onClick={() => handleSampleQuestion(question)}
              >
                {question.length > 50 ? question.substring(0, 50) + "..." : question}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about your data..."
              className="flex-1"
            />
            <Button onClick={handleSend} disabled={isLoading} className="px-3">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};