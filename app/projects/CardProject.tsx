'use client'
import Image from "next/image";
import React from "react";



const CardProject = ({linkto, title} : {linkto: string, title: string}) => {
    return (
        <div className="flex flex-col gap-2 w-[370px] bg-cardbg border-2 border-bordercolor rounded-lg card-project">
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