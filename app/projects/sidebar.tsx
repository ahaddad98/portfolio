'use client'
import Link from "next/link";
import React, { useState } from "react";


const SideBar = () => {
    const [isreact, setIsreact] = useState(true)
    const [isnext, setIsNext] = useState(true)
    const [isflutter, setIsflutter] = useState(true)
    const [isreactnative, setIsreactnative] = useState(false)
    const [isthreejs, setIsthreejs] = useState(false)
    const [isdocker, setIsdocker] = useState(false)
    const [isexpress, setIsexpress] = useState(false)
    const [isc, setIsc] = useState(false)
    const [iscpp, setIscpp] = useState(false)
    const items = [<div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsreact(!isreact)} checked={isreact} className="checkbox" />
            <span className="label-text">React</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsNext(!isnext)} checked={isnext} className="checkbox" />
            <span className="label-text">Next</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsflutter(!isflutter)} checked={isflutter} className="checkbox" />
            <span className="label-text">Flutter</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsreactnative(!isreactnative)} checked={isreactnative} className="checkbox" />
            <span className="label-text">React-Native</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsthreejs(!isthreejs)} checked={isthreejs} className="checkbox" />
            <span className="label-text">three-Js</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsdocker(!isdocker)} checked={isdocker} className="checkbox" />
            <span className="label-text">Docker/Compose</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsexpress(!isexpress)} checked={isexpress} className="checkbox" />
            <span className="label-text">Express</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIsc(!isc)} checked={isc} className="checkbox" />
            <span className="label-text">C</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => setIscpp(!iscpp)} checked={iscpp} className="checkbox" />
            <span className="label-text">Cplusplus</span>
        </label>
    </div>,
    ]
    return <React.Fragment>
        <div h-full>
            <ul className="mt-14 m-2 lg:mt-0 lg:m-0 xl:h-full menu bg-base-200 w-full  xl:w-56 rounded-box bg-transparent p-0">
                <li className="">
                    <details open>
                        <summary>projects</summary>
                        <ul>
                            {items.map((el: any, key: number) => {
                                return <li className="list-none" key={key}>
                                    {el}
                                </li>
                            })}
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1"></div>
    </React.Fragment>
}
export default SideBar