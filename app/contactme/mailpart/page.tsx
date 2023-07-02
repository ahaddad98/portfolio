import React from "react";
'use-client'
import CardSnippet from "./Card";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';


const BioPage = () => {
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col">
            <div className="hidden h-[42px] w-[200px] xl:flex items-center justify-between pl-3 pr-3 border-r-2 border-r-bordercolor">
                <a>Item 1</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <form className="flex flex-col flex-1 xl:overflow-y-scroll p-5 text-[17px] text-mygray max-h-[660px] items-center justify-center gap-4">
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <span className="label-text">_name:</span>
                    <input type="text" placeholder="Type here" className="input border-2 border-bordercolor bg-cardbg  w-full max-w-xs" />
                </div>
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <span className="label-text">_email:</span>
                    <input type="text" placeholder="Type here" className="input border-2 border-bordercolor bg-cardbg  w-full max-w-xs" />
                </div>
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <span className="label-text">_message:</span>
                    <textarea className="textarea textarea-ghost border-2 border-bordercolor bg-cardbg max-w-xs w-full" placeholder="Bio"></textarea>
                </div>
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <button className="btn btn-neutral w-full max-w-xs">Neutral</button>
                </div>
            </form>
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1"></div>
        <div className="hidden  h-full flex-1 xl:flex flex-col">
            <div className="h-[42px]">
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 xl:overflow-y-scroll p-5 max-h-full">
                <div className="text-[17px] text-mygray">
                    <code>
                        const button = document.querySelector('#sendBtn');<br />
                        <br />
                        const message = &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;name: "Jonathan Davis",<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;email: "",<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;message: "",<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;date: "Thu 21 Apr"<br />
                        &#125;<br />
                        <br />
                        button.addEventListener('click', () ={'>'} &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;form.send(message);<br />
                        &#125;);
                    </code>
                    {/* <SyntaxHighlighter language="javascript" style={vs}>
                        {codeString}
                    </SyntaxHighlighter> */}
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default BioPage