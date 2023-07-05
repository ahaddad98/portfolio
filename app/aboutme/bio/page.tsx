'use client'
import React from "react";
import CardSnippet from "./Card";
import { DEFAULT_MIN_VERSION } from "tls";
import { useMyGlobalContext } from "@/app/ContextGlobalProvider";

const BioPage = () => {
    let { theme }: any = useMyGlobalContext()
    const Arr = [
        "",
        "About me",
        "Highly skilled Front-end Web and Mobile Developer with 2+ years of experience",
        "creating visually stunning and user-friendly digital solutions.",
        "Proven track record of delivering high-quality projects on time and within budget.",
        "Passionate about staying up-to-date with the latest technologies and trends.",
        "Strong problem-solving, communication, and collaboration skills.",
        "A team player who enjoys working with others to exceed client expectations.",
        "Looking for new and challenging projects to continue my career as a Web & Mobile Developer.",
        ""
    ]
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col xl:overflow-hidden">
            <div className={`hidden xl:flex h-[42px] w-[200px]  items-center justify-between pl-3 pr-3 border-r-2 ${theme ? 'border-r-bordercolor' : 'border-r-mywhite'}`}>
                <a>Bio</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 flex-col overflow-hidden xl:overflow-y-scroll p-5 text-[17px] text-mygray">
                <span className="block xl:hidden text-mywhite">
                    // personal-info / bio
                </span>
                <code>
                    {
                        Arr.map((el: any, key: number) => {
                            return <div className="flex gap-10" key={key}>
                                <span className="hidden xl:block">
                                    {key + 1}
                                </span>
                                <div>
                                    {key === 0 && key !== Arr.length - 1 ? '/**  ' + el : '*   ' + el}
                                    {key === Arr.length - 1 && '**/'}
                                </div>
                            </div>
                        })
                    }
                </code>
            </div>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1"></div>
        <div className="h-full max-h-full flex-1 flex flex-col">
            <div className="min-h-[42px]">
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="toOver flex flex-1 max-h-full">
                <div className="text-[17px] text-mygray overflow-hidden xl:overflow-y-scroll p-5">
                // Code snippet showcase:
                    <CardSnippet />
                    <CardSnippet />
                    <CardSnippet />
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default BioPage