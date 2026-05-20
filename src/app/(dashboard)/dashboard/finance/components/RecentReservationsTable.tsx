'use client';
import { Input, Select, SelectItem } from '@heroui/react';
import React from 'react';

interface Reservation {
  courseId: number;
  termName: string;
  fullName: string;
  lastUpdate: string;
  levelName: string;
  tumbImageAddress: string;
}

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
];

interface RecentReservationsTableProps {
  reservations: Reservation[];
}

export default function RecentReservationsTable({ reservations }: RecentReservationsTableProps) {
  return (
    <div className="overflow-x-hidden bg-white p-4 rounded-lg shadow">
      {/* Header و فیلتر */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-[19px]'>
        <p className="text-[20px] font-yekan-600">
          لیست تراکنش های شما
        </p>

        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
          {/* Select 1 */}
          <div className="w-full sm:w-[223px] relative">
            <p className="absolute -top-2 right-3 bg-[#FFFFFF] z-10 px-2 text-xs text-[#AAAAAA]">
              وضعیت پرداخت :
            </p>
            <Select
              className="border w-full justify-center items-center rounded-2xl text-[#AAAAAA] bg-transparent border-gray-400"
              label="تایید شده"
              labelPlacement="outside"
              size="lg"
            >
              {animals.map((animal) => (
                <SelectItem className='bg-[#D9D9D9]  py-1 overflow-y-auto' key={animal.key}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* Select 2 */}
          <div className="w-full sm:w-[223px] relative">
            <p className="absolute -top-2 right-3 bg-[#FFFFFF] z-10 px-2 text-xs text-[#AAAAAA]">
              نوع تراکنش :
            </p>
            <Select
              className="border w-full justify-center items-center rounded-2xl  text-[#AAAAAA] bg-transparent border-gray-400"
              label="رزرو"
              labelPlacement="outside"
              size="lg"
            >
              {animals.map((animal) => (
                <SelectItem className='bg-[#D9D9D9]  py-1 overflow-y-auto' key={animal.key}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>

      <div className='w-full my-[19px] border border-dashed border-[#88888842]'></div>

      {/* جدول دسکتاپ */}
      <div className="hidden sm:block overflow-y-auto max-h-[400px]">
        <div className="bg-[#F1F1F1] text-[#707070] rounded-[16px] grid grid-cols-7 gap-[10px] p-3 text-sm font-yekan-600 whitespace-nowrap min-w-[600px]">
          <p></p>
          <p>نام ملک</p>
          <p>اطلاعات مسافر</p>
          <p>تاریخ رزرو</p>
          <p>مبلغ</p>
          <p>وضعیت رزرو</p>
          <p>وضعیت پرداخت</p>
        </div>

        {reservations.length === 0 ? (
          <p className="flex items-center justify-center py-16">
            No courses found
          </p>
        ) : (
          reservations.map((item) => (
            <div
              key={item.courseId}
              className="grid grid-cols-7 items-center gap-[10px] py-[16px] border-b border-dashed border-[#88888842]"
            >
              <img
                src={item.tumbImageAddress || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cNMHJHD_Va2Kzvp38Arpv6Kyyi2Nfiw4g&s"}
                className="w-[83px] h-[52px] rounded-[12px] object-cover"
                alt={item.termName}
              />
              <p className="truncate">{item.termName}</p>
              <p className="truncate">{item.fullName}</p>
              <p className="truncate">{item.lastUpdate}</p>
              <p className="truncate">1,200,000 تومان</p>
              <p className="truncate">{item.levelName}</p>
              <p className="truncate text-green-600 font-yekan-600">تسویه شده</p>
            </div>
          ))
        )}
      </div>

      {/* حالت موبایل */}
      <div className="block sm:hidden overflow-y-auto max-h-[400px] space-y-3 mt-2">
        {reservations.map((item) => (
          <div
            key={item.courseId}
            className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl p-3 flex flex-col gap-2 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.tumbImageAddress || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cNMHJHD_Va2Kzvp38Arpv6Kyyi2Nfiw4g&s"}
                className="w-[83px] h-[52px] rounded-[12px] object-cover"
                alt={item.termName}
              />
              <div>
                <p className="font-yekan-600 text-sm">{item.termName}</p>
                <p className="text-xs text-gray-500">{item.fullName}</p>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>تاریخ: {item.lastUpdate}</span>
              <span>وضعیت: <span className="text-green-600 font-yekan-600">{item.levelName}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
