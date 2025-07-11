import GooseBody from '@/components/assets/goose body.png';
import GooseLeg from '@/components/assets/goose leg.png';
import Image from 'next/image';

type GooseProps = {
    bodyMotion: boolean;
};

export default function Goose({ bodyMotion }: GooseProps){

    return (
        <div className='relative w-full h-[100px]'>
            <div className="relative w-[80px] h-[100px] animate-gooseWalk">
                <div  className={`absolute bottom-6 z-10 ${bodyMotion ? 'animate-bodyMotion' : ''}`}>
                    <Image src={GooseBody} alt='Body' width={80} height={80}/>
                </div>
                <div className='absolute left-9 bottom-1 z-0 animate-legBack delay-40ms'>
                    <Image src={GooseLeg} alt='Leg' width={20} height={20}/>
                </div>
                <div className='absolute left-9 bottom-1 z-10 animate-legFront'>
                    <Image src={GooseLeg} alt='Leg' width={20} height={20}/>
                </div>
            </div>
        </div>
    )
}