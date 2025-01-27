"use client";

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import Link from 'next/link';
import { useTheme } from "next-themes"
import Goose from "@/components/Goose";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import profile from './../../../../public/profile.jpeg'
import IconLinkedIn from "@/components/svgs/IconLinkedIn";
import IconGithub from "@/components/svgs/IconGithub";


export default function BlogPage() {
    const { theme, setTheme } = useTheme();
    const [bodyMotion, setBodyMotion] = useState(true);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

  return (
    <div className= "w-screen flex justify-center items-center bg-background">
        <div className="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 my-10 mx-4 sm:mx-0 space-y-2">
            
            <div className="fixed bottom-20 left-10 cursor-pointer">
                <Goose bodyMotion={bodyMotion} setBodyMotion={setBodyMotion} />
            </div>
            <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center space-x-4">
                            
                            <a href="/">
                                <div className="group">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-blue-200 to-cyan-200">
                                    <Image src={profile} width={80} height={80} alt="image" className='rounded-full aspect-square object-cover absolute hover:scale-90'/>
                                    </div>
                                </div>
                            </a>
                            <div className='flex'>
                                <div className="flex">
                                <div className='flex justify-center items-center'>
                                    <a href="https://www.linkedin.com/in/anuj-kumar-b68189230/" target="_blank" rel="noopener noreferrer">
                                    <IconLinkedIn/>
                                    </a>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <a href="https://github.com/anujkumar025" target="_blank" rel="noopener noreferrer">
                                    <IconGithub/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="relative flex items-center justify-center p-2 w-10 h-10 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                        aria-label="Toggle theme"
                    >
                        <Sun
                        className={`absolute h-5 w-5 transition-transform ${
                            theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
                        }`}
                        />
                        <Moon
                        className={`absolute h-5 w-5 transition-transform ${
                            theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                        }`}
                        />
                    </button>
                </div>
                <div className="prose lg:prose-xl mx-auto text-gray-800 dark:text-gray-200 p-5">
                    <div className="text-lg font-semibold">Bringing the Goose to Life: A Fun Animation Experiment</div>
                    <div className="text-base sm:text-sm text-gray-600 dark:text-gray-200">27th Jan 2025</div>
                    <br />
                    <p>Hello there!</p>
                    <p>
                        You might be wondering, “Why a goose?” Honestly, I don’t have a solid
                        answer. Initially, I just needed a placeholder image and thought I’d
                        replace it later. But somehow, the goose stuck, and I started imagining
                        all sorts of fun ideas involving it. One of those ideas turned into
                        what you see here—a walking goose animation.
                    </p>
                    <br />
                    <strong>The Idea Behind the Walking Goose</strong>
                    <p>
                        What started as a simple placeholder quickly became a mini passion
                        project. Watching the goose "walk" was surprisingly delightful, and I
                        wanted to make the motion feel as natural as possible. The animation
                        combines subtle movements of both the legs and the body to create a
                        lifelike walking effect.
                    </p>
                    <br />
                    <strong>Breaking Down the Animation</strong>
                    <p>
                        For those interested in the technical details, the entire animation is
                        made up of multiple layers of motion:
                    </p>
                    <ol>
                        <li>
                        <u>Leg Movement</u>
                        <br />
                        The legs follow a straightforward back-and-forth rotational motion,
                        with a slight up-and-down bounce to mimic steps. This combination
                        alone gave a decent walking effect, though it felt a little robotic
                        at first.
                        <br />
                        What I found most amusing was how the goose looks like it’s doing a
                        moonwalk, but in a forward direction! You can also see it if you click this button.
                        <div className="inline-block ml-5">
                            <Button onClick={()=>{setBodyMotion(!bodyMotion)}}>Toggle Body Motion</Button>
                        </div>
                        </li>
                        <li>
                        <u>Body Motion</u>
                        <br />
                        To add more realism, I introduced a subtle rotational motion to the
                        body. This gentle tilt and lift gave the goose a more dynamic and
                        fluid appearance, making the walk feel closer to natural movement.
                        </li>
                        <li>
                        <u>Direction Flip</u>
                        <br />
                        One fun addition was making the goose appear to turn around
                        seamlessly. This was done by flipping the body’s scale along the
                        X-axis mid-animation, creating the illusion of it walking back and
                        forth.
                        </li>
                    </ol>
                    <br />
                    <strong>Explore the Code</strong>
                    <p>
                        If you’re curious about how the animation works or want to play around
                        with the code, feel free to check out the source on my GitHub. It’s all
                        about experimenting with different animations and seeing how small
                        tweaks—like adjusting rotation angles or delays—can bring a character
                        to life.
                    </p>
                    <br />
                    <p>
                        I hope you enjoy this little walking goose as much as I enjoyed
                        creating it. Sometimes, the simplest ideas turn into the most fun
                        projects.
                    </p>
                    </div>
            </div>
        </div>
    </div>
  );
}
