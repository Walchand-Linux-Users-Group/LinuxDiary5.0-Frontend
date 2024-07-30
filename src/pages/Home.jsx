// src/pages/Home.js
import React from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import MainScreen from "../components/MainScreen";
import Prizes from "../components/Prizes";
import SnowfallEffect from "../components/SnowfallEffect";
import Session from "../components/Session/Session";
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
