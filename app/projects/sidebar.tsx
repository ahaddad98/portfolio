'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMyContext } from "./ContextProvider";


const SideBar = () => {
    const [isreact, setIsreact] = useState(true)
    const [isnext, setIsNext] = useState(true)
    const [isflutter, setIsflutter] = useState(false)
    const [isreactnative, setIsreactnative] = useState(false)
    const [isthreejs, setIsthreejs] = useState(false)
    const [isdocker, setIsdocker] = useState(false)
    const [isexpress, setIsexpress] = useState(false)
    const [isc, setIsc] = useState(false)
    const [iscpp, setIscpp] = useState(false)
    // const [toSearch, setToSearch] = useState(['react', 'next'])
    let {toSearch, setToSearch, searchProjects}: any = useMyContext()
    function addStringToArray(str: string) {
        if (!toSearch.includes(str)) {
            setToSearch([...toSearch, str]);
        } else {
        }
    }
    function removeStringFromArray(str: string) {
        const index = toSearch.indexOf(str);
        if (index !== -1) {
            const newArray = [...toSearch];
            newArray.splice(index, 1);
            setToSearch(newArray);
        } else {
        }
    }
    const items = [<div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isreact)
                    addStringToArray('react')
                else
                    removeStringFromArray('react')
                setIsreact(!isreact)
            }
            } checked={isreact} className="checkbox" />
            <span className="label-text">React</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isnext)
                    addStringToArray('next')
                else
                    removeStringFromArray('next')
                setIsNext(!isnext)
            }} checked={isnext} className="checkbox" />
            <span className="label-text">Next</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isflutter)
                    addStringToArray('flutter')
                else
                    removeStringFromArray('flutter')
                setIsflutter(!isflutter)
            }} checked={isflutter} className="checkbox" />
            <span className="label-text">Flutter</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isreactnative)
                    addStringToArray('reactnative')
                else
                    removeStringFromArray('reactnative')
                setIsreactnative(!isreactnative)
            }
            } checked={isreactnative} className="checkbox" />
            <span className="label-text">React-Native</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isthreejs)
                    addStringToArray('threejs')
                else
                    removeStringFromArray('threejs')
                setIsthreejs(!isthreejs)
            }} checked={isthreejs} className="checkbox" />
            <span className="label-text">three-Js</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isdocker)
                    addStringToArray('docker')
                else
                    removeStringFromArray('docker')
                setIsdocker(!isdocker)
            }} checked={isdocker} className="checkbox" />
            <span className="label-text">Docker/Compose</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isexpress)
                    addStringToArray('express')
                else
                    removeStringFromArray('express')
                setIsexpress(!isexpress)
            }} checked={isexpress} className="checkbox" />
            <span className="label-text">Express</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!isc)
                    addStringToArray('c')
                else
                    removeStringFromArray('c')
                setIsc(!isc)
            }} checked={isc} className="checkbox" />
            <span className="label-text">C</span>
        </label>
    </div>,
    <div className="form-control">
        <label className="label cursor-pointer flex gap-4">
            <input type="checkbox" onChange={() => {
                if (!iscpp)
                    addStringToArray('cpp')
                else
                    removeStringFromArray('cpp')
                setIscpp(!iscpp)
            }} checked={iscpp} className="checkbox" />
            <span className="label-text">Cplusplus</span>
        </label>
    </div>,
    ]
    useEffect(() => {
        searchProjects()
    }, [toSearch])
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


// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();

// // Parse JSON request bodies
// app.use(express.json());

// // Handle POST requests to '/send-email'
// app.post('/send-email', (req, res) => {
//   // Get email data from the request body
//   const { from, to, subject, text } = req.body;

//   // Create a transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-password'
//     }
//   });

//   // Setup email data
//   const mailOptions = {
//     from: from,
//     to: to,
//     subject: subject,
//     text: text
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error occurred:', error.message);
//       res.status(500).send('An error occurred while sending the email.');
//     } else {
//       console.log('Email sent successfully!');
//       console.log('Message ID:', info.messageId);
//       res.send('Email sent successfully!');
//     }
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });