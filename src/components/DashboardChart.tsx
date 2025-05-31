"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [
  { month: "Mon", desktop: 237, rowGap: 10, mobile: 106, device: 30 },
  { month: "Tue", desktop: 237, rowGap: 10, mobile: 66, device: 70 },
  { month: "Web", desktop: 187, rowGap: 10, mobile: 96, device: 90 },
  { month: "Thu", desktop: 237, rowGap: 10, mobile: 106, device: 30 },
  { month: "Fri", desktop: 297, rowGap: 10, mobile: 46, device: 30 },
  { month: "Sat", desktop: 177, rowGap: 10, mobile: 106, device: 90 },
  { month: "Sun", desktop: 187, rowGap: 10, mobile: 136, device: 50 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#7152F3",
  },
  mobile: {
    label: "Mobile",
    color: "#FEB85B",
  },
  device: {
    label: "Device",
    color: "#F45B69",
  },
} satisfies ChartConfig;

export function DashboardChart() {
  return (
    <div className="flex h-[340px] w-[393px]">
      <div className="flex flex-col justify-between">
        <span>100%</span>
        <span>80%</span>
        <span>60%</span>
        <span>40%</span>
        <span>20%</span>
        <span>0</span>
        <span></span>
      </div>
      <ChartContainer config={chartConfig} className="flex gap-5">
        <BarChart
          accessibilityLayer
          data={chartData}
          barCategoryGap="10%"
          barGap={2}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Bar
            dataKey="desktop"
            stackId="a"
            fill="var(--color-desktop)"
            radius={[30, 30, 30, 30]}
            barSize={12}
          />
          <Bar dataKey="rowGap" stackId="a" fill="transparent" barSize={12} />
          <Bar
            dataKey="mobile"
            stackId="a"
            fill="var(--color-mobile)"
            radius={[30, 30, 30, 30]}
            barSize={12}
          />
          <Bar dataKey="rowGap" stackId="a" fill="transparent" barSize={12} />
          <Bar
            dataKey="device"
            stackId="a"
            fill="#F45B69"
            radius={[30, 30, 30, 30]}
            barSize={12}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
