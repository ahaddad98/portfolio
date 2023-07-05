'use client'
import Link from "next/link";
import React from "react";

const SideBar = () => {
    return <React.Fragment>
        <div h-full>
            <ul className="mt-14 m-2 lg:mt-0 lg:m-0 xl:h-full menu bg-base-200 w-full  xl:w-56 rounded-box bg-transparent p-0">
                <li className="">
                    <details open>
                        <summary>Contact</summary>
                        <ul>
                            <li className=""><div>amine.haddadd@gmail.com</div></li>
                            <li className=""><div>+212629153814</div></li>
                        </ul>
                    </details>
                </li>
                <li className="">
                    <details open>
                        <summary>find-me-also-in</summary>
                        <ul>
                            <li className="" onClick={() => window.open('https://www.linkedin.com/in/amine-haddad-/')}><div>Linkedin</div></li>
                            <li className="" onClick={() => window.open('https://github.com/ahaddad98')}><div>Github</div></li>
                            {/* <li className=""><div>Telegram</div></li> */}
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1"></div>
    </React.Fragment>
}
export default SideBar