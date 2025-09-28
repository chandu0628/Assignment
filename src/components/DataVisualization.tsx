import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 4000, target: 3500 },
  { month: "Feb", revenue: 3000, target: 3200 },
  { month: "Mar", revenue: 5000, target: 4000 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5000 },
  { month: "Jun", revenue: 5500, target: 5200 },
];

const regionData = [
  { name: "North America", value: 45, color: "hsl(var(--chart-primary))" },
  { name: "Europe", value: 30, color: "hsl(var(--chart-secondary))" },
  { name: "Asia Pacific", value: 20, color: "hsl(var(--chart-tertiary))" },
  { name: "Other", value: 5, color: "hsl(var(--chart-quaternary))" },
];

const kpiData = [
  {
    title: "Total Revenue",
    value: "$2.4M",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up"
  },
  {
    title: "Active Users",
    value: "48.2K",
    change: "+8.2%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-2.1%",
    icon: Target,
    trend: "down"
  },
  {
    title: "Growth Rate",
    value: "15.8%",
    change: "+5.4%",
    icon: TrendingUp,
    trend: "up"
  }
];

export const DataVisualization = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <p className={`text-sm flex items-center gap-1 ${
                    kpi.trend === 'up' ? 'text-chart-success' : 'text-chart-danger'
                  }`}>
                    <TrendingUp className={`h-3 w-3 ${kpi.trend === 'down' ? 'rotate-180' : ''}`} />
                    {kpi.change}
                  </p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <kpi.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              Revenue vs Target
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="revenue" name="Revenue" fill="hsl(var(--chart-primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" name="Target" fill="hsl(var(--chart-secondary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Distribution */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Revenue by Region
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Growth Trend Line Chart */}
      <Card className="bg-gradient-card border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Monthly Growth Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="hsl(var(--chart-primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--chart-primary))', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: 'hsl(var(--chart-primary))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};