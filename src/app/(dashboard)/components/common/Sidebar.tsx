'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

import home from "@/assets/images/Dashboard/home.png";
import user from "@/assets/images/Dashboard/user.png";
import amlak from "@/assets/images/Dashboard/amlak.png";
import add from "@/assets/images/Dashboard/add.png";
import pardakht from "@/assets/images/Dashboard/pardakht.png";
import comment from "@/assets/images/Dashboard/comment.png";
import notifFill from "@/assets/images/Dashboard/notifFill.png";
import signIn from "@/assets/images/Dashboard/signIn.png";

import WalletModal from './WalletModal'; 

interface SidebarProps {
  onSelect: (title: string) => void;
}

const pages = [
  { name: 'داشبورد', path: '/dashboard', icon: home },
  { name: 'اطلاعات کاربری', path: '/dashboard/user-info', icon: user },
  { name: 'مدیریت رزروها', path: '/dashboard/reservations', icon: add },
  { name: 'علاقمندی ها', path: '/dashboard/favourite', icon: comment },
  { name: 'پرداخت ها', path: '/dashboard/finance', icon: pardakht },
  { name: 'اعلان‌ها', path: '/dashboard/notifications', icon: notifFill },
];

export default function Sidebar({ onSelect }: SidebarProps) {
  const pathname = usePathname();
  const [walletOpen, setWalletOpen] = useState(false);
  const walletRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative top-[19px] bottom-[35px] right-[19px] w-[270px] h-fit bg-[#FFFFFF] text-[#000000] rounded-[12px] flex flex-col p-4 gap-4">
      <div className='flex justify-between items-center py-[30px]'>
        <p className='text-[32px]'>دلتا</p>
        <div className="flex justify-center w-[24px] h-[24px]">
          <Image
            src={signIn}
            alt={"page.name"}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>

      {pages.map((page) => (
        <Link
          key={page.path}
          href={page.path}
          onClick={() => onSelect(page.name)}
          className={`p-2 rounded-[8px] text-[18px] hover:bg-[#D9D9D954] ${pathname === page.path ? 'bg-[#D9D9D954]' : ''}`}
        >
          <div className='flex gap-2'>
            <div className="flex justify-center w-[28px] h-[28px]">
              <Image
                src={page.icon}
                alt={page.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            {page.name}
          </div>
        </Link>
      ))}

      {/* بخش کیف پول */}
      <div className='relative' ref={walletRef}>
        <div
          className="w-[232px] h-[80px] border border-dashed rounded-[18px] border-[#88888880] cursor-pointer"
          onClick={() => setWalletOpen(prev => !prev)}
        >
          <div className='flex gap-[11px] pr-[18px] pt-[11px] pb-[17px]'>
            <div className="flex justify-center w-[28px] h-[28px]">
              <Image
                src={comment}
                alt={"page.name"}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <div className='flex flex-col gap-[7px]'>
              <p className='text-[20px]'>کیف پول</p>
              <p className='text-[#888888]'>عدم موجودی</p>
            </div>
          </div>
        </div>

        {/* مودال کیف پول زیر باکس */}
        {walletOpen && (
          <div className="absolute top-full left-0  z-50">
            <WalletModal onClose={() => setWalletOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
