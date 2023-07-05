import React from "react";
import SideBar from "./sidebar";
const AboutMe = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <div className=" flex flex-col xl:flex-row flex-1 overflow-auto xl:overflow-hidden" style={{maxHeight: 'calc(100% - 100px)'}}>
        <SideBar />
        {children}
    </div>
}
export default AboutMe