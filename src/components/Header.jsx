import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import WlugLogo from "../assets/wlug.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
    const location = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50  lg:bg-white/30 lg:backdrop-blur-sm ${
                openNavigation ? "bg-white/30" : "bg-white/30 backdrop-blur-sm"
            }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2">
                <a className="block w-[12rem] xl:mr-8 p-2" href="">
                    <img src={WlugLogo} className="w-32"></img>
                </a>

                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[5.7rem] left-0 right-0 bottom-0 bg-white bg-opacity-40 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center space-y-14 lg:space-y-0 justify-center m-auto lg:flex-row lg:space-x-12 lg:px-12 text-xl lg:text-lg uppercase font-code font-semibold">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`text-transparent bg-link inline-block bg-[length:200%_100%] relative bg-clip-text transition-all ease-in-out duration-300 cursor-pointer before:content-[''] before:bg-[#0b81d6] before:block before:absolute before:bottom-[-3px] before:left-0 before:h-[3px] before:transition-all before:ease-in-out before:duration-300 hover:bg-[0] hover:before:w-[100%] ${
                                    item.url === location.hash
                                        ? "bg-[0] before:w-[100%]"
                                        : "before:w-0 bg-[-100%] "
                                }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
