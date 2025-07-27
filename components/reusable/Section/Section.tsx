import React, { ReactNode } from "react";

const Section = ({ children }: { children?: ReactNode }) => {
  return (
    <section className="container mx-auto px-4 py-12 text-blue">
      {children}
    </section>
  );
};

export default Section;
