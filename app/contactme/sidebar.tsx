import Link from "next/link";
import React from "react";

const SideBar = () => {
    return <React.Fragment>
        <div h-full>
            <ul className="h-full menu bg-base-200 w-56 rounded-box bg-transparent p-0">
                <li className="">
                    <details open>
                        <summary>education</summary>
                        <ul>
                            <li className=""><Link href={'/contactme/mailpart'}>high-school</Link></li>
                            <li className=""><Link href={'/contactme/mailpart'}>university</Link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1"></div>
    </React.Fragment>
}
export default SideBar