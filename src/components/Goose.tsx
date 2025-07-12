"use client";

import { useEffect, useState } from "react";
import GooseBody from "./assets/goose body.png";
import GooseLeg from "./assets/goose leg.png";
import Image from "next/image";
import Lightning from "./ui/lightning";

const MESSAGE_MAP: Record<number, string[]> = {
  1: ["Honk! I'm taking a break."],
  3: ["Again? I was mid-waddle!", "You just love stopping me, don’t you?"],
  5: ["Alright, this is becoming a pattern...", "You think this is funny?"],
  7: ["Honk! That’s it, I'm pausing again."],
  9: [
    "Okay wow. You really *are* committed.",
    "Stop it. I have goose things to do.",
  ],
  11: ["Let me move, just this once?", "You're making my feathers ruffled."],
  13: ["Seriously? I'm starting to question our friendship."],
  15: ["Honk! This is borderline harassment."],
  17: [
    "Are you enjoying this power?",
    "You know I'm not paid enough for this.",
  ],
  19: ["...you done?", "Goose.exe has encountered a problem."],
  21: ["I’m officially ignoring you now.", "You're honk-blocked."],
};

function getRandomMessage(messages: string[]) {
  return messages[Math.floor(Math.random() * messages.length)];
}

export default function Goose({ clickCount }: { clickCount: number }) {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [showLightning, setShowLighting] = useState(false);
  const [bodyMotion] = useState(true);

  useEffect(() => {
    const messages = MESSAGE_MAP[clickCount];
    console.log(clickCount);
    if (messages) {
      setDialogMessage(getRandomMessage(messages));
      setStopAnimation(true);
    } else if (clickCount > 22 && clickCount < 26) {
      setDialogMessage("");
      setShowLighting(true);
      setStopAnimation(true);
    } else if (clickCount > 25) {
      setDialogMessage("");
      setShowLighting(false);
      setStopAnimation(false);
    } else {
      setDialogMessage("");
      setStopAnimation(false);
      setShowLighting(false);
    }
  }, [clickCount]);

  return (
    <div className="relative w-full h-[150px] flex justify-center items-end">
      {/* Blackout Overlay */}
      {clickCount >= 23 && clickCount <= 25 && (
        <div className="fixed inset-0 bg-black z-40 pointer-events-none" />
      )}

      {/* Dialog Message */}
      {stopAnimation && dialogMessage && (
        <div className="absolute bottom-[120px] left-[50%] -translate-x-1/2 px-4 py-2 w-[220px] bg-white border border-gray-300 rounded-md shadow text-sm text-gray-800 animate-fadeIn text-center z-50">
          {dialogMessage}
        </div>
      )}

      {/* Goose */}
      <div
        className="relative w-[80px] h-[100px] animate-gooseWalk z-50"
        style={{ animationPlayState: !stopAnimation ? "running" : "paused" }}
      >
        {showLightning && (
          <div className="absolute w-[300px] h-[150px] bottom-0 z-45 animate-pulse translate-x-[-100px]">
            <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
          </div>
        )}
        <div
          className={`absolute bottom-6 z-10 ${
            bodyMotion ? "animate-bodyMotion" : ""
          }`}
          style={{
            animationPlayState:
              !stopAnimation && bodyMotion ? "running" : "paused",
          }}
        >
          <Image src={GooseBody} alt="Body" width={80} height={80} />
        </div>
        <div
          className="absolute left-9 bottom-1 z-0 animate-legBack delay-40ms"
          style={{ animationPlayState: !stopAnimation ? "running" : "paused" }}
        >
          <Image src={GooseLeg} alt="Leg" width={20} height={20} />
        </div>
        <div
          className="absolute left-9 bottom-1 z-10 animate-legFront"
          style={{ animationPlayState: !stopAnimation ? "running" : "paused" }}
        >
          <Image src={GooseLeg} alt="Leg" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
