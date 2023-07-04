'use client'
import Image from "next/image";
import React from "react";
import { useMyGlobalContext } from "../ContextGlobalProvider";



const CardProject = ({ linkto, title }: { linkto: string, title: string }) => {
    let { theme }: any = useMyGlobalContext()
    return (
        <div className={`flex flex-col gap-2 w-[370px] border-2 border-bordercolor rounded-lg card-project ${theme ? 'bg-cardbg' : 'bg-mywhite'}`}>
            <Image src={'/imageproj.png'} alt="" width={370} height={170} />
            <div className="p-4 flex flex-col gap-3">
                <div>
                    {title}
                    <br />
                    view-project
                </div>
                <button className="btn btn-neutral" onClick={() => {
                    window.open(linkto)
                }}>view-project</button>
            </div>
        </div>
    );
};

export default CardProject