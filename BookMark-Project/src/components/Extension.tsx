export function Extension() {
    return <div>
        <div className="flex justify-center mx-auto mt-20 text-center">
            <div>
                <div className="text-4xl font-bold p-5">
                    Download the extension
                </div>
                <div className="text-center text-gray-500">
                We've got more browsers in the pipeline. Please do let us know if <br />
                you've got a favourite you'd like us to prioritize.
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-28 gap-6 mb-20">
            <div className="shadow-xl w-fit h-fit  min-w-72 place-items-center rounded">
                <div className="place-items-center w-full">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg" alt="" className="pt-10" /> <br />
                    <div className="font-bold p-3">
                        Add to Chrome
                    </div>
                    <div className="text-gray-500 p-3">
                        Minimum version 62
                    </div>
                </div>
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/bg-dots.svg" alt="" />
                <div className="p-4">
                    <button className="bg-[#5368df] text-white border-2 border-[#5368df] hover:bg-white hover:text-[#5368df] px-5 py-2 rounded cursor-pointer">Add & install Extension</button>
                </div>
            </div>
            <div className=" pb-3 shadow-xl w-fit h-fit place-items-center rounded pt-16">
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg" alt="" /> <br />
                    <div className="font-bold p-3">
                    Add to Firefox
                    </div>
                    <div className="text-gray-500 p-3">
                    Minimum Version 55
                    </div>
                    <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/bg-dots.svg" alt="" />
                <div className=" pt-4">
                    <button className="bg-[#5368df] text-white border-2 border-[#5368df] hover:bg-white hover:text-[#5368df] px-5 py-2 rounded cursor-pointer">Add & install Extension</button>
                </div>
            </div>
            <div className="shadow-xl w-fit h-fit place-items-center pt-18 pb-3 rounded">
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg" alt="" /> <br />
                <div className="font-bold p-3">
                Add to Opera
                </div>
                <div className="text-gray-500 p-3">
                Minimum Version 46
                </div>
                <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/bg-dots.svg" alt="" />
                <div className="pt-5">
                    <button className="bg-[#5368df] text-white border-2 border-[#5368df] hover:bg-white hover:text-[#5368df] px-5 py-2 rounded cursor-pointer">Add & install Extension</button>
                </div>
            </div>
        </div>
    </div>
}