import React, { Suspense, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverImg from "../assets/cover.png";
import PlaceholderImg from "../assets/diary/placeholder.png";
import Img1 from "../assets/diary/Img1.jpg";
import Img2 from "../assets/diary/Img2.jpg";
import Img3 from "../assets/diary/Img3.jpg";
import Img4 from "../assets/diary/Img4.jpg";
import Img5 from "../assets/diary/Img5.jpg";
import Img6 from "../assets/diary/Img6.jpg";
import Img7 from "../assets/diary/Img7.jpg";
import Img8 from "../assets/diary/Img8.jpg";
import Img9 from "../assets/diary/Img9.jpg";
import Img10 from "../assets/diary/Img10.jpg";
import Img11 from "../assets/diary/Img11.jpg";
import Img12 from "../assets/diary/Img12.jpg";

const Flipbook = () => {
    const [dimensions, setDimensions] = useState({ width: 400, height: 500 });
    const [isClosed, setIsClosed] = useState(true);
    const images = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img12,
        Img8,
        Img9,
        Img10,
        Img11,
    ];

    useEffect(() => {
        setIsClosed(true);
    }, []);
    return (
        <>
            <div className="text-white font-bold text-center text-3xl lg:text-7xl -mb-12">
                LinuxDiary 4.0
            </div>
            <div className="w-screen flex items-center justify-center overflow-hidden p-4 sm:p-16 -mt-12">
                <HTMLFlipBook
                    width={dimensions.width}
                    height={dimensions.height}
                    size="stretch"
                    minWidth={300}
                    maxWidth={window.innerWidth < 400 ? 350 : 500}
                    minHeight={450}
                    maxHeight={500}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={(e) => {
                        if (e.data === 0) {
                            setIsClosed(true);
                        } else {
                            setIsClosed(false);
                        }
                    }}
                    startPage={0}
                    style={{
                        marginLeft:(window.innerWidth > 768 && isClosed)?"-25%":"0" ,
                    }}
                    id="flipbook"
                    className="transition-all"
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
                    {[...Array(12)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#fafafa] rounded-lg h-full w-full shadow-custom-inset"
                        >
                            <div className="w-full h-full flex flex-col justify-center items-center space-y-6 sm:space-y-12 z-10 p-4 sm:p-8">
                                <Suspense
                                    fallback={
                                        <img
                                            src={PlaceholderImg}
                                            alt={`placeholder ${index * 2 + 1}`}
                                            className="w-full h-auto"
                                        ></img>
                                    }
                                >
                                    <img
                                        src={images[index]}
                                        alt={`placeholder ${index * 2 + 2}`}
                                        className="w-full h-auto"
                                    />
                                </Suspense>
                            </div>
                        </div>
                    ))}
                </HTMLFlipBook>
            </div>
        </>
    );
};

export default Flipbook;
