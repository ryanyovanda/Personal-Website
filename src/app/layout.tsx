import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/Navbar";



export const metadata: Metadata = {
  title: "Ryan Yovanda",
  description: "Create with love",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col items-center">
        <NavBar /> 
        {children}
      </body>
    </html>
  );
}
