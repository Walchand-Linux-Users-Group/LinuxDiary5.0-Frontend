import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const Flipbook = () => {
  const [dimensions, setDimensions] = useState({ width: 400, height: 600 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 420) {
        setDimensions({ width: 300, height: 450 });
      } else {
        setDimensions({ width: 400, height: 600 });
      }
    };

    // Call handleResize immediately to set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen flex items-center justify-center overflow-hidden p-4 sm:p-16">
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        size="stretch"
        minWidth={300}
        maxWidth={400}
        minHeight={450}
        maxHeight={600}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={(e) => {
          console.log("flipped", e);
        }}
        startPage={0}
      >
        {/* Cover Page */}
        <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg shadow-custom-inset">
          <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg shadow-md p-4 sm:p-12 w-full max-w-lg text-center h-full flex flex-col justify-center items-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Old Memories
            </h1>
            <p className="mt-2 sm:mt-4 text-lg sm:text-xl text-white italic">
              A journey through cherished moments
            </p>

            {/* Placeholder for an image */}
            <div className="mt-4 sm:mt-8">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Cover Image"
                className="w-full h-auto object-cover rounded-md shadow-lg"
              />
            </div>

            {/* Placeholder for author name */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-blue-100">
              by [Author Name]
            </p>
          </div>
        </div>
        {/* Inner Pages */}
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg h-full w-full shadow-custom-inset"
          >
            <div className="w-full h-full flex flex-col justify-center items-center space-y-6 sm:space-y-12 z-10 p-4 sm:p-8">
              <div className="w-full sm:w-3/4 bg-blue-100 z-10 shadow-md p-2 sm:p-4 rounded-md">
                <img
                  src={`https://via.placeholder.com/450x300?text=Image+${
                    index * 2 + 1
                  }`}
                  alt={`placeholder ${index * 2 + 1}`}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full sm:w-3/4 bg-blue-100 z-10 shadow-md p-2 sm:p-4 rounded-md">
                <img
                  src={`https://via.placeholder.com/450x300?text=Image+${
                    index * 2 + 2
                  }`}
                  alt={`placeholder ${index * 2 + 2}`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
