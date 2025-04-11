// components/calendar-schedule.tsx
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sessions = [
  { time: "09:30", title: "Contest in CPD Division", category: "CPD" },
  { time: "12:00", title: "Development Weekly Sessions", category: "Development" },
  { time: "15:00", title: "Cyber Weekly Sessions", category: "Cyber" },
  { time: "09:30", title: "Data Science Weekly Session", category: "Data Science" },
  { time: "11:00", title: "Contest Analysis in CPD", category: "CPD" },
];

export default function CalendarSchedule() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium">Session</h4>
            <CalendarDays className="w-4 h-4 text-gray-500" />
          </div>
          <div className="grid grid-cols-7 text-center text-xs text-gray-500">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className={`p-1 rounded ${
                  i + 1 === 3 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 space-y-3">
          <p className="text-sm font-medium text-gray-700">Wednesday, 06 July 2025</p>
          {sessions.map((session, idx) => (
            <div key={idx} className="text-sm space-y-1">
              <p className="font-semibold">{session.time}</p>
              <p className="text-gray-600">{session.title}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
