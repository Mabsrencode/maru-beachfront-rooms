import React from "react";
const HeroSection = () => {
  return (
    <section className="min-h-svh hero flex items-center">
      <div className="container mx-auto px-4 text-white">
        <span className="text-[50px]">WELCOME TO</span>
        <h2 className="font-primary text-[11rem] tracking-widest leading-35">
          MARU’S
        </h2>
        <p className="font-primary text-6xl tracking-[20px]">
          Beachfront Rooms
        </p>
        <p className="text-[25px] max-w-[700px] tracking-[5px]">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
