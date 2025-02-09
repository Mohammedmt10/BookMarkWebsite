export function Header () {
    return <div className="flex justify-between p-16 ">
        <div>
            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg" alt="" />
        </div>
        <div className="text-gray-500 flex list-none gap-5 text-lg items-center">
            <li>FEATURES</li>
            <li>DOWNLOAD</li>
            <li>FAQ</li>
            <li className="text-white bg-[#fa5757] px-8 py-1 rounded-lg hover:bg-white hover:text-[#fa5757] border-2 border-[#fa5757] cursor-pointer">LOGIN</li>
        </div>
    </div>
}