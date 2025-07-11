"use client"
 
import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
import Image from 'next/image';
import profile from '../../public/profile.jpeg';
import IconGithub from "./svgs/IconGithub"
import IconLinkedIn from "./svgs/IconLinkedIn"
import IconLocation from "./svgs/IconLocation";

export default function Bio(){
  // const { theme, setTheme } = useTheme();

  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

    return (
        <>
          <div className='flex items-center w-full justify-between'>
            <div className="flex items-center space-x-4">
              <div className="group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-blue-200 to-cyan-200">
                  <Image src={profile} width={80} height={80} alt="image" className='rounded-full aspect-square object-cover absolute hover:scale-90'/>
                </div>
              </div>
              <div>
                <div className='text-xl sm:text-lg md:text-2xl font-bold'>Hey, I&#39;m Anuj Kumar</div>
                <div className='text-sm sm:text-xs'>
                  <a href="https://maps.app.goo.gl/yDERHa2Zf6TjgkNYA" className="flex items-center gap-1" target="_blank" >
                    <p className="font-medium">New Delhi, India</p>
                    <IconLocation/>
                  </a>
                </div>
              </div>
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
            {/* <div>
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
            </div> */}
          </div>
          <div>
            <div className='text-base sm:text-sm md:text-base'>
              I&#39;m a full-stack developer with a focus on UI design and creating engaging user experiences. I&#39;m building my skills through personal projects and continuous learning.
            </div>
          </div>
        </>
    )
}