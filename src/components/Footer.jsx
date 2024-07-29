import React from "react";
import FooterImg from "../assets/footer2.png";
import WlugImg from "../assets/wlug.png";
import { navigation } from "../constants";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaDiscord } from "react-icons/fa6";

const Footer = () => {
    return (
        <div id="about" className="text-black">
            <img src={FooterImg} className=" bg-blend-multiply"></img>
            <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row bg-white md:justify-around p-6 items-center lg:px-12">
                <div className="">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
                        Stay Tuned!
                    </h1>
                    <div className="flex space-x-1 justify-center">
                        <a
                            href="https://instagram.com/wcewlug?igshid=YmMyMTA2M2Y="
                            target="_blank"
                        >
                            <FaInstagram className="text-3xl text-gray-800 cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/wlug-club/"
                            target="_blank"
                        >
                            <FaLinkedin className="text-3xl text-gray-800 cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://github.com/Walchand-Linux-Users-Group"
                            target="_blank"
                        >
                            <FaGithub className="text-3xl text-gray-800 cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://mobile.twitter.com/wcewlug"
                            target="_blank"
                        >
                            <FaXTwitter className="text-3xl text-gray-800 cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                        <a
                            href="https://discord.com/invite/3ce8hBZfc8"
                            target="_blank"
                        >
                            <FaDiscord className="text-3xl text-gray-800 cursor-pointer hover:scale-110 hover:text-blue-400 transition-all" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col space-y-1 text-center md:text-left">
                    {navigation.map((nav, index) => (
                        <a
                            href={nav.url}
                            key={nav.id}
                            className="hover:scale-105 hover:text-blue-400 transition-all"
                        >
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
