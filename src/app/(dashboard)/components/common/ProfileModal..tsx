"use client";

import { useState } from "react";
import ConfirmLogoutModal from "./LogoutModal";

interface ProfileModalProps {
    onClose: () => void;
}

export default function ProfileModal({ onClose }: ProfileModalProps) {
    const [logoutOpen, setLogoutOpen] = useState(false);

    return (
        <div
            className="
        absolute 
        left-0 
        top-[50px]
        bg-white 
        shadow-lg 
        rounded-lg 
        p-4 
        z-50 
        flex 
        flex-col 
        gap-3
        w-[188px]
        h-auto
        "
        >
            {/* پروفایل */}
            <div className="flex gap-2 items-center pb-2 mb-1 border-b border-[#88888840] px-[10px]">
                <div className="p-4 rounded-[8px] bg-[#D9D9D9]"></div>
                <div className="flex flex-col leading-tight">
                    <p className="text-[14px] text-nowrap">سبحان عرب خزائلی</p>
                    <p className="text-[12px] text-[#888888]">+989123456789</p>
                </div>
            </div>

            {/* شارژ کیف پول */}
            <div className="flex gap-2 items-center mx-[10px] cursor-pointer">
                <div className="p-3 bg-[#D9D9D9] rounded"></div>
                <p className="text-[14px] text-nowrap">شارژ کردن کیف پول</p>
            </div>

            <div className="border-b border-[#88888840] px-[10px]"></div>

            {/* تنظیمات نوتیف */}
            <div className="flex gap-2 items-center mx-[10px] cursor-pointer">
                <div className="p-3 bg-[#D9D9D9] rounded"></div>
                <p className="text-[14px] text-nowrap">تنظیمات نوتیفیکیشن</p>
            </div>

            <div className="border-b border-[#88888840] px-[10px]"></div>

            {/* خروج */}
            <div className="flex gap-2 items-center px-[10px] " onClick={() => setLogoutOpen(true)}
            >
                <div className="p-3 bg-[#D9D9D9] cursor-pointer rounded"></div>
                <p className="text-[14px] text-nowrap">خروج</p>
                {logoutOpen && (
                    <ConfirmLogoutModal
                        open={logoutOpen}
                        onClose={() => setLogoutOpen(false)}
                        onConfirm={() => {
                            setLogoutOpen(false);
                            console.log("خروج شد!");
                        }}
                    />
                )}
            </div>
        </div>

    );
}
