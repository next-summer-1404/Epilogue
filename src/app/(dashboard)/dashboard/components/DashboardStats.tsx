'use client';
import Image from 'next/image';
import creditCard from "@/assets/images/Dashboard/creditCard.png";

import React from 'react';

export default function DashboardStats() {
  return (
    <div className="bg-white p-4 px-5 rounded-[12px] shadow flex flex-col min-w-0">
      <div className=' flex '>
        <div className=' flex justify-center gap-[10px] items-center'>
          <div className='h-9'>
          <Image
            src={creditCard}
            alt={"page.name"}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

          <h3 className=" text-center flex justify-center text-[18px] mb-2">آمار درآمد ها</h3>
        </div>
      </div>
      
      <div className='w-full  mb-5 border border-dashed border-[#88888842]'></div>
      <div className='flex flex-col gap-10 pb-[43px]'>
        {["درآمد ماه جاری", "درآمد کل"].map((title, idx) => (
          <div key={idx} className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-4 h-4 rounded-full bg-[#ECECEC] hover:bg-[#8CFF45]'></div>
              <p className="text-[20px]">{title}</p>
            </div>
            <div className='flex justify-center items-center rounded-[12px] w-[219px] h-[40px] bg-[#ECECEC] hover:bg-[#8CFF45]'>
              <p className="text-[20px]">115.000.000 تومان</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
