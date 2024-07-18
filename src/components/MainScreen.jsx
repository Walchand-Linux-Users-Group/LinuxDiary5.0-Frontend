import React from "react";
import { BottomLine } from "./design/Hero";
import chillingPengs from "../assets/main/chillingPengs2.png";

const MainScreen = () => {
  return (
    <div id="home" className="lg:h-screen w-full flex flex-col items-center justify-center bg-transparent space-y-4">
      <div className="pt-28 lg:pt-40 text-center">
        <h1
          className="font-bold  text-6xl mb-10 lg:mb-0 lg:text-8xl lg:leading-[6rem] lg:font-extrabold"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          LINUXDIARY 5.0
        </h1>
      </div>
      <div className="md:w-3/4">
        <img src={chillingPengs} className="h-72 lg:h-auto" alt="Loading penguins..." />
      </div>
    </div>
  );
};

export default MainScreen;
