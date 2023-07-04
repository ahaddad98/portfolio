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
                <a>Aba-technology</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 flex-col overflow-hidden xl:overflow-y-scroll p-5 text-[17px] text-mygray">
                <span className="block xl:hidden text-mywhite">
                    // personal-info / bio
                </span>
                <div className="p-4 rounded-lg shadow">
                    <p className="mb-4">Front-End & Mobile App Developer, (May 2022 - June 2023)</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Worked on more than 10 IoT projects for Mediot and Digieye companies using React.js and mobile applications using Flutter.</li>
                        <li>Collaborated with cross-functional teams, including designers and back-end developers, to deliver high-quality products that met clients' needs.</li>
                        <li>Developed responsive and user-friendly UI components, features, and modules that improved the overall usability and user experience of the applications.</li>
                        <li>Contributed to the optimization and maintenance of existing applications, ensuring their continued performance and reliability.</li>
                        <li>Actively participated in code reviews, providing constructive feedback and implementing changes to improve code quality and maintainability.</li>
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