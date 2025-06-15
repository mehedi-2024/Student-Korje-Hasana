import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import logo from '/public/icon.jpg'

const Nav = () => {

    const [isOpenNav, setIsOpenNav] = useState(false)
    return (
        <div className="sticky z-50 bg-white top-0">
            <div className='flex justify-between h-[60px] sm:h-[70px] px-5 lg:px-12 xl:px-16 lg:py-10 shadow-md items-center relative'>
                <div>
                    <Link to='/' className="flex items-center gap-2">
                        <img src={logo} className='w-10 lg:w-14 rounded-full cursor-pointer active:scale-95' alt="" />
                        <h3 className="font-extrabold text-sm text-center hidden lg:inline-block">স্টুডেন্ট করজে <br /> হাসানা</h3>
                    </Link>
                </div>

                <div className="md:hidden">
                    <h3 className="font-extrabold text-lg ">স্টুডেন্ট করজে হাসানা</h3>
                </div>

                {/* mobile menu  */}
                <div id='mobileNav' className=' md:hidden'>
                    <div onClick={
                        () => setIsOpenNav(!isOpenNav)
                    }
                        className='cursor-pointer active:scale-70 duration-200'>
                        {
                            isOpenNav ? <FaTimes size={27} /> : <FaBars size={27} />
                        }
                    </div>

                    <ul className={`top-[60px] sm:top-[70px] z-20 text-sm bg-green-700 text-white w-[60vw] min-h-screen px-4 py-4 rounded-bl-md text-center duration-500 space-y-1 ${isOpenNav ? 'right-0 absolute' : '-right-[70vw] fixed'}`}>
                        <li className="bg-green-800 py-5 mb-10 rounded">
                            <h3 className="text-xl font-bold mb-2">স্টুডেন্ট করজে হাসানা</h3>
                            <p className="text-xs">সুদ মুক্ত ঋণ প্রদান করায় আমাদের <br /> একমাত্র লক্ষ্য</p>

                            {/* <div className="w-[80%] border mx-auto bg-white my-5"></div> */}
                        </li>
                        <li onClick={() => setIsOpenNav(false)} className='w-full py-[10px] hover:bg-green-800 active:scale-95 cursor-pointer rounded'>
                            <NavLink to={'/'}>হোম</NavLink>
                        </li>
                        <li onClick={() => setIsOpenNav(false)} className='w-full py-[10px] hover:bg-green-800 active:scale-95 cursor-pointer rounded'>
                            <NavLink to={'/galary'}>গ্যালারি</NavLink>
                        </li>
                        <li onClick={() => setIsOpenNav(false)} className='w-full py-[10px] hover:bg-green-800 active:scale-95 cursor-pointer rounded'>
                            <NavLink to={'/donet'}>ডোনেট করুন</NavLink>
                        </li>
                        <li onClick={() => setIsOpenNav(false)} className='w-full py-[10px] hover:bg-green-800 active:scale-95 cursor-pointer rounded'>
                            <NavLink to={'/aboutUs'}>আমাদের সম্পর্কে</NavLink>
                        </li>
                        <li onClick={() => setIsOpenNav(false)} className='w-full py-[10px] hover:bg-green-800 active:scale-95 cursor-pointer rounded'>
                            <NavLink to={'/contact'}>যোগাযোগ</NavLink>
                        </li>
                        <li onClick={() => setIsOpenNav(false)} className='w-full py-[10px] hover:bg-green-800 active:scale-95 cursor-pointer rounded'>
                            <NavLink to={'/account'}>একাউন্ট তৈরি করুন</NavLink>
                        </li>
                    </ul>
                    <div onClick={
                        () => setIsOpenNav(!isOpenNav)
                    } className={`absolute top-[60px] sm:top-[70px] left-0 w-full h-screen bg-black/50 z-10 ${!isOpenNav && 'hidden'}`} />
                </div>

                {/* tablet and desktop menu  */}
                <div id='pcNav' className='hidden md:inline-block'>
                    <ul className='flex items-center gap-7 h-full'>
                        <li className="hover:underline hover:text-green-600 cursor-pointer active:scale-95">
                            <NavLink to={'/'}>হোম</NavLink>
                        </li>
                        <li className="hover:underline hover:text-green-600 cursor-pointer active:scale-95">
                            <NavLink to={'/galary'}>গ্যালারি</NavLink>
                        </li>
                        <li className="hover:underline hover:text-green-600 cursor-pointer active:scale-95">
                            <NavLink to={'/donet'}>ডোনেট করুন</NavLink>
                        </li>
                        <li className="hover:underline hover:text-green-600 cursor-pointer active:scale-95">
                            <NavLink to={'/aboutUs'}>আমাদের সম্পর্কে</NavLink>
                        </li>
                        <li className="hover:underline hover:text-green-600 cursor-pointer active:scale-95">
                            <NavLink to={'/contact'}>যোগাযোগ</NavLink>
                        </li>
                        <li className="hover:underline hover:text-green-600 cursor-pointer active:scale-95">
                            <NavLink to={'/account'}>একাউন্ট তৈরি করুন</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav