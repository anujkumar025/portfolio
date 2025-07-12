"use client";

import Bio from '@/components/Bio';
import BlogSection from '@/components/BlogSection';
import Goose from '@/components/Goose';
import Project from '@/components/Project';
import SkillsSection from '@/components/SkillsSection';
import WorkExp from '@/components/WorkExp';
import { useEffect, useState } from 'react';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleClick = () => setClickCount((prev) => prev + 1);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const blackout = clickCount >= 23;

  return (
    <div className= "w-screen flex justify-center items-center bg-background">
      {blackout && (
        <div className="fixed inset-0 bg-black opacity-80 z-40 pointer-events-none" />
      )}
        <div className="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 my-10 mx-4 mx-4 sm:mx-0 space-y-4">
          <div className='fixed bottom-20 left-10 z-50'>
            <Goose clickCount={clickCount}/>
          </div>
          {!blackout && (
          <>
            <Bio />
            <SkillsSection />
            <WorkExp />
            <Project />
            <BlogSection />
          </>
        )}
        </div>
    </div>
  );
}
