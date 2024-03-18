"use client"

import { useRouter } from "next/navigation";
import { FaDatabase } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";

export default function Navbar(){

    const router = useRouter()

    return(
        <>
        <div className="w-full flex flex-row justify-between p-5">
            <div className="flex flex-row cursor-pointer items-center gap-1" onClick={() => router.push('/dashboard')}>
                <FaDatabase/>
                <h1 className="text-md md:text-lg lg:text-xl font-semibold">Pic_safe</h1>
            </div>
            <div className=" flex flex-row items-center gap-4">
                <div className="cursor-pointer" onClick={() => router.push('/dashboard/upload')}>
                    <p>Upload</p>
                </div>
                <div className="cursor-pointer" onClick={() => router.push('/login')}>
                    <p>Login</p>
                </div>
                <div className="cursor-pointer" onClick={() => router.push('/logout')}>
                    <IoMdLogOut color="red"/>
                </div>
            </div>
        </div>
        <hr className="divide-solid"/>
        </>
    )
}