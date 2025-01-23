import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import "./globals.css";
import travelIcon from "./../../public/images/icons/luggage.png";



export const metadata: Metadata = {
  title: "Travel Inspirations",
  description: "Take a time to enjoy the moment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="bg-amber-50">
    <div
      className="h-20 bg-green-primary w-full px-[10px] py-[10px] text-white-primary text-lg overflow-hidden relative">
      <div
        className="overflow-hidden w-full h-[65px] translate-x-full absolute flex sm:gap-5 gap-2 items-center sm:top-0 sm:right-0 animate-ticker">
        <Image src={travelIcon} alt="Travel Inspirations" className="h-14 w-14"/>
        <p className="font-semibold sm:text-base text-sm text-center">Welcome to Khrystyna's travel inspirations website </p>
      </div>
    </div>
    {children}
    </body>
    </html>
  );
}
