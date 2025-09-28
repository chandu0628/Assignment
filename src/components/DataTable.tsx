import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Database } from "lucide-react";

const sampleData = [
  {
    id: 1,
    product: "Analytics Pro",
    revenue: 125000,
    growth: 15.3,
    region: "North America",
    status: "Growing",
    customers: 1250
  },
  {
    id: 2,
    product: "Data Insights",
    revenue: 89000,
    growth: -3.2,
    region: "Europe",
    status: "Declining",
    customers: 890
  },
  {
    id: 3,
    product: "ML Platform",
    revenue: 156000,
    growth: 28.7,
    region: "Asia Pacific",
    status: "Growing",
    customers: 1680
  },
  {
    id: 4,
    product: "Report Builder",
    revenue: 67000,
    growth: 8.9,
    region: "North America",
    status: "Stable",
    customers: 720
  },
  {
    id: 5,
    product: "Data Warehouse",
    revenue: 234000,
    growth: 22.1,
    region: "Global",
    status: "Growing",
    customers: 2340
  }
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Growing':
      return 'bg-chart-success/10 text-chart-success border-chart-success/20';
    case 'Declining':
      return 'bg-chart-danger/10 text-chart-danger border-chart-danger/20';
    case 'Stable':
      return 'bg-chart-warning/10 text-chart-warning border-chart-warning/20';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const DataTable = () => {
  return (
    <Card className="bg-gradient-card border-0 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          Product Performance Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="font-semibold">Product</TableHead>
                <TableHead className="font-semibold text-right">Revenue</TableHead>
                <TableHead className="font-semibold text-right">Growth</TableHead>
                <TableHead className="font-semibold">Region</TableHead>
                <TableHead className="font-semibold text-right">Customers</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell className="text-right font-semibold">
                    {formatCurrency(item.revenue)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className={`flex items-center justify-end gap-1 ${
                      item.growth > 0 ? 'text-chart-success' : 'text-chart-danger'
                    }`}>
                      {item.growth > 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      <span className="font-medium">{Math.abs(item.growth)}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{item.region}</TableCell>
                  <TableCell className="text-right">
                    {item.customers.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};