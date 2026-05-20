'use client';
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
      <div className="overflow-auto">
        {/* Header */}
        <div className="bg-[#F1F1F1] text-[#707070] rounded-[16px] gap-[30px] p-3 flex text-sm font-yekan-600 whitespace-nowrap">
          <p className="w-[10%]"></p>
          <p className="w-[19%]">نام اقامتگاه</p>
          <p className="w-[19%]">تاریخ رزرو</p>
          <p className="w-[19%]">قیمت</p>
          <p className="w-[19%]">وضعیت</p>
        </div>

        {/* Rows */}
        <div className="overflow-y-auto max-h-[400px]">
          {reservations.length === 0 ? (
            <p className="flex items-center justify-center py-16">No courses found</p>
          ) : (
            reservations.map((item) => (
              <div
                key={item.courseId}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[30px] py-[22px] text-sm text-black whitespace-nowrap"
              >
                <img
                  src={item.tumbImageAddress || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cNMHJHD_Va2Kzvp38Arpv6Kyyi2Nfiw4g&s"}
                  className="min-w-[83px] h-[52px] rounded-[12px] object-cover"
                  alt={item.termName}
                />
                <div className="w-full sm:w-[37%] font-yekan-600">{item.termName}</div>
                <div className="w-full sm:w-[45%] font-yekan-600">{item.fullName}</div>
                <div className="w-full sm:w-[35%] font-yekan-600">{item.lastUpdate}</div>
                <div className="w-full sm:w-[20%] px-2 py-1 flex items-center justify-center bg-[#8CFF45] rounded-3xl text-black text-[14px]">
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
