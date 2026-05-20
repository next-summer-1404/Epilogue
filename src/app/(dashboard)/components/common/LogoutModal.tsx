"use client";

import React from "react";

interface ConfirmLogoutModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function ConfirmLogoutModal({
    open,
    onClose,
    onConfirm,
}: ConfirmLogoutModalProps) {
    if (!open) return null;

    const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-start justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-lg mt-[33px] p-[53px] flex flex-col items-center gap-6 w-[540px] h-auto"
                onClick={handleInnerClick}
            >

                <div className="p-10  bg-gray-300 rounded-lg mb-[53px]"
                ></div>

                <p className="text-center text-[16px]  font-bold pb-[40px]">
                    آیا از خروج خود مطمئن هستید؟
                </p>

                <div className="flex  mt-auto">
                    <button
                        onClick={onClose}
                        className="px-4 py-2  rounded-lg text-gray-700 cursor-pointer"
                    >
                        انصراف
                    </button>

                    <button
                        onClick={onConfirm}
                        className="w-[87px] h-[40px] bg-[#F79000] text-white cursor-pointer rounded-[12px]"
                    >
                        خروج
                    </button>
                </div>
            </div>
        </div>
    );
}
