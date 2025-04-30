import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import typeSprint from './assets/type-sprint.png';
import cardGame from './assets/card-game.png';
import voteApp from './assets/voting-app.png';
import ToDo from './assets/To-Do.png'
import RestroGram from './assets/RestroGram.png';


export default function Project() {
    return (
        <>
        <div className='flex justify-start w-full text-lg sm:text-base'>
            <div className='font-semibold'>Projects</div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <Card className='hover:scale-105 transition-transform duration-300 bg-[#FFFFFFCC]'>
              <a href="https://www.restrogram.in" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">RestroGram</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Serve Smarter, Grow Faster</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image className='rounded-sm' src={RestroGram} alt="RestroGram" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:scale-105 transition-transform duration-300 bg-[#FFFFFFCC]'>
              <a href="https://github.com/anujkumar025/voice-control-to-do" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">Voice Controlled To-Do</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Manage your tasks using voice commands</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image className='rounded-sm' src={ToDo} alt="To-Do" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:scale-105 transition-transform duration-300 bg-[#FFFFFFCC]'>
              <a href="https://66e575bf49004939ba38a25f--rainbow-sunflower-71542f.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">A-Know</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Easy to make quizzes and participation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image className='rounded-sm' src={voteApp} alt="Quiz App" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:scale-105 transition-transform duration-300 bg-[#FFFFFFCC]'>
              <a href="https://66e5bd4df79a9a948515cbb2--verdant-squirrel-faca2f.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">Exploding Kitten</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Card flipping game</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image className='rounded-sm' src={cardGame} alt="Exploding Kitten" height={150}/>
                </CardContent>
              </a>
            </Card>
            <Card className='hover:scale-105 transition-transform duration-300 bg-[#FFFFFFCC]'>
              <a href="https://type-sprint-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">Type Sprint</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Know your typing speed and improve</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image className='rounded-sm' src={typeSprint} alt="TypeSprint" height={150}/>
                </CardContent>
              </a>
            </Card>
          </div>
        </>
    )
}