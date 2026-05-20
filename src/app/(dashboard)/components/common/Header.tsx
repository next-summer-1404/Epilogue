'use client';
import Image from "next/image";

import icon from "@/assets/images/Dashboard/icon.png";
import moon from "@/assets/images/Dashboard/moon.png";
import sun from "@/assets/images/Dashboard/sun.png";
import notif from "@/assets/images/Dashboard/notif.png";
import { useState } from "react";
import ProfileModal from "./ProfileModal.";
import NotificationModal from "./NotificationModal";


interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);


  return (
    <div
      className="
         absolute 
        top-[19px] 
        right-[309px] 
        left-[19px] 
        h-[66px] 
        bg-[#FFFFFF] 
        text-[#000000] 
        flex justify-between items-center 
        px-4 
        rounded-lg 
        max-w-full 
      "
    >
      <div className="flex items-center gap-[17px]">
        <h1 className="text-[clamp(16px,1.8vw,20px)] font-bold truncate">{title}</h1>
        <div className="w-[48px] flex justify-center h-[16px]">
          <Image
            src={icon}
            alt={"page.name"}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex gap-[clamp(8px,1.5vw,16px)] items-center">
        {/* mode & notification */}
        <div className="flex gap-[15.5px] items-center">
          <div className="w-[70px] h-[30px] rounded-[100px] flex items-center justify-between px-[3px] bg-[#D9D9D9] flex-shrink-0">
            <div className="w-[24px] h-[24px]">
              <Image
                src={moon}
                alt={"page.name"}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-[#8CFF45]">
              <Image
                src={sun}
                alt={"page.name"}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
          <p className="hidden sm:block text-[#9C9C9C]">|</p>
          <div className="w-[20px] h-[20px] flex-shrink-0"  onClick={() => setOpenNotif(true)}>
            <Image
              src={notif}
              alt={"page.name"}
              width={24}
              height={24}
              className="object-contain"
            />
            {openNotif && (
  <>
    <div
      className="fixed inset-0 z-40"
      onClick={() => setOpenNotif(false)}
    />
    <NotificationModal open={openNotif} onClose={() => setOpenNotif(false)} />
  </>
)}

          </div>
        </div>

        {/* profile */}
        <div className="relative">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setOpenProfile(prev => !prev)}
          >
            <div className="w-[37px] h-[37px] rounded-[8px] bg-[#D9D9D9]"></div>
            <div className="hidden sm:flex flex-col leading-tight">
              <p className="text-[clamp(12px,1.4vw,14px)]">سبحان عرب خزائلی</p>
              <p className="text-[clamp(10px,1.2vw,12px)] text-[#888888]">فروشنده</p>
            </div>
          </div>

          {openProfile && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpenProfile(false)}
              />

              <ProfileModal onClose={() => setOpenProfile(false)} />
            </>
          )}
        </div>

      </div>
    </div>
  );
}
