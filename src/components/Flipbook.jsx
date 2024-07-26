import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const Flipbook = () => {
    const [width, setWidth] = useState(400);
    const [curPage, setCurPage] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 420) {
                setWidth(300);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className=" w-screen flex items-center justify-center overflow-hidden p-16 ">
            <HTMLFlipBook
                width={width}
                height={600}
                size="stretch"
                minWidth={300}
                maxWidth={500}
                minHeight={750}
                maxHeight={750}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={(e) => {
                    console.log("flipped", e);
                }}
                startPage={1}
            >
                {/* Cover Page */}
                <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  shadow-custom-inset  ">
                    <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg shadow-md p-12 w-full max-w-lg text-center h-full  flex flex-col justify-center items-center space-y-6">
                        <h1 className="text-5xl font-extrabold text-white">
                            Old Memories
                        </h1>
                        <p className="mt-4 text-xl text-white italic">
                            A journey through cherished moments
                        </p>

                        {/* Placeholder for an image */}
                        <div className="mt-8">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Cover Image"
                                className="w-full h-auto object-cover rounded-md shadow-lg"
                            />
                        </div>

                        {/* Placeholder for author name */}
                        <p className="mt-6 text-lg text-blue-100">
                            by [Author Name]
                        </p>
                    </div>
                </div>
                {/* ******************* */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
                {/* ******************************************************** */}
                <div className=" bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg  h-full w-full shadow-custom-inset">
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-12 z-10">
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-3/4 bg-blue-100 z-10 shadow-md p-4 rounded-md pb-8">
                            <img
                                src="https://via.placeholder.com/450x300"
                                alt="placeholder"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                {/* **************************************************** */}
            </HTMLFlipBook>
        </div>
    );
};

export default Flipbook;
