import { Arrow } from "../icons/Arrow";

export function Questions() {


    return <div className="mx-auto justify-items-center mb-40">
        <div>
            <div className="text-3xl font-bold text-center mb-5">
                Frequently Asked Questions
            </div>
            <div className="text-center max-w-xl mx-4">
                Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </div>
        </div>
        <div className="mx-8">
        <div className="mt-6 text-lg cursor-pointer transition outline-none border-b-1 py-4 border-gray-300 group max-w-xl" tabIndex={0}>
            <div className="flex justify-between">
                <div className="group-hover:text-orange-400 items-center">
                    What is Bookmark?
                </div>
                <div className="group-focus:text-orange-500 group-focus:rotate-180">
                    <Arrow />
                </div>
            </div>
            <div className="overflow-hidden transition group-focus:max-h-fit max-h-0 ease group-focus:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus facilis aliquid deserunt! Ad vero quam reiciendis nulla repellat voluptate praesentium quisquam suscipit earum, reprehenderit debitis minus veniam optio! Qui.
            </div>
        </div>
        <div className="text-lg cursor-pointer transition outline-none border-b-1 py-4 border-gray-300 group max-w-xl" tabIndex={1}>
            <div className="flex justify-between">
                <div className="group-hover:text-orange-400 items-center">
                    How can I request a new browser?
                </div>
                <div className="group-focus:text-orange-500 group-focus:rotate-180">
                    <Arrow />
                </div>
            </div>
            <div className="overflow-hidden transition group-focus:max-h-fit max-h-0 ease group-focus:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus facilis aliquid deserunt! Ad vero quam reiciendis nulla repellat voluptate praesentium quisquam suscipit earum, reprehenderit debitis minus veniam optio! Qui.
            </div>
        </div>
        <div className="text-lg cursor-pointer transition outline-none border-b-1 py-4 border-gray-300 group max-w-xl" tabIndex={1}>
            <div className="flex justify-between">
                <div className="group-hover:text-orange-400 items-center">
                    Is ther a mobile app?
                </div>
                <div className="group-focus:text-orange-500 group-focus:rotate-180">
                    <Arrow />
                </div>
            </div>
            <div className="overflow-hidden transition group-focus:max-h-fit max-h-0 ease group-focus:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus facilis aliquid deserunt! Ad vero quam reiciendis nulla repellat voluptate praesentium quisquam suscipit earum, reprehenderit debitis minus veniam optio! Qui.
            </div>
        </div>
        <div className="text-lg cursor-pointer transition outline-none border-b-1 py-4 border-gray-300 group max-w-xl" tabIndex={1}>
            <div className="flex justify-between">
                <div className="group-hover:text-orange-400 items-center">
                    What about other Chromium browsers
                </div>
                <div className="group-focus:text-orange-500 group-focus:rotate-180">
                    <Arrow />
                </div>
            </div>
            <div className="overflow-hidden transition group-focus:max-h-fit max-h-0 ease group-focus:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus facilis aliquid deserunt! Ad vero quam reiciendis nulla repellat voluptate praesentium quisquam suscipit earum, reprehenderit debitis minus veniam optio! Qui.
            </div>
        </div>
        </div>
    </div>
}