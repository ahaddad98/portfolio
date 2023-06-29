import React from "react";
import CardProject from "./CardProject";

const Projects = () => {
    return <div className="flex items-center justify-center w-full flex-wrap gap-4 overflow-y-auto max-h-[720px] p-4">
        <CardProject />
        <CardProject />
    </div>
}
export default Projects