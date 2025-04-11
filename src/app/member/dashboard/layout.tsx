import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex w-full h-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
