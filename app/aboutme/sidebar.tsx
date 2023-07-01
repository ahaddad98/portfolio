import Link from "next/link";
import React from "react";

const SideBar = () => {
    return <React.Fragment>
        <div h-full>
            <div className="h-9 flex items-center pl-3"><Link href={''}>personal-info</Link></div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0"></div>
            <ul className="h-full menu bg-base-200 w-full xl:w-56 rounded-box bg-transparent p-0">
                <li className=""><Link href={'/aboutme/bio'}>bio</Link></li>
                <li className="">
                    <details >
                        <summary>education</summary>
                        <ul>
                            <li className=""><Link href={'/aboutme/high-school'}>high-school</Link></li>
                            <li className=""><Link href={'/aboutme/university'}>university</Link></li>
                        </ul>
                    </details>
                </li>
                <div className="divider divider-vertical m-0 mt-0 p-0"></div>
                <li className="">
                    <details >
                        <summary>contacts</summary>
                        <ul>
                            <li className=""><Link href={''}>amine.haddadd@gmail.com</Link></li>
                            <li className=""><Link href={''}>+212629153914</Link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1" style={{maxHeight: 'calc(100%)'}}></div>
    </React.Fragment>
}
export default SideBar