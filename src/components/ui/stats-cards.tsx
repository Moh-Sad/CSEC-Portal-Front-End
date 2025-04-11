// components/stats-cards.tsx
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Total Members", value: 162, update: "+12", color: "text-green-500" },
  { label: "Total Divisions", value: 5, update: "+1", color: "text-green-500" },
  { label: "Attendance Rate", value: "68%", update: "-2%", color: "text-red-500" },
  { label: "Upcoming Sessions", value: 12, update: "+3", color: "text-green-500" },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4">
          <CardContent className="space-y-1">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">{stat.value}</p>
              <span className={`text-sm ${stat.color}`}>{stat.update}</span>
            </div>
            <p className="text-xs text-gray-400">Updated: July 14, 2025</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
