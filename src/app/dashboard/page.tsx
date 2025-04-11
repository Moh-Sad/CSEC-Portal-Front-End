import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";
import UpcomingEventCard from "@/components/ui/upcoming-event";
import StatsCard from "@/components/ui/stats-cards";
import AttendanceChart from "@/components/ui/attendance-chart";
import CalendarSection from "@/components/ui/calendar-schedule";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Header />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          <div className="xl:col-span-2 space-y-6">
            <UpcomingEventCard />
            <StatsCard />
            <AttendanceChart />
          </div>
          <CalendarSection />
        </div>
      </main>
    </div>
  );
}
