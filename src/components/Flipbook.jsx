import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverImg from "../assets/cover.png";

const Flipbook = () => {
    const [dimensions, setDimensions] = useState({ width: 400, height: 600 });
    const [isClosed, setIsClosed] = useState(true);

    useEffect(() => {
        setIsClosed(true);
    }, []);
    return (
        <div className="w-screen flex items-center justify-center overflow-hidden p-4 sm:p-16">
            <HTMLFlipBook
                width={dimensions.width}
                height={dimensions.height}
                size="stretch"
                minWidth={300}
                maxWidth={window.innerWidth < 400 ? 350 : 500}
                minHeight={450}
                maxHeight={600}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={(e) => {
                    if(e.data === 0) {
                        setIsClosed(true);
                    }else{
                        setIsClosed(false);
                    }
                }}
                startPage={0}
                className={`translate-x-0 transition-all md:${isClosed ? "-translate-x-[25%]": "-translate-x-0"}`}
                id="flipbook"
            >
                {/* Cover Page */}
                <div className="">
                    <img
                        src={CoverImg}
                        alt="cover"
                        className="w-full h-full"
                    ></img>
                </div>
                {/* Inner Pages */}
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#fafafa] rounded-lg h-full w-full shadow-custom-inset"
                    >
                        <div className="w-full h-full flex flex-col justify-center items-center space-y-6 sm:space-y-12 z-10 p-4 sm:p-8">
                            <img
                                src={`https://via.placeholder.com/450x300?text=Image+${
                                    index * 2 + 1
                                }`}
                                alt={`placeholder ${index * 2 + 1}`}
                                className="w-full h-auto"
                            />
                            <img
                                src={`https://via.placeholder.com/450x300?text=Image+${
                                    index * 2 + 2
                                }`}
                                alt={`placeholder ${index * 2 + 2}`}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default Flipbook;
