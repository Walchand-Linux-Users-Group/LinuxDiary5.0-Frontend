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

const Home = () => {
  return (
    <div className="gradient-background">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <MainScreen />
        <Hero />
        
        <Benefits />
        <Roadmap />
        <Collaboration />
        <Services />
        <Pricing />
        
        <Footer />
      </div>
      <ButtonGradient />
    </div>
  );
};

export default Home;
