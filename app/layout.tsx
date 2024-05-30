import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google";
import ReactQueryProvider from "./components/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const font = Rubik({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "منصة تتبع التدريب الميداني",
  description: "تتبع التدريب الميداني",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="ar" dir="rtl">
        <body className={font.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
