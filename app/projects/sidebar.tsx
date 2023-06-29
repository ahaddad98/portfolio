import Link from "next/link";
import React from "react";

const items = [<div className="form-control">
    <label className="label cursor-pointer flex gap-4">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">React</span>
    </label>
</div>,
<div className="form-control">
    <label className="label cursor-pointer flex gap-4">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">Next</span>
    </label>
</div>,
<div className="form-control">
    <label className="label cursor-pointer flex gap-4">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">Flutter</span>
    </label>
</div>,
<div className="form-control">
    <label className="label cursor-pointer flex gap-4">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">React-Native</span>
    </label>
</div>,
<div className="form-control">
    <label className="label cursor-pointer flex gap-4">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">three-Js</span>
    </label>
</div>,
<div className="form-control">
    <label className="label cursor-pointer flex gap-4">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">Docker/Compose</span>
    </label>
</div>,
<div className="form-control">
    <label className="label cursor-pointer flex gap-4">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">Express</span>
    </label>
</div>,
]

const SideBar = () => {
    return <React.Fragment>
        <div h-full>
            <ul className="h-full menu bg-base-200 w-56 rounded-box bg-transparent p-0">
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