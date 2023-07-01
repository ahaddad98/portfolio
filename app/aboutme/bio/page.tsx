import React from "react";
import CardSnippet from "./Card";

const BioPage = () => {
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col">
            <div className="hidden xl:flex h-[42px] w-[200px]  items-center justify-between pl-3 pr-3 border-r-2 border-r-bordercolor">
                <a>Item 1</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 overflow-hidden xl:overflow-y-scroll p-5 text-[17px] text-">
                <pre>
                    1    /** <br />
                    2    * About me <br />
                    3    * I have 5 years of еxperience in web <br />
                    4    * development lorem ipsum dolor sit amet, <br />
                    5    * consectetur adipiscing elit, sed do eiusmod <br />
                    6    * tempor incididunt ut labore et dolore <br />
                    7    * magna aliqua. Ut enim ad minim veniam, <br />
                    8    * quis nostrud exercitation ullamco laboris <br />
                    9    * nisi ut aliquip ex ea commodo consequat. <br />
                    10   * Duis aute irure dolor in reprehenderit in <br />
                    11   * <br />
                    12   * Duis aute irure dolor in reprehenderit in <br />
                    13   * voluptate velit esse cillum dolore eu fugiat <br />
                    14   * nulla pariatur. Excepteur sint occaecat <br />
                    15   * officia deserunt mollit anim id est laborum. <br />
                    16   */
                </pre>
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