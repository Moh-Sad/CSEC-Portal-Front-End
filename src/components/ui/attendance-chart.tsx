// components/attendance-chart.tsx
"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Jan", thisYear: 60, lastYear: 45 },
  { name: "Feb", thisYear: 65, lastYear: 50 },
  { name: "Mar", thisYear: 70, lastYear: 55 },
  { name: "Apr", thisYear: 80, lastYear: 60 },
  { name: "May", thisYear: 75, lastYear: 65 },
  { name: "Jun", thisYear: 85, lastYear: 70 },
  { name: "Jul", thisYear: 90, lastYear: 75 },
];

export default function AttendanceChart() {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm font-medium mb-4">Attendance Overview</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="thisYear" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="lastYear" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
