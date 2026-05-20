'use client';
import { Input } from '@heroui/react';
import React from 'react';

interface Reservation {
  courseId: number;
  termName: string;
  fullName: string;
  lastUpdate: string;
  levelName: string;
  tumbImageAddress: string;
}

interface RecentReservationsTableProps {
  reservations: Reservation[];
}

export default function RecentReservationsTable({ reservations }: RecentReservationsTableProps) {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
      {/* Header و فیلتر */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-[19px]'>
        <p className="text-sm font-medium"> لیست رزرو  های شما</p>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[19px] w-full sm:w-auto'>
          <div className="relative w-full sm:w-[250px] lg:w-[397px]">
            <p className="absolute -top-2 right-2 bg-white z-10 px-2 text-xs text-[#AAAAAA]">
              جستجو :
            </p>
            <Input
              className="h-[50px] border py-[10px] border-gray-400 rounded-[14px] text-[#AAAAAA] w-full"
              placeholder="نام هتل مورد نظر ..."
            />
          </div>

          <button className='w-full sm:w-[86px] h-[50px] bg-[#8CFF45] rounded-[14px] flex items-center justify-center text-sm font-medium'>
            فیلترها
          </button>
        </div>
      </div>

      <div className='w-full my-[19px] border border-dashed border-[#88888842]'></div>

      {/* جدول */}
      <div className="overflow-y-auto">
        {/* Header */}
        <div className="hidden sm:flex bg-[#F1F1F1] text-[#707070] rounded-[16px] gap-[30px] p-3 text-sm font-yekan-600 whitespace-nowrap min-w-[600px]">
          <p className="w-[10%]"></p>
          <p className="w-[19%]">نام اقامتگاه</p>
          <p className="w-[19%]">تاریخ رزرو</p>
          <p className="w-[19%]">قیمت کل</p>
          <p className="w-[19%]">تعداد مسافر</p>  
                  <p className="w-[19%]">وضعیت رزرو</p>
          <p className="w-[19%]">وضعیت پرداخت</p>
        </div>

        {/* Rows */}
        <div className="overflow-x-auto max-h-[400px] flex flex-col sm:block gap-4">
          {reservations.length === 0 ? (
            <p className="flex items-center justify-center py-16">No courses found</p>
          ) : (
            reservations.map((item) => (
              <div
                key={item.courseId}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[30px] py-[22px] text-sm text-black whitespace-nowrap border-b border-dashed border-[#88888842] last:border-none"
              >
                <img
                  src={item.tumbImageAddress || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cNMHJHD_Va2Kzvp38Arpv6Kyyi2Nfiw4g&s"}
                  className="min-w-[83px] h-[52px] rounded-[12px] object-cover flex-shrink-0"
                  alt={item.termName}
                />
                <div className="w-full sm:w-[37%] font-yekan-600 truncate">{item.termName}</div>
                <div className="w-full sm:w-[45%] font-yekan-600 truncate">{item.fullName}</div>
                <div className="w-full sm:w-[35%] font-yekan-600 truncate">{item.lastUpdate}</div>
                <div className="w-full sm:w-[20%] px-2 py-1 flex items-center justify-center bg-[#8CFF45] rounded-3xl text-black text-[14px] flex-shrink-0">
                  {item.levelName}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
