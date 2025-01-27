"use client";

import Bio from '@/components/Bio';
import BlogSection from '@/components/BlogSection';
import Goose from '@/components/Goose';
import Project from '@/components/Project';
import SkillsSection from '@/components/SkillsSection';
import { useState } from 'react';

export default function Home() {
  const [bodyMotion] = useState(true);

  return (
    <div className= "w-screen flex justify-center items-center bg-background">
        <div className="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 my-10 mx-4 mx-4 sm:mx-0 space-y-4">
          <div className='fixed bottom-20 left-10'>
            <Goose bodyMotion={bodyMotion}/>
          </div>
          <Bio/>
          <SkillsSection/>
          <Project/>
          <BlogSection/>
        </div>
    </div>
  );
}
