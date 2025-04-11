// app/layout.tsx
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider"; // Ensure your theme provider is properly imported

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
