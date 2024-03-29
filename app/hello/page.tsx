'use client'
import Image from "next/image";
import React from "react";
import HomeGame from "./room/page";
import { AppCtx, SocketContext } from "./Context/SocketContext";
import { useMyGlobalContext } from "../ContextGlobalProvider";
import SwiperComponent from "./Components/swiper";
const HelloPage = () => {
    let { theme }: any = useMyGlobalContext()
    return <div className="flex flex-col flex-1 items-center justify-center gap-[1rem] p-4">
        <div className="flex flex-1 items-center justify-center gap-[10rem] p-4">
            <div>
                <div className={`sm:text-[18px]/[24px] text-[16px]/[20px] ${theme ? 'text-mywhite' : 'text-black'}`}>
                    Hi all. I am
                </div>
                <div className={`sm:text-[62px]/[70px] text-[40px]/[60px]  ${theme ? 'text-mywhite' : 'text-black'}`}>
                    Amine Haddad
                </div>
                <div className="sm:text-[25px]/[40px] text-[19px]/[30px] text-myblue">
                    {'>'} Front-end & Mobile developer
                </div>
                <div className="sm:text-[16px]/[25px] text-[16px]/[20px] text-mygray">
                </div>
                <div className="text-[16px]/[30px] text-myblue flex gap-2 flex-wrap cursor-pointer" onClick={() => {
                    window.open('https://github.com/ahaddad98', '_blank');
                }}>
                    <span style={{ color: 'rgba(77, 91, 206, 1)' }}>
                        const
                    </span>
                    <span style={{ color: 'rgba(67, 217, 173, 1)' }}>
                        githubLink
                    </span>
                    <span className="text-mywhite">
                        =
                    </span>
                    <div className="cursur-pointer" style={{ color: 'rgba(233, 146, 135, 1)' }}>
                        “https://github.com/ahaddad98”
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative rounded-full">
                <SocketContext>
                    <HomeGame />
                </SocketContext>
                {/* <PlayPage /> */}
                {/* <Image src={'/ss.jpg'} alt="" width={300} height={200} className="rounded-full"/> */}
            </div>
        </div>
        <div className="h-[50px] w-full xl:w-[600px]" >
            <SwiperComponent />
        </div>
    </div>
}
export default HelloPage