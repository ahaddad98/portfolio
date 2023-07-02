import React from "react";
import SideBar from "./sidebar";
import { MyProvider } from "./ContextProvider";
const ContactMe = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <MyProvider>
        <div className=" flex flex-col xl:flex-row flex-1 overflow-auto" style={{ maxHeight: 'calc(100% - 100px)' }}>
            <SideBar />
            {children}
        </div>
    </MyProvider>
}
export default ContactMe