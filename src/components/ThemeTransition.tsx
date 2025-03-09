"use client";

import { useEffect, useState } from "react";

interface ColorStop {
  bg: [number, number, number]; // [H, S, L]
  fg: [number, number, number];
}

const COLOR_STOPS: ColorStop[] = [
    { bg: [39, 80, 90], fg: [5, 5, 15] },  // Dawn (soft orange)

    { bg: [39, 80, 90], fg: [5, 5, 15] },  // Dawn (soft orange)
  
    { bg: [180, 50, 85], fg: [0, 0, 10] },  // Noon (clear sky blue)
    
    { bg: [250, 35, 70], fg: [5, 5, 15] },  // Late afternoon (blueish-lavender)
    
    { bg: [250, 35, 70], fg: [5, 5, 15] },  // Late afternoon (blueish-lavender)
    
    { bg: [180, 50, 85], fg: [0, 0, 10] },  // Noon (clear sky blue)
  
    { bg: [39, 80, 90], fg: [5, 5, 15] },  // Back to Dawn
];
  
  
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
    const duration = 120000; // 24-second cycle for demonstration

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