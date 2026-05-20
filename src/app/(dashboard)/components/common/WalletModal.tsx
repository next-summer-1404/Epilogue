"use client";

import { useState } from "react";

interface WalletModalProps {
  onClose: () => void;
}

export default function WalletModal({ onClose }: WalletModalProps) {
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <div
      className="
        absolute 
        left-[45px]
        top-2
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
      {/* شارژ کیف پول */}
      <div className="flex gap-2 items-center mx-[10px] cursor-pointer">
        <div className="p-3 bg-[#D9D9D9] rounded"></div>
        <p className="text-[14px] text-nowrap">شارژ کردن کیف پول</p>
      </div>

      <div className="border-b border-[#88888840] px-[10px]"></div>

      {/* تنظیمات نوتیفیکیشن */}
      <div className="flex gap-2 items-center mx-[10px] cursor-pointer">
        <div className="p-3 bg-[#D9D9D9] rounded"></div>
        <p className="text-[14px] text-nowrap">لیست تراکنش ها</p>
      </div>

      <div className="border-b border-[#88888840] px-[10px]"></div>

      {/* خروج */}
      <div
        className="flex gap-2 items-center px-[10px] cursor-pointer"
        onClick={() => setLogoutOpen(true)}
      >
        <div className="p-3 bg-[#D9D9D9] rounded"></div>
        <p className="text-[14px] text-nowrap">برداشت وجه</p>
      </div>


    </div>
  );
}
