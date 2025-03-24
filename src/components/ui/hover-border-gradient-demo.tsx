"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export default function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        className="bg-black text-white flex items-center space-x-2"
      >
        <Image
          src="/rhino_005.svg"
          alt="Rhino Logo"
          width={24}
          height={24}
          className="opacity-100"
        />
        <span>RhinoTrading</span>
      </HoverBorderGradient>
    </div>
  );
} 