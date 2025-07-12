"use client";

import { useEffect, useState } from "react";
import GooseBody from "./assets/goose body.png";
import GooseLeg from "./assets/goose leg.png";
import Image from "next/image";

type GooseProps = {
  bodyMotion: boolean;
};

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

export default function Goose({ bodyMotion }: GooseProps) {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [dialogMessage, setDialogMessage] = useState("");

  useEffect(() => {
    console.log(clickCount);
    const toggleMotion = () => {
      setClickCount((prev) => {
        const newCount = prev + 1;
        const messages = MESSAGE_MAP[newCount];

        if (messages) {
          const randomMsg = getRandomMessage(messages);
          setDialogMessage(randomMsg);
          setStopAnimation(true); // Only stop if message exists
        } else {
          setDialogMessage(""); // Clear message
          setStopAnimation(false); // Resume animation if no message
        }

        return newCount;
      });
    };

    document.addEventListener("click", toggleMotion);
    return () => {
      document.removeEventListener("click", toggleMotion);
    };
  }, []);

  return (
    <div className="relative w-full h-[150px] flex justify-center items-end">
      {stopAnimation && dialogMessage && (
        <div className="absolute bottom-[120px] left-[50%] -translate-x-1/2 px-4 py-2 w-[220px] bg-white border border-gray-300 rounded-md shadow text-sm text-gray-800 animate-fadeIn text-center">
          {dialogMessage}
        </div>
      )}
      <div
        className="relative w-[80px] h-[100px] animate-gooseWalk"
        style={{ animationPlayState: !stopAnimation ? "running" : "paused" }}
      >
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
