import React from "react";
import Section from "./Section";
import FooterImg from "../assets/footer2.png";
import WlugImg from "../assets/wlug.png";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { navigation } from "../constants";

const Footer = () => {
    return (
        <div id="about" className="text-black">
            <img src={FooterImg} className=" bg-blend-multiply"></img>
            <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row bg-white md:justify-around p-6 items-center lg:px-12">
                <div className="">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
                        Stay Tuned!
                    </h1>
                    <div className="flex space-x-2 justify-center">
                        <BsInstagram className="text-3xl text-gray-800 cursor-pointer" />
                        <LiaLinkedin className="text-3xl text-gray-800 cursor-pointer" />
                        <BsGithub className="text-3xl text-gray-800 cursor-pointer" />
                        <BsTwitter className="text-3xl text-gray-800 cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col space-y-1 text-center md:text-left">
                    {navigation.map((nav, index) => (
                        <a href={nav.url} key={nav.id} className="hover:scale-105 hover:text-blue-400 transition-all">
                            {nav.title}
                        </a>
                    ))}
                </div>
                <div className="space-y-2">
                    <img src={WlugImg} className="w-48 mx-auto"></img>
                    <p className="text-[10px]">
                        © 2024 WCEWLUG, ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
