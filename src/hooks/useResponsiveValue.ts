import { useEffect, useState } from "react";

const BASE_WIDTH = 360;
const BASE_HEIGHT = 722;

export const useResponsive = () => {
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
    scaleWidth: window.innerWidth / BASE_WIDTH,
    scaleHeight: window.innerHeight / BASE_HEIGHT,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        vw: window.innerWidth,
        vh: window.innerHeight,
        scaleWidth: window.innerWidth / BASE_WIDTH,
        scaleHeight: window.innerHeight / BASE_HEIGHT,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};
