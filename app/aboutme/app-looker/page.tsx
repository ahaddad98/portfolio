'use client'
import React from "react";
// import CardSnippet from "./Card";
import { DEFAULT_MIN_VERSION } from "tls";
import CardSnippet from "../bio/Card";
import { useMyGlobalContext } from "@/app/ContextGlobalProvider";

const SoftwareSchool = () => {
    let { theme }: any = useMyGlobalContext()
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col">
            <div className={`hidden xl:flex h-[42px] w-[200px]  items-center justify-between pl-3 pr-3 border-r-2 ${theme ? 'border-r-bordercolor' : 'border-r-mywhite'}`}>
                <a>APP LOOKER</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 flex-col overflow-hidden xl:overflow-y-scroll p-5 text-[17px] text-mygray">
                <span className="block xl:hidden text-mywhite">
                    // personal-info / bio
                </span>
                <div className="p-4 rounded-lg shadow">
                    <p className="mb-4">Front End Developer, (December 2021 - May 2022)</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>A travel app connecting users with unique short-term accommodations worldwide.</li>
                        <li>From cozy apartments to luxurious homes, it streamlines bookings, enables direct host communication, and curates personalized travel experiences.</li>
                        <li>Built with PostgreSQL, Express.js, and React, AppLooker also facilitates seamless connections between freelancers and clients, fostering enhanced collaboration in a user-friendly environment</li>
                    </ul>
                </div>
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
export default SoftwareSchool