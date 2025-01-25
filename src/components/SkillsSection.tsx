import IconTypescript from './svgs/IconTypescript';
import IconCSS from './svgs/IconCSS';
import IconExpress from './svgs/IconExpress';
import IconMongodb from './svgs/IconMongodb';
import IconNextjs from './svgs/IconNextjs';
import IconPostgresql from './svgs/IconPostgresql';
import IconPrisma from './svgs/IconPrisma';
import IconReact from './svgs/IconReact';
import IconTailwind from './svgs/IconTailwind';
import IconNestjs from './svgs/IconNestjs';

export default function SkillsSection() {
    return (
        <div className='grid grid-cols-5 gap-7'>
            <div className='flex justify-center items-center hover:animate-float'><IconTypescript/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconCSS/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconReact/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconExpress/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconMongodb/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconNextjs/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconPostgresql/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconTailwind/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconNestjs/></div>
            <div className='flex justify-center items-center hover:animate-float'><IconPrisma/></div>
        </div>
    )
}