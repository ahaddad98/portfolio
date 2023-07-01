import React from "react";
import SideBar from "./sidebar";
'use-client'
const ContactMe = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <div className=" flex flex-col xl:flex-row flex-1 overflow-auto" style={{maxHeight: 'calc(100% - 100px)'}}>
        <SideBar />
        {children}
    </div>
}
export default ContactMe