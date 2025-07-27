"use client";

import { useState } from "react";
import Icon from "../Icon/Icon";
import { ArrowLeft, ArrowRight } from "@/components/assets/Icon";

const testimonials = [
  {
    quote: "Calm, Serene, Retro – What a way to relax and enjoy",
    author: "Mr. and Mrs. Ramos, PH",
  },
  {
    quote: "Reniel, Trisha, Retro – What a way to relax and enjoy",
    author: "Mr. and Mrs. Mababa, PH",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container mx-auto text-center py-24 px-4 text-blue">
      <h2 className="text-2xl md:text-6xl font-serif mb-6">Testimonials</h2>
      <blockquote className="text-2xl font-semibold italic mb-2">
        “{testimonials[index].quote}”
      </blockquote>
      <p className="text-lg">{testimonials[index].author}</p>
      <div className="mt-4 flex justify-center gap-6">
        <button
          onClick={prevTestimonial}
          className="bg-primary-light text-white p-2 rounded-md hover:bg-primary cursor-pointer transition"
          aria-label="Previous testimonial"
        >
          <Icon>
            <ArrowLeft />
          </Icon>
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-primary-light text-white p-2 rounded-md hover:bg-primary cursor-pointer transition"
          aria-label="Next testimonial"
        >
          <Icon>
            <ArrowRight />
          </Icon>
        </button>
      </div>
    </section>
  );
}
