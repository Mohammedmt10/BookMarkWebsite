import { FacebookIcon } from "../icons/FacebookIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export function Footer() {
    return <div>
        <div className="flex justify-center mx-auto text-center bg-[#5368df] text-white p-20 px-16">
        <div>
            <div className="text-xl mb-8">
                35,000+ ALREADY JOINED
            </div>
            <div className="text-3xl font-bold max-w-md">
                Stay up-to-date with what
                we're doing
            </div>
            <div className="flex md:flex-row flex-col items-center">
                <input type="text" placeholder="Enter your email address" className="w-56 px-4 mt-6 py-2 rounded bg-white text-black outline-0" />
                <button className="bg-red-400 text-white px-4 rounded ml-3 cursor-pointer h-fit py-2 mt-6">Contact Us</button>
            </div>
        </div>
    </div>
    <div>
        <div className="p-16 text-lg font-medium flex bg-[#252b46] text-gray-500 justify-between items-center md:flex-row flex-col ">
                <div className="flex gap-8 md:flex-row flex-col text-center">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg" className="cursor-pointer" />
                    <a className="hover:text-red-400 cursor-pointer">FEATURES</a>
                    <a className="hover:text-red-400 cursor-pointer">DOWNLOAD</a>
                    <a className="hover:text-red-400 cursor-pointer">FAQ</a>
                </div>
                <div className="flex gap-8 mt-10 md:mt-0">
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
        </div>
    </div>
}

