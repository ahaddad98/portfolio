'use client'
import React, { useState } from "react";
import CardProject from "./CardProject";
import { useMyContext } from "./ContextProvider";

const Projects = () => {
    const AllProjectList = [
        {
            linkto: '',
            title: '',
            image: '',
            target: ['']
        }
    ]
    const [projectsList, setProjectList] = useState([])
    let {data} : any = useMyContext()
    return <React.Fragment>
        <div className="w-full h-full max-h-full flex-1 flex flex-col">
            <div className="hidden xl:flex h-[42px] w-[200px]  items-center justify-between pl-3 pr-3 border-r-2 border-r-bordercolor">
                <a>Projects List</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="w-full toOver flex flex-1 max-h-full">
                <div className="mt-4 w-full flex flex-row flex-wrap items-start justify-center gap-4 text-[17px] text-mygray overflow-hidden xl:overflow-y-scroll p-5">
                {
                    data.map((el:any, key: number) => {
                        return <CardProject title={el.title} linkto={el.linkto} />
                    })
                }
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Projects