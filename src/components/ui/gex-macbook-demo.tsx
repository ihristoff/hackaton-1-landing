import React from "react";
import { MacbookScroll } from "./macbook-scroll";

export default function GexMacbookDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Real-time GEX Analysis <br /> 
            Track gamma exposure in real-time
          </span>
        }
        src="/gex.png"
        showGradient={false}
      />
    </div>
  );
} 