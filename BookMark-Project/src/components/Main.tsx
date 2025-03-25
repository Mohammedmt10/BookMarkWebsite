export function Main() { 
    return <div className="flex flex-col-reverse lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-between max-w-screen items-center md:pr-16">
        <div className="pl-16">
            <div className="text-6xl font-bold not-lg:flex not-lg:text-xl not-lg:justify-self-center">
                <div>
                    A Simple Bookmark
                </div>
                <div className="not-lg:pl-1">
                    Manager
                </div>
            </div>
            <div className="text-gray-400 text-2xl mt-8 not-lg:text-lg not-lg:text-center">
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
        <div className="text-center relative">
            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg" alt="" className="relative z-[10] lg:top-16 xl:top-0 "/>
        <div className="hidden md:absolute lg:block z-[0] translate-x-60 top-52 min-w-4xl rounded-l-full min-h-76 bg-[#5368df]"></div>
        </div>
    </div>
}