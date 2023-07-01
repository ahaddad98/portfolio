import React from "react";
import CardSnippet from "./Card";
import { DEFAULT_MIN_VERSION } from "tls";

const BioPage = () => {
    const Arr = [
        "",
        "About me",
        "I have 5 years of еxperience in web",
        "development lorem ipsum dolor sit amet,",
        "consectetur adipiscing elit, sed do eiusmod",
        "tempor incididunt ut labore et dolore",
        "magna aliqua. Ut enim ad minim veniam,",
        "quis nostrud exercitation ullamco laboris",
        "nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in",
        "Duis aute irure dolor in reprehenderit in ",
        "voluptate velit esse cillum dolore eu fugiat",
        "nulla pariatur. Excepteur sint occaecat",
        "officia deserunt mollit anim id est laborum.",
        ""
    ]
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col">
            <div className="hidden xl:flex h-[42px] w-[200px]  items-center justify-between pl-3 pr-3 border-r-2 border-r-bordercolor">
                <a>Item 1</a>
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
                                    {key === 0  && key !== Arr.length - 1  ? '/**  ' + el :  '*   ' + el}
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