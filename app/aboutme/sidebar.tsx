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
                            <li className=""><Link href={'/aboutme/1337school'}>1337 School</Link></li>
                            <li className=""><Link href={'/aboutme/high-school'}>high-school</Link></li>
                            <li className=""><Link href={'/aboutme/university'}>university</Link></li>
                        </ul>
                    </details>
                </li>
                <div className="divider divider-vertical m-0 mt-0 p-0"></div>
                <li className="">
                    <details >
                        <summary>Experiences</summary>
                        <ul>
                            <li className=""><Link href={'/aboutme/aba-tech'}>Aba-technology</Link></li>
                            <li className=""><Link href={'/aboutme/itss-paris'}>ITSS Paris</Link></li>
                            <li className=""><Link href={'/aboutme/app-looker'}>APP Looker</Link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1" style={{maxHeight: 'calc(100%)'}}></div>
    </React.Fragment>
}
export default SideBar