import React, { ReactNode } from "react";
import Navbar from "../lib/components/navbar/navbar";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <>
        <Navbar></Navbar>
        <main className="m-5">
            {children}
        </main>
        </>
    )
}