import Bio from '@/components/Bio';
import Goose from '@/components/Goose';
import Project from '@/components/Project';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <div className= "w-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 my-10 mx-4 mx-4 sm:mx-0 space-y-4">
          <div className='fixed bottom-20 left-10'>
            <Goose/>
          </div>
          <Bio/>
          <SkillsSection/>
          <Project/>
        </div>
    </div>
  );
}
