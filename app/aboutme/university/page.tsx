import React from "react";
// import CardSnippet from "./Card";
import { DEFAULT_MIN_VERSION } from "tls";
import CardSnippet from "../bio/Card";

const University = () => {
    const Arr = [
        "",
        "In 2020, I graduated with a Bachelor's degree in Applied Mathematics from Sultan Moulay Slimane University.",
        "The program provided a comprehensive education in practical mathematics,",
        "developing my problem-solving skills and analytical thinking. ",
        "I gained valuable research experience and a solid foundation for pursuing careers in areas such as research,",
        "data analysis, finance, and engineering.",
        ""
    ]
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col">
            <div className="hidden xl:flex h-[42px] w-[200px]  items-center justify-between pl-3 pr-3 border-r-2 border-r-bordercolor">
                <a>University</a>
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
export default University