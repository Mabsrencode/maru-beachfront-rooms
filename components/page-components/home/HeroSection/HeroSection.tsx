import { ArrowDownIcon, CalendarIcon } from "@/components/assets/Icon";
import Button from "@/components/reusable/Button/Button";
import Icon from "@/components/reusable/Icon/Icon";
import React from "react";
const HeroSection = () => {
  return (
    <section className="relative">
      <div className="min-h-svh max-w-svw hero flex items-center w-full">
        <div className="container mx-auto px-4 text-white">
          <span className="text-[50px]">WELCOME TO</span>
          <h2 className="font-primary text-[11rem] tracking-wider leading-35">
            MARU’S
          </h2>
          <p className="font-primary text-6xl tracking-[20px]">
            Beachfront Rooms
          </p>
          <p className="text-[25px] max-w-[680px] tracking-[4px]">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
          <div className="mt-16 flex items-center justify-center">
            <Button style="flex items-center gap-2 font-bold uppercase">
              <Icon size={16}>
                <CalendarIcon />
              </Icon>
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <span className="-mt-24 text-white flex flex-col items-center justify-center gap-2 animate-bounce">
        Scroll
        <Icon size={32}>
          <ArrowDownIcon />
        </Icon>
      </span>
    </section>
  );
};

export default HeroSection;
