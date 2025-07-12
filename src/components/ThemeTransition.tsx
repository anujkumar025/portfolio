"use client";

import { useEffect, useState } from "react";

interface ColorStop {
  bg: [number, number, number]; // [H, S, L]
  fg: [number, number, number];
}

// const COLOR_STOPS: ColorStop[] = [
//   { bg: [39, 80, 90], fg: [5, 5, 15] }, // Dawn (soft orange)

//   { bg: [39, 80, 90], fg: [5, 5, 15] }, // Dawn (soft orange)

//   { bg: [180, 50, 85], fg: [0, 0, 10] }, // Noon (clear sky blue)

//   { bg: [250, 35, 70], fg: [5, 5, 15] }, // Late afternoon (blueish-lavender)

//   { bg: [250, 35, 70], fg: [5, 5, 15] }, // Late afternoon (blueish-lavender)

//   { bg: [180, 50, 85], fg: [0, 0, 10] }, // Noon (clear sky blue)

//   { bg: [39, 80, 90], fg: [5, 5, 15] }, // Back to Dawn
// ];
const COLOR_STOPS: ColorStop[] = [
  { bg: [214, 58, 16], fg: [0, 0, 100] }, // Back to Dawn
  
  { bg: [218, 45, 61], fg: [0, 0, 100] },  // Dawn (soft orange)
  
  { bg: [217, 57, 7], fg: [0, 0, 100] },  // Dawn (soft orange)
  
  { bg: [220, 47, 26], fg: [0, 0, 100] }, // Noon (clear sky blue)
  
  { bg: [235, 27, 39], fg: [0, 0, 100] }, // Back to Dawn

  { bg: [214, 58, 16], fg: [0, 0, 100] }, // Back to Dawn
  ];

  

// hsl(218, 45%, 61%)
// hsl(217, 57%, 7%)
// hsl(280, 26%, 54%)
// hsl(220, 47%, 26%)
// hsl(214, 58%, 16%)
// hsl(235, 27%, 39%)
  

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export const ThemeTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();
    const duration = 160000; // 24-second cycle for demonstration

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed % duration) / duration;
      setProgress(newProgress);
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Calculate current color values
  const totalStops = COLOR_STOPS.length - 1;
  const rawIndex = progress * totalStops;
  const index = Math.floor(rawIndex);
  const t = rawIndex - index;

  const currentBg = COLOR_STOPS[index].bg.map((value, i) =>
    lerp(value, COLOR_STOPS[index + 1].bg[i], t)
  ) as [number, number, number];

  const currentFg = COLOR_STOPS[index].fg.map((value, i) =>
    lerp(value, COLOR_STOPS[index + 1].fg[i], t)
  ) as [number, number, number];

  // Update CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      currentBg.join(" ")
    );
    document.documentElement.style.setProperty(
      "--foreground",
      currentFg.join(" ")
    );
  }, [currentBg, currentFg]);

  return <>{children}</>;
};
