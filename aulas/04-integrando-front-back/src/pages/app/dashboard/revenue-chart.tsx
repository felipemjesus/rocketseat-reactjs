import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from "recharts"
import colors from "tailwindcss/colors";
import { Label } from '@/components/ui/label'
import { useMemo } from "react";

export function RevenueChart() {
  const { data: dailyRevenueInPeriod } = useQuery({
      queryKey: ['metrics', 'daily-revenue-in-period'],
      queryFn: getDailyRevenueInPeriod,
  })

  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map((item) => {
      return {
        date: item.date,
        receipt: item.receipt / 100
      }
    })
  }, [dailyRevenueInPeriod])

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

        <div className="flex items-center gap-3">
          <Label>Período</Label>

        </div>
      </CardHeader>
      <CardContent>
        {chartData && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart
              style={{ fontSize: 12 }}
              data={chartData}
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
                dataKey="receipt"
                type="linear"
                strokeWidth={2}
                stroke={colors.violet['500']}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
