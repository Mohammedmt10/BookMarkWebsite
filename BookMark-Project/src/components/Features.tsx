import { useState } from "react"

export function Features() {

    const [selected , setSelected] = useState("bookmarking")

    return <div className="max-w-screen">
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
        <div className="flex border-b-1 border-gray-300 gap-10 mb-10 w-fit m-auto mt-10 text-lg">
            <div className={`${selected == "bookmarking" ? "border-b-4 border-red-400" : ""} p-3 hover:text-red-400 cursor-pointer`}
            onClick={() => {
                setSelected("bookmarking")
            }}>
                Simple Bookmarking
            </div>
            <div className={`${selected == "searching" ? "border-b-4 border-red-400" : ""} p-3 hover:text-red-400 cursor-pointer`} onClick={() => {
                setSelected("searching")
            }}>
                Speedy Searching
            </div>
            <div className={`${selected == "sharing" ? "border-b-4 border-red-400" : ""} p-3 hover:text-red-400 cursor-pointer`} onClick={() => {
                setSelected("sharing")
            }}>
                Easy Sharing
            </div>
        </div>
        <div>
            {selected == "bookmarking" && <div className="flex">
                <div className="ml-36">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg" className="z-[999] absolute" alt="" />
                    <div className="relative z-[0] min-w-2xl min-h-84 mt-28 rounded-r-full bg-[#5368df] -translate-x-52"></div>
                </div>
                <div>
                    <div className="pr-10 pt-10 pl-0 w-fit">
                        <div className="text-3xl font-semibold">
                            Bookmark in one click
                        </div>
                        <div className="text-gray-500 py-6 text-md w-fit">
                            Organize your bookmarks however you like. Our simple drag- <br />
                            and-drop interface gives you complete control over how you <br />
                            manage your favourite sites.
                        </div>
                        <button className="bg-[#5368df] border-2 border-[#5368df] text-white hover:bg-white hover:text-[#5368df] font-bold px-3 py-2 rounded cursor-pointer">More Info</button>
                    </div>
                </div>
            </div>}
            {selected == "searching" && <div className="flex">
                <div className="ml-36">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg" className="z-[999] absolute" alt="" />
                    <div className="relative z-[0] min-w-2xl min-h-84 mt-28 rounded-r-full bg-[#5368df] -translate-x-52"></div>
                </div>
                <div>
                    <div className="pr-10 pt-10 pl-0 w-fit">
                        <div className="text-3xl font-semibold">
                            Intelligent search
                        </div>
                        <div className="text-gray-500 py-6 text-md w-fit">
                            Our powerful search feature will help you find saved sites in <br />
                            no time at all. No need to trawl through all of your <br />
                            bookmarks.
                        </div>
                        <button className="bg-[#5368df] border-2 border-[#5368df] text-white hover:bg-white hover:text-[#5368df] font-bold px-3 py-2 rounded cursor-pointer">More Info</button>
                    </div>
                </div>
            </div>}
            {selected == "sharing" && <div className="flex">
                <div className="ml-36">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg" className="z-[999] absolute" alt="" />
                    <div className="relative z-[0] min-w-2xl min-h-84 mt-28 rounded-r-full bg-[#5368df] -translate-x-52"></div>
                </div>
                <div>
                    <div className="pr-10 pt-10 pl-0 w-fit">
                        <div className="text-3xl font-semibold">    
                            Share your bookmarks
                        </div>
                        <div className="text-gray-500 py-6 text-md w-fit">
                            Easily share your bookmarks and collections with others. <br />
                            Create a shareable a link that you can send at the click of a <br />
                            button.
                        </div>
                        <button className="bg-[#5368df] border-2 border-[#5368df] text-white hover:bg-white hover:text-[#5368df] font-bold px-3 py-2 rounded cursor-pointer">More Info</button>
                    </div>
                </div>
            </div>}
        </div>
    </div>
}