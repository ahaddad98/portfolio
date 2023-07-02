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
        }
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