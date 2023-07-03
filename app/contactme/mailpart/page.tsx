'use client'
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const BioPage = () => {
    const [isSendSucces, setIsSendSucces] = useState(false);
    const formRef = useRef<any>();
    const sendEmail = (e: any) => {
        e.preventDefault();
        console.log(e);
        emailjs.sendForm('service_8zqmdvo', 'template_jtpb7dq', formRef.current, 'vHn-08m5ljeQ21YXL')
            .then((result) => {
                setIsSendSucces(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return <React.Fragment>
        <div className="h-full flex-1 flex flex-col">
            <div className="hidden h-[42px] w-[200px] xl:flex items-center justify-between pl-3 pr-3 border-r-2 border-r-bordercolor">
                <a>Contact me</a>
                <a>x</a>
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            {isSendSucces ? <div className="flex flex-col flex-1 xl:overflow-y-scroll p-5 text-[17px] text-mygray max-h-[660px] items-center justify-center gap-4">
                <div>
                    Thank you! 🤘
                </div>
                <div>
                    Your message has been accepted. <br />
                    You will recieve answer really soon!
                </div>
                <button className="btn btn-neutral max-w-xs" onClick={() => setIsSendSucces(false)}>send-new-message</button>
            </div> : <form ref={formRef} onSubmit={(e: any) => { sendEmail(e) }} className="flex flex-col flex-1 xl:overflow-y-scroll p-5 text-[17px] text-mygray max-h-[660px] items-center justify-center gap-4">
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <span className="label-text">_name:</span>
                    <input type="text" name="user_name" placeholder="Type here" className="input border-2 border-bordercolor bg-cardbg  w-full max-w-xs" />
                </div>
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <span className="label-text">_email:</span>
                    <input name="user_email" type="text" placeholder="Type here" className="input border-2 border-bordercolor bg-cardbg  w-full max-w-xs" />
                </div>
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <span className="label-text">_message:</span>
                    <textarea name="message" className="textarea textarea-ghost border-2 border-bordercolor bg-cardbg max-w-xs w-full" placeholder="Bio"></textarea>
                </div>
                <div className="flex flex-col gap-1 w-full max-w-xs">
                    <button type="submit" className="btn btn-neutral w-full max-w-xs">submit-message</button>
                </div>
            </form>}
        </div>
        <div className="divider divider-horizontal m-0  p-0 w-1"></div>
        <div className="hidden  h-full flex-1 xl:flex flex-col">
            <div className="h-[42px]">
            </div>
            <div className="w-full divider divider-vertical m-0 mt-0 p-0 h-1"></div>
            <div className="flex flex-1 items-center justify-center xl:overflow-y-scroll p-5 max-h-full">
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