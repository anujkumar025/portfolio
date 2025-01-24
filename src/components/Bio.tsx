import Image from 'next/image';
import profile from '../../public/profile.jpeg';

import github from './../../public/github.svg';
import linkedin from './../../public/linkedin.svg';

export default function Bio(){

    return (
        <>
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
              I&#39;m a full-stack developer with a focus on UI design and creating engaging user experiences. I&#39;m building my skills through personal projects and continuous learning.
            </div>
          </div>
        </>
    )
}