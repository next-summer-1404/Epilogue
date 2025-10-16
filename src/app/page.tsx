"use client";

import FifthSection from "./(main)/Landing/components/FifthSection/FifthSection";
import FirstSection from "./(main)/Landing/components/FirstSection/FirstSection";
import FourthSection from "./(main)/Landing/components/FourthSection/FourthSection";
import LastSection from "./(main)/Landing/components/LastSection/LastSection";
import SecondSection from "./(main)/Landing/components/SecondSection/SecondSection";
import ThirdSection from "./(main)/Landing/components/ThirdSection/ThirdSection";
export default function Home() {
  return (
    <div className="w-full">
      <FirstSection />

      <div className="py-10">
        <SecondSection />
      </div>

      <div className="">
        <ThirdSection />
      </div>

      <div className="">
        <FourthSection />
      </div>

      <div className="">
        <FifthSection />
      </div>
      <div className="">
        <LastSection />
      </div>
    </div>
  );
}
