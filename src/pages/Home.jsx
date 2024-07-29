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
import Session from "../components/Session/Session";
import CardCollection from "../components/CardCollection/CardCollection";
import Register from "../components/Register";
import Flipbook from "../components/Flipbook";

const Home = () => {
    return (
        <div className="relative gradient-background scroll-smooth">
            <SnowfallEffect /> {/* Add SnowfallEffect component */}
            <div className=" overflow-x-hidden relative z-10 space-y-12">
                <MainScreen />
                <Session />
                {/* <CardCollection /> */}
                <Collaboration />
                <Prizes />
                <Flipbook />
                <Register />
                <Footer />
            </div>
            <ButtonGradient />
        </div>
    );
};

export default Home;
