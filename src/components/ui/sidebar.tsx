"use client";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Home, Users, Layers, Calendar, Settings, FileText } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <Home />, active: true },
  { label: "All Members", icon: <Users /> },
  { label: "All Divisions", icon: <Layers /> },
  { label: "Attendance", icon: <Calendar /> },
  { label: "Sessions & Events", icon: <Calendar /> },
  { label: "Resources", icon: <FileText /> },
  { label: "Profile", icon: <Users /> },
  { label: "Administration", icon: <Settings /> },
  { label: "Settings", icon: <Settings /> },
];

export default function Sidebar() {
  return (
    <aside className="w-[250px] bg-white border-r p-4 flex flex-col justify-between">
      <div>
        <div className="text-xl font-bold px-2 mb-6">Logoipsum</div>
        <ul className="space-y-2">
          {navItems.map(({ label, icon, active }) => (
            <li
              key={label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 ${
                active ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {icon}
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between px-2 mt-4">
        <span className="text-sm text-gray-600">Light / Dark</span>
        <ThemeToggle />
      </div>
    </aside>
  );
}
