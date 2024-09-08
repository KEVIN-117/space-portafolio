"use client";
import { Idx } from "@/global/svg/Idx";
import { Info } from "@/modules/about";
import { Hero } from "@/modules/shared/hero";
import { Skills } from "@/modules/skilss";

export default function Home() {
  return (
    <>
      <div className="relative my-5 flex justify-center">
        <Hero />
      </div>
      <div className="relative my-5 flex justify-center">
        <Info />
      </div>
      <div className="relative my-5 flex justify-center">
        <Skills />
      </div>
    </>
  );
}
