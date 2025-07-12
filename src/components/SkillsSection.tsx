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
// import IconCPP from './svgs/IconCPP';

export default function SkillsSection() {
    return (
        <div className='grid grid-cols-5 gap-7'>
            <div className="relative flex flex-col items-center group hover:text-[#3079c6]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconTypescript />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Typescript
                </span>
            </div>
            <div className="relative flex flex-col items-center group hover:text-[#673398]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconCSS />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    CSS
                </span>
            </div>
            <div className="relative flex flex-col items-center group hover:text-[#60dbfb]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconReact />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ReactJs
                </span>
            </div>
            <div className="relative flex flex-col items-center group">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconExpress />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Express
                </span>
            </div>
            <div className="relative flex flex-col items-center group  hover:text-[#086d50]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconMongodb />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    MongoDB
                </span>
            </div>
            <div className="relative flex flex-col items-center group">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconNextjs />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    NextJs
                </span>
            </div>
            <div className="relative flex flex-col items-center group  hover:text-[#31648a]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconPostgresql />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    PostgreSQL
                </span>
            </div>
            <div className="relative flex flex-col items-center group hover:text-[#07b6d5]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconTailwind />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Tailwind
                </span>
            </div>
            <div className="relative flex flex-col items-center group hover:text-[#e02a55]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconNestjs />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    NestJs
                </span>
            </div>
            <div className="relative flex flex-col items-center group hover:text-[#0a3c54]">
                <div className="flex h-16 w-16 items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <IconPrisma />
                </div>
                <span className="absolute top-[calc(100%-4px)] text-sm text-gray-200 dark:text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Prisma
                </span>
            </div>
        </div>
    )
}