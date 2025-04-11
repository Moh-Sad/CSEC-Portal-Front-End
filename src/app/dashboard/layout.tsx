// app/layout.tsx
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Internal session management dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
