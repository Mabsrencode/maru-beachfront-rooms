"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Button from "@/components/reusable/Button/Button";
import Section from "@/components/reusable/Section/Section";
type FormData = {
  name: string;
  email: string;
  message: string;
};
const Content = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>("");
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSuccessMessage(null);
    setErrorMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setSuccessMessage("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <>
      <div className="bg-primary h-[465px] grid place-items-center text-7xl font-bold uppercase text-white">
        <h2>Contact Us</h2>
      </div>
      <Section style="pb-64">
        <div className="mt-24">
          <h3 className="font-primary text-6xl">WE ARE HERE FOR YOU</h3>
          <p className="text-lg mt-4">
            At Maru’s Beachfront Rooms, we take our customers seriously...
          </p>
        </div>
        <div className="flex gap-24 mt-24">
          <div className="flex-1 text-2xl">
            <h2>497 Evergreen Rd. Roseville, CA 95673</h2>
            <Link href="" className="flex items-center gap-2 my-4 font-bold">
              View map <BsArrowRight />
            </Link>
            <h2>Phone: +63 123 456 7890</h2>
            <Link
              href="mailto:marus.flbr@gmail.com"
              className="flex items-center gap-2"
            >
              Email: marus.flbr@gmail.com
            </Link>
          </div>
          <div className="flex-1">
            <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-lg font-semibold">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="border-2 border-primary py-3 px-6 outline-none"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">Name is required</span>
                )}
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-lg font-semibold">
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="border-2 border-primary py-3 px-6 outline-none"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    Email is required
                  </span>
                )}
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-lg font-semibold">
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={10}
                  className="border-2 border-primary py-3 px-6 outline-none"
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <span className="text-red-500 text-xs">
                    Message is required
                  </span>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                style="text-white font-bold"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
              {successMessage && (
                <span className="text-primary-light font-semibold">
                  {successMessage}
                </span>
              )}
              {errorMessage && (
                <span className="text-red-500 font-semibold">
                  {errorMessage}
                </span>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Content;
