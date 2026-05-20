'use client';
import React from 'react';
import pin from "@/assets/images/Dashboard/pin.png";
import icon from "@/assets/images/Dashboard/icon.png";

import Image from 'next/image';


interface DashboardCardsProps {
  cards: string[];
}

export default function DashboardCards({ cards }: DashboardCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((title, idx) => (
        <div key={idx} className="bg-white rounded-[12px] shadow  flex flex-col">
          <div className='flex gap-[9px]'>
            <div className='mr-[19px] flex justify-center w-[50px] h-[60px] bg-[#ECECEC] rounded-b-[12px]'>
              <Image
                src={pin}
                alt={"page.name"}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <div className='flex flex-col '>
              <p className="text-lg mt-4">5</p>
              <h3 className="text-sm font-semibold">{title}</h3>
            </div>
          </div>

          <div className='w-[85%] flex items-center justify-center mx-[19px] my-[16px] border border-dashed border-[#88888842]'></div>
          <div className='flex justify-between my-[15px]'>
            <button className="text-xs mr-[19px] text-gray-500 self-start">مشاهده</button>
            <div className='w-[62px] h-[17px]'>
              <Image
                src={icon}
                alt={"page.name"}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
