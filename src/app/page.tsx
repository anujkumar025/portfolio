import Image from 'next/image';
import profile from '../../public/profile.jpeg';
import typescript from '../../public/typescript.svg';
import react from '../../public/react.svg';
import css from '../../public/css.png';
import express from '../../public/express.svg';
import mongodb from '../../public/mongodb.svg';
import nestjs from '../../public/nestjs.svg';
import postgresql from '../../public/postgresql.svg';
import tailwind from '../../public/tailwind-css.svg';
import nextjs from '../../public/next.svg';
import prisma from '../../public/prisma.svg';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import procure_sense from './../components/assets/procure_sense.png';
import typeSprint from './../components/assets/type-sprint.png';
import cardGame from './../components/assets/card-game.png';
import voteApp from './../components/assets/voting-app.png';
import github from './../../public/github.svg';
import linkedin from './../../public/linkedin.svg';

export default function Home() {
  return (
    <div className= "w-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 my-10 mx-4 mx-4 sm:mx-0 space-y-4">
          <div className='flex items-center space-x-4 w-full'>
            <div><Image src={profile} width={80} height={80} alt="image" className='rounded-full aspect-square object-cover hover:hover:animate-slowSpin'/></div>
            <div>
              <div className='text-xl sm:text-lg md:text-xl font-bold'>Hey, I&#39;m Anuj Kumar</div>
              <div className='text-sm sm:text-xs'>Full Stack Developer</div>
            </div>
            <div className='flex'>
              <div className='flex justify-center items-center'>
                <a href="https://www.linkedin.com/in/anuj-kumar-b68189230/" target="_blank" rel="noopener noreferrer">
                  <Image src={linkedin} alt='linkedin' width={25} height={25}/>
                </a>
              </div>
              <div className='flex justify-center items-center'>
                <a href="https://github.com/anujkumar025" target="_blank" rel="noopener noreferrer">
                  <Image src={github} alt='github' width={25} height={25}/>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className='text-base sm:text-sm md:text-base'>
              I&#39;m an aspiring full-stack developer with a focus on UI design and creating engaging user experiences. I’m building my skills through personal projects and continuous learning.
            </div>
          </div>
          <div className='grid grid-cols-5 gap-7'>
            <div className='flex justify-center items-center hover:animate-float'><Image src={typescript} alt='TypeScript' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={react} alt='Reactjs' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={css} alt='css' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={express} alt='Express' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={mongodb} alt='MongoDB' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={nestjs} alt='NestJs' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={postgresql} alt='Postgresql' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={tailwind} alt='Tailwind' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={nextjs} alt='NestJs' width={40} height={40}/></div>
            <div className='flex justify-center items-center hover:animate-float'><Image src={prisma} alt='Prisma' width={40} height={40}/></div>
          </div>
          <div className='flex justify-start w-full text-lg sm:text-base'>
            <div>Projects</div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <Card className='hover:bg-hoverWhite hover:scale-105 transition-transform duration-300'>
              <a href="https://tender-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">Procure Sense</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Check eligibility of proposals</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={procure_sense} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:bg-hoverWhite hover:scale-105 transition-transform duration-300'>
              <a href="https://type-sprint-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">Type Sprint</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Know your typing speed and improve</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={typeSprint} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:bg-hoverWhite hover:scale-105 transition-transform duration-300'>
              <a href="https://66e5bd4df79a9a948515cbb2--verdant-squirrel-faca2f.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">Exploding Kitten</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Card flipping game</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={cardGame} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:bg-hoverWhite hover:scale-105 transition-transform duration-300'>
              <a href="https://66e575bf49004939ba38a25f--rainbow-sunflower-71542f.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">A-Know</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Easy to make quizzes and participation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={voteApp} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
    </div>
  );
}
