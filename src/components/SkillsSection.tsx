import Image from 'next/image';
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

export default function SkillsSection() {
    return (
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
    )
}