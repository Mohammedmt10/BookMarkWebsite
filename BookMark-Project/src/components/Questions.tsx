import { useState } from "react";
import { Arrow } from "../icons/Arrow";

export function Questions() {

    const [question , setQuestion] = useState("");

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
            setQuestion(question ?  "" : "Q1");
        }} className={`flex justify-center mx-auto items-center ${!open ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">What is Bookmark?</div>
                <div className={`${question == "Q1" ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {question == "Q1"  && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
        <div onClick={()=>{
            setQuestion((question ?  "" : "Q2"))
        }} className={`flex justify-center mx-auto items-center ${!(question == "Q2") ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">How can I request a new browser?</div>
                <div className={`${question == "Q2"  ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {question == "Q2" && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
        <div onClick={()=>{
            setQuestion((question ?  "" : "Q3"))
        }} className={`flex justify-center mx-auto items-center ${!(question == "Q3")  ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">Is ther a mobile app?</div>
                <div className={`${question == "Q3"  ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {question == "Q3"  && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
        <div onClick={()=>{
            setQuestion((question ?  "" : "Q4"))
        }} className={`flex justify-center mx-auto items-center ${!(question == "Q4") ? "border-b-2" : ""} border-gray-200 w-fit`}>
                <div className="duration-300 min-w-2xl p-3 text-lg text-gray-500  hover:text-red-400  cursor-pointer">What about other Chromium browsers</div>
                <div className={`${(question == "Q4") ? "rotate-180" : ""}`}><Arrow /></div>
        </div>
        {(question == "Q4") && <div className="justify-center mx-auto max-w-2xl border-b-2 border-gray-200 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nihil sapiente autem distinctio cupiditate dolorem debitis pariatur animi iste iusto. Fugit, aliquam porro. Officia delectus ut illum, nisi magni beatae?
        </div>}
    </div>
}