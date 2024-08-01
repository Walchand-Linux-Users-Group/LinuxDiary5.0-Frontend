import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import WlugLogo from "../assets/image.png";
import chillingPengs from "../assets/main/chillingPengs2.png";
import "./MainScreen.css";

const MainScreen = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const heading = headingRef.current;
        const letters = heading.textContent.split("");

        // Clear the heading text
        heading.textContent = "";

        // Wrap each letter in a span
        letters.forEach((letter) => {
            if (letter === " ") {
                letter = "\u00A0";
            }
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.display = "inline-block";
            heading.appendChild(span);
        });

        // Animate each letter
        gsap.fromTo(
            heading.children,
            {
                opacity: 0,
                y: 50,
                rotateX: -90,
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                stagger: 0.1,
                duration: 1,
                ease: "back.out(1.7)",
            }
        );
    }, []);

    return (
        <div
            id="home"
            className="lg:h-screen w-full flex flex-col items-center justify-center bg-transparent space-y-4"
        >
            <div className="pt-28 text-center">
                <img
                    src={WlugLogo}
                    className="w-40  mx-auto absolute left-1/2 sm:left-4 sm:translate-x-0 -translate-x-[50%] top-4 cursor-pointer"
                    onClick={() => {
                        window.open("https://www.wcewlug.org/","_blank");
                    }}
                ></img>
                <h1
                    ref={headingRef}
                    className="font-bold mt-8 lg:mt-0 mb-10 lg:mb-0 text-[2.7rem] md:text-[5rem] lg:text-[5rem] lg:leading-[6rem] lg:font-extrabold px-2 small-screen-heading"
                >
                    LinuxDiary 5.0
                </h1>
            </div>
            <div className="sm:w-2/3">
                <img
                    src={chillingPengs}
                    className="h-auto mx-auto great"
                    alt="Loading penguins..."
                />
            </div>
        </div>
    );
};

export default MainScreen;
