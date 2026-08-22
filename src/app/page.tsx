"use client";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
    </>
  );
}
