import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Stats() {
  return (
    <div className="w-full border-y border-y-[#808080] h-auto md:h-50">
      <div className="h-full md:flex grid gap-8 py-5 md:py-0">
        <div className="md:flex-1 h-full flex items-start justify-center px-12 flex-col group transition-all duration-300  rounded-lg">
          <div className="text-[50px] leading-[55px] uppercase">27 M+</div>
          <div className="text-[14px] leading-[18px] uppercase">
            Unique Wallet Addresses
          </div>
        </div>
        <Separator orientation="vertical" className="hidden md:block bg-[#808080]"  />
        <Separator orientation="horizontal" className="block md:hidden bg-[#808080]" />

        <div className="md:flex-1 h-full flex items-start justify-center px-12 flex-col group transition-all duration-300 rounded-lg">
          <div className="text-[50px] leading-[55px] uppercase">20 M</div>
          <div className="text-[14px] leading-[18px] uppercase">
            Total Value Locked (TVL)
          </div>
        </div>
        <Separator orientation="vertical" className="hidden md:block bg-[#808080]" />
        <Separator orientation="horizontal" className="block md:hidden bg-[#808080]" />

        <div className="md:flex-1 h-full flex items-start justify-center px-12 flex-col group transition-all duration-300 rounded-lg">
          <div className="text-[50px] leading-[55px] uppercase">20 M</div>
          <div className="text-[14px] leading-[18px] uppercase">
            Total Transactions
          </div>
        </div>
      </div>
    </div>
  );
}
