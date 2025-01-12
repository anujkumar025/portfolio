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

export default function Home() {
  return (
    <div className= "w-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-2/5 my-10 space-y-4">
          <div className='flex items-center space-x-4 w-full'>
            <div><Image src={profile} width={80} height={80} alt="image" className='rounded-full aspect-square object-cover'/></div>
            <div>
            <div className='text-xl font-bold'>Hey, I&#39;m Anuj Kumar</div>
              <div className='text-sm'>Full Stack Developer</div>
            </div>
          </div>
          <div>
            <div>
              I&#39;m a creative software developer with five years of experience. I specialize
              in UI design and crafting engaging user experiences with great attention to detail.
            </div>
          </div>
          <div className='grid grid-cols-5 gap-7'>
            <div className='flex justify-center items-center'><Image src={typescript} alt='TypeScript' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={react} alt='Reactjs' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={css} alt='css' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={express} alt='Express' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={mongodb} alt='MongoDB' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={nestjs} alt='NestJs' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={postgresql} alt='Postgresql' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={tailwind} alt='Tailwind' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={nextjs} alt='NestJs' width={40} height={40}/></div>
            <div className='flex justify-center items-center'><Image src={prisma} alt='Prisma' width={40} height={40}/></div>
          </div>
          <div className='flex justify-start w-full text-lg'>
            <div>Projects</div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <Card className='hover:bg-hoverWhite'>
              <a href="https://tender-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle>Procure Sense</CardTitle>
                  <CardDescription>Check eligibility of proposals</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={procure_sense} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:bg-hoverWhite'>
              <a href="https://type-sprint-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle>Type Sprint</CardTitle>
                  <CardDescription>Know your typing speed and improve</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={typeSprint} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:bg-hoverWhite'>
              <a href="https://66e5bd4df79a9a948515cbb2--verdant-squirrel-faca2f.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle>Exploding Kitten</CardTitle>
                  <CardDescription>Card flipping game</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={cardGame} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:bg-hoverWhite'>
              <a href="https://66e575bf49004939ba38a25f--rainbow-sunflower-71542f.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle>A-Know</CardTitle>
                  <CardDescription>Easy to make quizzes and participation</CardDescription>
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
