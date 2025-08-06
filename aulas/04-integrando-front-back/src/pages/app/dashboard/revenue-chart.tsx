import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from "recharts"
import colors from "tailwindcss/colors";

const data = [
  { date: '01/07', revenue: 1200 },
  { date: '02/07', revenue: 2100 },
  { date: '03/07', revenue: 800 },
  { date: '04/07', revenue: 1600 },
  { date: '05/07', revenue: 900 },
  { date: '06/07', revenue: 1700 },
  { date: '07/07', revenue: 2500 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6 bg-background">
      <CardHeader className="flex items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold">
            Receita no período
          </CardTitle>
          <CardDescription>
            Receita diária no período
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart
            style={{ fontSize: 12 }}
            data={data}
          >
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              dy={16}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })
              }
            />

            <CartesianGrid
              vertical={false}
              className="stroke-muted"
            />

            <Line
              dataKey="revenue"
              type="linear"
              strokeWidth={2}
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
