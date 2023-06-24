import React from "react";
import SideBar from "./sidebar";
'use-client'
const AboutMe = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <div className="flex flex-1">
        <SideBar />
        {children}
    </div>
}
export default AboutMe