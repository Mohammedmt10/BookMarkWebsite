import { useState } from "react"

export function Features() {

    const [selected , setSelected] = useState("bookmarking")

    return <div className="max-w-screen lg:mb-40">
        <div className="justify-center flex">
            <div>
            <div className="text-4xl font-bold mt-20 justify-center flex">
                Features
            </div>
            <div className="mt-6 justify-center flex text-center text-[#9fa2a7] font-medium">
                Our aim is to make it quick and easy for you to access your <br />
                favourite websites. Your bookmarks sync between your <br />
                devices so you can access them on the go.
            </div>
            </div>
        </div>
        <div className="flex md:flex-row flex-col md:border-b-1 md:border-gray-300 gap-10 mb-10 w-fit m-auto mt-10 text-lg">
            <div className={`${selected == "bookmarking" ? "border-b-4 border-red-400" : "border-b-1 md:border-b-0"} p-3 hover:text-red-400 cursor-pointer  text-center border-gray-300 md:w-fit w-sm`}
            onClick={() => {
                setSelected("bookmarking")
            }}>
                Simple Bookmarking
            </div>
            <div className={`${selected == "searching" ? "border-b-4 border-red-400" : "border-b-1 md:border-b-0"} p-3 hover:text-red-400 cursor-pointer  text-center border-gray-300`} onClick={() => {
                setSelected("searching")
            }}>
                Speedy Searching
            </div>
            <div className={`${selected == "sharing" ? "border-b-4 border-red-400" : " border-b-1 md:border-b-0"} p-3 hover:text-red-400 cursor-pointer border-b-1 text-center border-gray-300`} onClick={() => {
                setSelected("sharing")
            }}>
                Easy Sharing
            </div>
        </div>
        <div>
                    <div className="absolute z-[0] xl:w-2xl md:w-lg min-h-84 mt-28 -translate-x-18 rounded-r-full bg-[#5368df] lg:block hidden"></div>
                {selected == "bookmarking" && <div className="flex flex-col md:flex-row items-center">
                <div className="xl:ml-36 md:ml-8 md:mr-12">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg" className="z-[999] lg:relative md:px-0 px-8 md:ml-8" alt="" />
                </div>
                <div>
                    <div className="p-4 pr-6 w-full md:text-start text-center">
                        <div className="text-3xl font-semibold md:text-start text-center">
                            Bookmark in one click
                        </div>
                        <div className="text-gray-500 py-6 text-md max-w-lg md:text-start text-center">
                        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                        </div>
                        <button className="bg-[#5368df] border-2 border-[#5368df] text-white hover:bg-white hover:text-[#5368df] font-bold px-3 py-2 rounded cursor-pointer ">More Info</button>
                    </div>
                </div>
            </div>}
            {selected == "searching" && <div className="flex flex-col md:flex-row items-center">
                <div className="xl:ml-36 md:ml-8">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg" className="z-[999] lg:relative w-auto md:px-0 px-8 md:ml-10" alt="" />
                </div>
                <div>
                    <div className="p-10 pl-14 w-fit md:text-start text-center">
                        <div className="text-3xl font-semibold md:text-start text-center">
                            Intelligent search
                        </div>
                        <div className="text-gray-500 py-6 text-md max-w-lg md:text-start text-center">
                        Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                        </div>
                        <button className="bg-[#5368df] border-2 border-[#5368df] text-white hover:bg-white hover:text-[#5368df] font-bold px-3 py-2 rounded cursor-pointer ">More Info</button>
                    </div>
                </div>
            </div>}
            {selected == "sharing" && <div className="flex flex-col md:flex-row items-center">
                <div className="xl:ml-36 md:ml-8">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg" className="z-[999] lg:relative w-auto md:px-0 px-8 ml-10" alt="" />
                </div>
                <div>
                    <div className="p-10 pl-14 w-full md:text-start text-center">
                        <div className="text-3xl font-semibold md:text-start text-center">
                            Share your bookmarks
                        </div>
                        <div className="text-gray-500 py-6 text-md max-w-lg md:text-start text-center">
                        Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.
                        </div>
                        <button className="bg-[#5368df] border-2 border-[#5368df] text-white hover:bg-white hover:text-[#5368df] font-bold px-3 py-2 rounded cursor-pointer ">More Info</button>
                    </div>
                </div>
            </div>}
        </div>
    </div>
}