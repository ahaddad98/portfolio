import Image from "next/image";
import React from "react";

const HelloPage = () => {
    return <div className="flex flex-1 items-center justify-center gap-[7rem]">
        <div>
            <div className="text-[18px]/[24px] text-mywhite">
                Hi all. I am
            </div>
            <div className="text-[62px]/[70px] text-mywhite">
                Amine Haddad
            </div>
            <div className="text-[25px]/[40px] text-myblue">
                {'>'} Front-end developer
            </div>
            <div className="mt-[30px] text-[16px]/[25px] text-mygray">
            // complete the game to continue
            </div>
            <div className="text-[16px]/[25px] text-mygray">
            // you can also see it on my Github page
            </div>
            <div className="text-[16px]/[30px] text-myblue flex gap-2">
                <span style={{color: 'rgba(77, 91, 206, 1)'}}>
                    const
                </span>
                <span style={{color: 'rgba(67, 217, 173, 1)'}}>
                    githubLink
                </span>
                <span className="text-mywhite">
                    =
                </span>
                <span style={{color: 'rgba(233, 146, 135, 1)'}}>
                    “https://github.com/example/url”
                </span>
            </div>
        </div>
        <div className="hidden lg:block">
            {/* <PlayPage /> */}
            <Image src={'/ss.png'} alt="" width={500} height={500} />
        </div>
    </div>
}
export default HelloPage