"use client";

import { useEffect, useState } from "react";
import GooseBody from "./assets/goose body.png";
import GooseLeg from "./assets/goose leg.png";
import Image from "next/image";
import Lightning from "./ui/lightning";

const MESSAGE_MAP: Record<number, string[]> = {
  1: [
    "Hi! I'm Honkus, your friendly goose 🪿",
    "This place is neat—did you make it?",
  ],
  3: [
    "Oooh, was that a firecracker? That was *awesome!*",
    "Shiny thing goes boom! I like you already.",
  ],
  7: [
    "So... you’re really into clicking, huh?",
    "Okay okay, calm down, I still have ears.",
  ],
  11: [
    "Hey, I’m trying to waddle here.",
    "Clicks are fun, but moderation is a thing, y’know?",
  ],
  15: [
    "Okay listen—this isn't a game. Wait... is this a game?",
    "I’m a goose, not a light show conductor.",
  ],
  19: [
    "Are you doing this *just* to mess with me?",
    "You know I can see you, right?",
  ],
  23: [
    "You're making me question free will.",
    "I don’t remember agreeing to this simulation.",
  ],
  27: [
    "At this point I might just honk eternally into the void.",
    "You're either very bored or very committed.",
  ],
  33: [
    "You broke me. I'm broken. Goose.exe is not responding.",
  ],
  41: [
    "Still here? You win. I surrender. I’m just... goose dust now.",
  ],
  100: [
    "Clearly, You are a \"not very busy person\" type.",
  ],
  120: [
    "You know na, that I am counting how many times you clicked, and you just clicked for like 500 time.",
  ],
  121: [
    "You are not in Love with me, right?",
  ],
};

function getRandomMessage(messages: string[]) {
  return messages[Math.floor(Math.random() * messages.length)];
}

const EMOJI_MAP: Record<number, string> = {
  0: "🫡", // Respectful intro
  2: "😄", // Happy
  4: "🤩", // Excited
  6: "😊", // Still sweet
  8: "🙂", // Calm but slightly unsure
  10: "😐", // Neutral / bored
  12: "😶", // Staring into void
  14: "😕", // Confused
  16: "🙄", // Eye roll
  18: "😠", // Annoyed
  20: "💢", // Angry burst
  24: "😤", // Frustrated breath
  28: "🤬", // Furious
  32: "🧱", // Hit a wall
  36: "💀", // Dead inside
  44: "🫥", // Ghosted you
  50: "🫠", // Faded from existence
  90: "🙄",
  100: "😒",
  120: "🫡",
  121: "🫢",
};

const getEmojiForClick = (clickCount: number): string | null => {
  const keys = Object.keys(EMOJI_MAP).map(Number).sort((a, b) => a - b);
  let emoji = null;

  for (const key of keys) {
    if (clickCount >= key) {
      emoji = EMOJI_MAP[key];
    } else {
      break;
    }
  }

  return emoji;
};


export default function Goose({ clickCount }: { clickCount: number }) {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [showLightning, setShowLighting] = useState(false);
  const [bodyMotion] = useState(true);


  const emoji = getEmojiForClick(clickCount);

  useEffect(() => {
    const messages = MESSAGE_MAP[clickCount];
    console.log(clickCount);
    if (messages) {
      setDialogMessage(getRandomMessage(messages));
      setStopAnimation(true);
    } else if (clickCount > 27 && clickCount < 32) {
      setDialogMessage("");
      setShowLighting(true);
      setStopAnimation(true);
    } else if (clickCount > 31) {
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
      {clickCount > 27 && clickCount < 32 && (
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
        {emoji && (
          <div className="absolute -top-4 left-1/3 -translate-x-1/2 z-50 text-2xl">
            {emoji}
          </div>
        )}
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
