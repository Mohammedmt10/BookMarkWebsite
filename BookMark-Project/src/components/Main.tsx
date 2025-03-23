export function Main() { 
    return <div className="flex justify-between pr-28 max-w-screen">
        <div className="ml-12">
            <div className="text-6xl font-bold">
                A Simple Bookmark <br />
                Manager
            </div>
            <div className="text-gray-400 text-2xl mt-8">
                A clean and simple interface to organize <br />
                your favourite websites. Open a new <br />
                browser tab and see your sites load <br />
                instantly. Try it for free.
            </div>
            <div className="mt-10">
                <button className="border-2 cursor-pointer font-bold border-[#5368df] px-5 bg-[#5368df] text-white py-3 rounded hover:bg-white hover:text-[#5368df]">Get it On Chrome</button>
                <button className="font-bold ml-4 border-1 cursor-pointer border-[#d1d5db] px-5 bg-[#d1d5db] shadow-[#dae0e8] shadow-md py-3 rounded hover:bg-white">Get it On Chrome</button>
            </div>
        </div>
        <div className="mx-auto relative p-6">
        <div className="z-[0] translate-x-96 top-68 min-w-xl rounded-l-full min-h-64 absolute bg-[#5368df]"></div>
            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg" alt="" className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"/>
        </div>
    </div>
}