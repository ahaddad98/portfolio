'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState, useContext } from "react";

const MyContext = React.createContext({}) as any;


export function useMyContext() {
    return useContext(MyContext);
}

export function MyProvider({ children }: any) {
    const [toSearch, setToSearch] = useState(['react', 'next'])
    const [data, setData] = useState<any>([])
    const AllProjectList = [
        {
            linkto: 'https://github.com/ahaddad98/portfolio',
            title: 'portfolio',
            image: '/imageproj.png',
            target: ['next']
        },
        {
            linkto: 'https://github.com/ahaddad98/Mobile-Piscine',
            title: 'Mobile-Pool',
            image: '/imageproj.png',
            target: ['flutter']
        },
        {
            linkto: 'https://github.com/ahaddad98/matcha-backend',
            title: 'Matcha- Dating app',
            image: '/imageproj.png',
            target: ['react', 'express']
        },
        {
            linkto: 'https://github.com/ahaddad98/Movies-App',
            title: 'Movies-app',
            image: '/imageproj.png',
            target: ['flutter']
        },
        {
            linkto: 'https://github.com/ahaddad98/swifty_companion',
            title: 'Swifty-Companion',
            image: '/imageproj.png',
            target: ['flutter']
        },
        {
            linkto: 'https://github.com/ahaddad98/List-Images-from-Unsplash',
            title: 'List Images from unsplash',
            image: '/imageproj.png',
            target: ['next']
        },
        {
            linkto: 'https://github.com/ahaddad98/flutter-notes-app',
            title: 'notes app',
            image: '/imageproj.png',
            target: ['flutter']
        },
        {
            linkto: 'https://github.com/ahaddad98/booking-app',
            title: 'booking app',
            image: '/imageproj.png',
            target: ['react', 'express']
        },
        {
            linkto: 'https://github.com/ahaddad98/ft_transcendence',
            title: 'ping pong game',
            image: '/imageproj.png',
            target: ['react', 'nest']
        },
        {
            linkto: 'https://github.com/ahaddad98/World-app-with-reactjs',
            title: 'World App',
            image: '/imageproj.png',
            target: ['react']
        },
        {
            linkto: 'https://github.com/ahaddad98/42-Auhtentication-with-nestjs-and-insert-in-database',
            title: '42 auth',
            image: '/imageproj.png',
            target: ['nest']
        },
        {
            linkto: 'https://github.com/ahaddad98/Inception_42',
            title: 'Inception',
            image: '/imageproj.png',
            target: ['docker']
        },
        {
            linkto: 'https://github.com/ahaddad98/ft_containers_42',
            title: 'ft_containers',
            image: '/imageproj.png',
            target: ['cpp']
        },
        {
            linkto: 'https://github.com/ahaddad98/WebServer_42',
            title: 'Web-Server',
            image: '/imageproj.png',
            target: ['cpp']
        },
        {
            linkto: 'https://github.com/ahaddad98/cub3D',
            title: 'Wolf 3d',
            image: '/imageproj.png',
            target: ['c']
        },
        {
            linkto: 'https://github.com/ahaddad98/push_swap',
            title: 'push_swap',
            image: '/imageproj.png',
            target: ['c']
        },
        {
            linkto: 'https://github.com/ahaddad98/philosophers_42',
            title: 'Dinner of philosophers',
            image: '/imageproj.png',
            target: ['c']
        },
        {
            linkto: 'https://github.com/ahaddad98/minnishell',
            title: 'Minishell',
            image: '/imageproj.png',
            target: ['c']
        },
    ]
    function searchProjects() {
        const foundProjects = [];
        for (let i = 0; i < AllProjectList.length; i++) {
            const project = AllProjectList[i];
            const target = project.target;

            for (let j = 0; j < target.length; j++) {
                if (toSearch.includes(target[j])) {
                    foundProjects.push(project);
                    break;
                }
            }
        }
        setData(foundProjects);
        return foundProjects;
    }
    return (
        <MyContext.Provider value={{ data, setData, toSearch, setToSearch, searchProjects }}>
            {children}
        </MyContext.Provider>
    );
}