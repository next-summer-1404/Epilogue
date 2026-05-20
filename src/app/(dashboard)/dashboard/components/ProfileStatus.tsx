'use client';
import React from 'react';

export default function ProfileStatus() {
  return (
    <div className="bg-white p-4 px-5 rounded-[12px] shadow flex flex-col min-w-0">
      <div className='flex justify-between mb-2'>
        <h3 className="text-[20px]">وضعیت پروفایل شما</h3>
        <div className='flex items-center gap-4'>
          <p className='text-[#7A7A7A]'>ویرایش</p>
          <div className='w-[56px] h-[18px] bg-[#7A7A7A40]'></div>
        </div>
      </div>
      <div className='w-full mb-5 border border-dashed border-[#88888842]'></div>
      <div className='flex flex-col lg:flex-row justify-between gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='text-[36px]'>40%</p>
          <p className="max-w-full lg:max-w-[310px] text-sm">
            برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪ تکمیل شده باشد.
          </p>
        </div>
        <div className="w-full lg:w-[125px] h-[125px] bg-gray-200 flex-shrink-0"></div>
      </div>
    </div>
  );
}
