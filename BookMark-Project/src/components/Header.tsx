import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { MenuIcon } from "../icons/Menu";
import { menuOpen } from "../store/MenuState";
import { CloseIcon } from "../icons/close";

export function Header () {

    const [isOpen , setIsOpen] = useRecoilState(menuOpen)
    return <div>
    <div className="flex justify-between p-16 ">
        <div>
            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg" alt="" />
        </div>
        <div className="md:hidden" onClick={()=>{
            setIsOpen(c => !c);
        }}>
            <MenuIcon />
        </div>
        
            {isOpen && <div className='bg-blue-500 w-screen -translate-16 fixed min-h-screen h-full z-99 opacity-70 text-center'>
                <div className="float-end mt-40 mr-10" onClick={() => {
                    setIsOpen(false);
                }}>
                    <CloseIcon />
                </div>
                <div className="mt-52 py-4 border-y-1 border-gray-600">FEATURES</div>
                <div className="py-4 border-y-1 border-gray-600">DOWNLOAD</div>
                <div className="py-4 border-y-1 border-gray-600">FAQ</div>
                <div className="py-4 border-y-1 border-gray-600">LOGIN</div>
            </div>}
        
        {<div className={`text-gray-500 hidden md:flex list-none gap-5 text-lg items-center`}>
            <li>FEATURES</li>
            <li>DOWNLOAD</li>
            <li>FAQ</li>
            <li className="text-white bg-[#fa5757] px-8 py-1 rounded-lg hover:bg-white hover:text-[#fa5757] border-2 border-[#fa5757] cursor-pointer">LOGIN</li>
        </div>}
    </div>

    </div>
}