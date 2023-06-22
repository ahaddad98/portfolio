import React from "react";

const University = () => {
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col">
            <div className="h-[42px] w-[200px] flex items-center justify-between pl-3 pr-3 border-r-2 border-r-bordercolor">
                <a>Item 1</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 overflow-y-scroll">
                amine
            </div>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1"></div>
        <div className="h-full flex-1 flex flex-col">
            <div className="h-[42px]">
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 overflow-y-scroll">
                test
            </div>
        </div>
    </React.Fragment>
}
export default University