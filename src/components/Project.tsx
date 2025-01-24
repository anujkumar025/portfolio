import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
// import procure_sense from './assets/procure_sense.png';
import typeSprint from './assets/type-sprint.png';
import cardGame from './assets/card-game.png';
import voteApp from './assets/voting-app.png';


export default function Project() {
    return (
        <>
        <div className='flex justify-start w-full text-lg sm:text-base'>
            <div>Projects</div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {/* <Card className='hover:bg-hoverWhite hover:scale-105 transition-transform duration-300'>
              <a href="https://tender-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle className="text-base sm:text-sm">Procure Sense</CardTitle>
                  <CardDescription className="text-sm sm:text-xs">Check eligibility of proposals</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src={procure_sense} alt="project-1" height={150}/>
                </CardContent>
              </a>
            </Card> */}
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
        </>
    )
}