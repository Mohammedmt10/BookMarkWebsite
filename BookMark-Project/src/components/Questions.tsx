import { useState } from "react";
import { Arrow } from "../icons/Arrow";

export function Questions() {

    const [open , setOpen] = useState(false)
    const [open1 , setOpen1] = useState(false)
    const [open2 , setOpen2] = useState(false)
    const [open3 , setOpen3] = useState(false)

    return <div className="mx-auto mb-40">
        <div className="text-center mb-10">
            <div className="text-4xl font-bold mb-10">
                Frequently Asked Questions
            </div>
            <div className="text-center">
                Here are some of our FAQs. If you have any other questions <br />
                you'd like answered please feel free to email us.
            </div>
        </div>
        <div onClick={()=>{
            setOpen(c=>!c)
            console.log(open)
        }} className={`flex justify-center mx-auto items-center ${!open ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">What is Bookmark?</div>
                <div className={`${open ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {open && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
        <div onClick={()=>{
            setOpen1(c=>!c)
            console.log(open)
        }} className={`flex justify-center mx-auto items-center ${!open1 ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">How can I request a new browser?</div>
                <div className={`${open1 ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {open1 && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
        <div onClick={()=>{
            setOpen2(c=>!c)
            console.log(open)
        }} className={`flex justify-center mx-auto items-center ${!open2 ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">Is ther a mobile app?</div>
                <div className={`${open2 ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {open2 && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
        <div onClick={()=>{
            setOpen3(c=>!c)
            console.log(open)
        }} className={`flex justify-center mx-auto items-center ${!open3 ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">What about other Chromium browsers</div>
                <div className={`${open3 ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {open3 && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
    </div>
}