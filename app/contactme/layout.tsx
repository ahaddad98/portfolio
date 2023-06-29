import React from "react";
import SideBar from "./sidebar";
'use-client'
const ContactMe = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <div className="flex flex-1">
        <SideBar />
        {children}
    </div>
}
export default ContactMe