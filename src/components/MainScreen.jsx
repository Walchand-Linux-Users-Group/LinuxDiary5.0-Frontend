import React from "react";
import { BottomLine } from "./design/Hero";
import chillingPengs from "../assets/main/chillingPengs.png";

const MainScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent space-y-8">
      <div className="pt-36 lg:pt-64 text-center">
        <h1
          className="font-bold text-6xl lg:text-8xl lg:leading-[6rem] lg:font-extrabold"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          LINUXDIARY 5.0
        </h1>
      </div>
      <div className="">
        <img src={chillingPengs} alt="Loading penguins..." />
      </div>
    </div>
  );
};

export default MainScreen;
