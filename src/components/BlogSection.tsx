import Link from "next/link";

export default function BlogSection(){

    return (
        <>
        <div className="flex justify-start w-full text-lg sm:text-base">
            <div className="font-semibold">Blogs</div>
        </div>
        <div className="w-full pb-10">
            <Link href="blogs/1" className="inline-block">
                <div className="p-5 hover:bg-[#FFFFFF73] dark:hover:bg-[#FFFFFF73] rounded-xl w-fit">
                    <div className="text-lg sm:text-base">
                        Bringing the Goose to Life 
                    </div>
                    <div className="text-base sm:text-sm text-gray-600 dark:text-gray-200">27th Jan 2025</div>
                </div>
            </Link>
        </div>
        </>
    )
}