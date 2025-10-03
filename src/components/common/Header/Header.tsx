"use client";

import { useState } from "react";
import ArrowDown01Icon from "../icons/arrow-down-01-stroke-rounded";
import Megaphone03Icon from "../icons/megaphone-03-stroke-rounded";
import UserIcon from "../icons/user-stroke-rounded";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#363636] px-[6px] text-[#FFFFFF] shadow-[2px] rounded-2xl">
            <div className="max-w-7xl">
                <div className="flex justify-between items-center h-12">

                    <button className="bg-[#4A4A4A] w-[92px] h-[36px] px-4 py-2 rounded-[12px]">
                    </button>

                    <nav className="hidden md:flex space-x-[40px] text-nowrap text-[#AAAAAA] items-center">

                        <div className="flex items-center gap-1">
                            <a href="#" className="text-[#8CFF45]">رزرو سریع</a>
                            <ArrowDown01Icon />
                        </div>

                        <div className="flex items-center gap-1 ">
                            <button className="hover:text-[#8CFF45]">رهن و اجاره</button>
                            <ArrowDown01Icon color={"#AAAAAA"} />
                        </div>

                        <a href="#" className="hover:text-[#8CFF45]">تماس با ما</a>
                        <a href="#" className="hover:text-[#8CFF45]">مقالات ما</a>
                        <a href="#" className="hover:text-[#8CFF45]">درباره دلتا</a>

                        <div className="px-10">
                            <button className="bg-[#7569FF] flex items-center justify-center gap-1 text-[#FFFFFF] w-[138px] h-[36px] rounded-[12px] text-[16px]">
                                <Megaphone03Icon width={'20'} height={'20'} />
                                فروشنده شو!
                            </button>
                        </div>
                    </nav>

                    <div className="hidden md:flex px-6 flex-1 justify-end items-center ">
                        <button className="flex gap-2 text-[16px]">
                            <UserIcon width={'20'} height={'20'} />
                            ورود / ثبت نام
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none ml-2"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-[#363636] px-4 pt-2 pb-4 space-y-2 text-right mt-2 rounded-b-2xl">
                        <div className="flex items-center gap-1">
                            <a href="#" className="text-[#8CFF45]">رزرو سریع</a>
                            <ArrowDown01Icon />
                        </div>

                        <div className="flex items-center gap-1">
                            <button className="hover:text-[#8CFF45]">رهن و اجاره</button>
                            <ArrowDown01Icon color={"#AAAAAA"} />
                        </div>
                        <div className="flex items-center gap-1 ">

                            <a href="#" className="hover:text-[#8CFF45]">تماس با ما</a>
                        </div>
                        <div className="flex items-center gap-1 ">

                            <a href="#" className="hover:text-[#8CFF45]">مقالات ما</a>
                        </div>
                        <div className="flex items-center gap-1 ">

                            <a href="#" className="hover:text-[#8CFF45]">درباره دلتا</a>
                        </div>

                        <button className="w-full bg-[#7569FF] flex items-center justify-center gap-1 text-[#FFFFFF] px-4 py-2 rounded-[12px]">
                            <Megaphone03Icon width={'20'} height={'20'} />
                            فروشنده شو!
                        </button>

                        <button className="w-full flex items-center justify-center gap-2  px-4 py-2 rounded text-[16px]">
                            <UserIcon width={'20'} height={'20'} />
                            ورود / ثبت نام
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
