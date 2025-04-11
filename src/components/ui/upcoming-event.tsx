// components/upcoming-event.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function UpcomingEvent() {
  return (
    <Card className="bg-blue-100 border-none">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <h3 className="text-md text-blue-700 font-semibold">Upcoming Event</h3>
          <p className="text-sm text-blue-600">Cross-division knowledge-sharing</p>
          <button className="mt-3 px-4 py-1 bg-blue-600 text-white text-sm rounded">
            Add to calendar
          </button>
        </div>
        <img src="/illustration.svg" alt="Event" className="h-20 w-auto" />
      </CardContent>
    </Card>
  );
}
