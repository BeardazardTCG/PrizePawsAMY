import type { Metadata } from "next";
import "./globals.css";
import { MobileTabs, Nav } from "@/components/nav";

export const metadata: Metadata = { title: "Prize Paws", description: "Modern dog photo competitions, rosettes, rewards, and community." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans text-cocoa"><Nav /><main className="mx-auto max-w-6xl pb-24 md:pb-10">{children}</main><MobileTabs /></body></html>;
}
