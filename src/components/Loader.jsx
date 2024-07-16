import React, { useState, useEffect } from "react";

const Loading = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          onComplete();
          return prevCount;
        }
      });
    }, 30); // Adjust the interval time to make the countdown faster or slower

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="countdown">{count}%</div>
    </div>
  );
};

export default Loading;
