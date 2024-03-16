import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/Sidebar";
import { personalData } from "@/data/page-data";

export const metadata: Metadata = {
  title: "Carolin Andersson - Cv",
  description: "A CV built in Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
