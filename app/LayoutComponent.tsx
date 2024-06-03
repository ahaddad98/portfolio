import Link from "next/link";
import React, { useState } from "react";
import { Inter } from 'next/font/google'
import { useMyGlobalContext } from "./ContextGlobalProvider";
const inter = Inter({ subsets: ['latin'] })

const LayoutComponent = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [tabName, setTabName] = useState('hello')
    let { theme, setTheme }: any = useMyGlobalContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return <html lang="en" data-theme={theme ? 'dark' : 'light'}>
        <body className={inter.className}>
            <main className={`h-full flex flex-col justify-between relative ${theme ? 'bg-cardbg' : 'bg-mywhite'} overflow-y-auto	`}
                style={{
                    //  background: '#011627',
                    border: '1px solid #1E2D3D', borderRadius: '8px', maxHeight: 'calc(100%)'
                }}
            >
                <div className='lg:hidden absolute w-full flex flex-col z-50'>
                    <div className={`menu-button w-full flex items-center justify-between px-4 rounded-lg ${theme ? 'bg-cardbg' : 'bg-mywhite'}`}>
                        <div className={`tab h-[50px]  ${tabName === 'me' ? 'tab-active  tab-bordered  border-myorange' : ''} `}>amine-haddad</div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="tabs p-2" >
                                <label className="swap swap-rotate">
                                    <input type="checkbox" />
                                    <svg onClick={() => setTheme(!theme)} className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                    <svg onClick={() => setTheme(!theme)} className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                </label>
                            </div>
                            <label className="btn btn-circle swap swap-rotate bg-transparent border-none">
                                <input type="checkbox" onChange={toggleMenu} />
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                            </label>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden absolute w-full h-full flex flex-col z-20 pt-12">
                        <div className={`w-full menu flex flex-1 flex-col  ${theme ? 'bg-cardbg' : 'bg-mywhite'} items-center justify-center gap-3`}>
                            <div className={`menu-item ${tabName === 'hello' ? 'active' : ''}`}>
                                <Link href={'/hello'} onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setTabName('hello')
                                }}>
                                    _hello
                                </Link>
                            </div>
                            <div className="divider lg:divider-horizontal m-0"></div>

                            <div className={`menu-item ${tabName === 'about' ? 'active' : ''}`}>
                                <Link href={'/aboutme'} onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setTabName('about')

                                }
                                }>
                                    _about-me
                                </Link>
                            </div>
                            <div className="divider lg:divider-horizontal m-0"></div>
                            <div
                                className={`menu-item ${tabName === 'projects' ? 'active' : ''}`}
                            >
                                <Link href={'/projects'} onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setTabName('projects')
                                }}>
                                    _projects
                                </Link>
                            </div>
                            <div className="divider lg:divider-horizontal m-0"></div>
                            <div className={`menu-item ${tabName === 'contact' ? 'active' : ''}`}>
                                <Link href={'/contactme'} onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setTabName('contact')
                                }}>
                                    _contact-me
                                </Link>
                            </div>
                            <div className="divider lg:divider-horizontal m-0"></div>
                        </div>
                    </div>
                )}
                <div className='hidden lg:flex w-full items-center justify-between tab-bordered'>
                    <div className="tabs  flex" >
                        <Link href={'/hello'} className={`ms-3 tab h-[50px]  ${tabName === 'hello' ? 'tab-active tab-bordered border-myorange' : ''} `} onClick={() => setTabName('hello')}>_hello</Link>
                        <div className="divider lg:divider-horizontal"></div>
                        <Link href={'/aboutme'} className={`tab h-[50px]  ${tabName === 'about' ? 'tab-active tab-bordered border-myorange' : ''} `} onClick={() => setTabName('about')}>_about-me</Link>
                        <div className="divider lg:divider-horizontal"></div>
                        <Link href={'/projects'} className={`tab h-[50px]  ${tabName === 'projects' ? 'tab-active tab-bordered border-myorange' : ''} `} onClick={() => setTabName('projects')}>_projects</Link>
                        <div className="divider lg:divider-horizontal"></div>
                        <Link href={'/contactme'} className={`tab h-[50px] ${tabName === 'contact' ? 'tab-active tab-bordered border-myorange' : ''} `} onClick={() => setTabName('contact')}>_contact-me</Link>
                        <div className="divider lg:divider-horizontal"></div>
                    </div>
                    <div className="tabs p-2" >
                        <label className="swap swap-rotate">
                            <input type="checkbox" />
                            <svg onClick={() => setTheme(!theme)} className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg onClick={() => setTheme(!theme)} className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
                {children}
                <div className='bottom-0 flex w-full items-center justify-between border-t-[1px] border-t-bordercolor'>
                    <div className="tabs devide-x-[2px]" >
                        <Link href={'/'} className={`tab h-[50px]  ${tabName === 'findme' ? 'tab-active tab-bordered border-myorange' : ''} `} onClick={() => setTabName('findme')}>find me in:</Link>
                        <div className="divider lg:divider-horizontal"></div>
                        <Link href={'/'} className={`tab h-[50px]  ${tabName === 'gmail' ? 'tab-active tab-bordered border-myorange' : ''} `} onClick={() => window.open('/haddad-amine-resume.pdf')}>Resume</Link>
                        <div className="divider lg:divider-horizontal"></div>
                    </div>
                    <div className="tabs" >
                        <div className="divider lg:divider-horizontal"></div>
                        <Link href={'/'} className={`tab h-[50px]  ${tabName === 'ahaddad' ? 'tab-active tab-bordered border-myorange' : ''} `} onClick={() => setTabName('ahaddad')}>@ahaddad</Link>
                    </div>
                </div>
            </main>
        </body>
    </html>
}
export default LayoutComponent