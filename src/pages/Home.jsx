// src/pages/Home.js
import React from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MainScreen from "../components/MainScreen";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import Prizes from "../components/Prizes";
import SnowfallEffect from "../components/SnowfallEffect"; // Import SnowfallEffect
import Wargames from "../components/Wargames";

const Home = () => {
  return (
    <div className="relative gradient-background">
      <SnowfallEffect /> {/* Add SnowfallEffect component */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden relative z-10">
        <Header />
        <MainScreen />
        <Roadmap />
        <Wargames/>
        <Prizes />
        <Footer />
      </div>
      <ButtonGradient />
    </div>
  );
};

export default Home;
