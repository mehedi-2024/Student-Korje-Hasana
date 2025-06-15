import React, { useState } from 'react'
import viteLogo from '/public/vite.svg'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Nav = () => {

    const [isOpenNav, setIsOpenNav] = useState(false)
    return (
        <div className="sticky z-50 bg-white top-0">
            <div className='flex justify-between h-[60px] sm:h-[70px] px-5 shadow-md items-center relative'>
                <div>
                    <img src={viteLogo} className='' alt="" />
                </div>

                <div>
                    <div onClick={
                        () => setIsOpenNav(!isOpenNav)
                    }
                        className='cursor-pointer active:scale-70 duration-200'>
                        {
                            isOpenNav ? <FaTimes size={27} /> : <FaBars size={27} />
                        }
                    </div>

                    <ul className={`top-[60px] sm:top-[70px] z-20 text-sm bg-[#000000] text-white w-[60vw] min-h-[70vh] px-4 py-4 rounded-bl-md text-center duration-500 ${isOpenNav ? 'right-0 absolute' : '-right-[70vw] fixed'}`}>
                        <li className='w-full py-3 hover:bg-[#1d1d1d] active:scale-95 cursor-pointer rounded'>হোম</li>
                        <li className='w-full py-3 hover:bg-[#1d1d1d] active:scale-95 cursor-pointer rounded'>গ্যালারি</li>
                        <li className='w-full py-3 hover:bg-[#1d1d1d] active:scale-95 cursor-pointer rounded'>ডোনেট করুন</li>
                        <li className='w-full py-3 hover:bg-[#1d1d1d] active:scale-95 cursor-pointer rounded'>আমাদের সম্পর্কে</li>
                        <li className='w-full py-3 hover:bg-[#1d1d1d] active:scale-95 cursor-pointer rounded'>যোগাযোগ</li>
                        <li className='w-full py-3 hover:bg-[#1d1d1d] active:scale-95 cursor-pointer rounded'>একাউন্ট তৈরি করুন</li>
                    </ul>
                    <div onClick={
                        () => setIsOpenNav(!isOpenNav)
                    } className={`absolute top-[60px] sm:top-[70px] left-0 w-full h-screen bg-black/50 z-10 ${!isOpenNav && 'hidden'}`}/>
                </div>
            </div>
        </div>
    )
}

export default Nav