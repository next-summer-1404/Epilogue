"use client"
import React, { useState } from "react"

const ReserveSidebar = () => {
  const [guests, setGuests] = useState(0)

  const handleIncrement = () => setGuests((prev) => prev + 1)
  const handleDecrement = () => setGuests((prev) => (prev > 0 ? prev - 1 : 0))

  return (
    <aside className="w-full max-w-[329px] bg-[#393939] border border-[#565656] rounded-[32px] flex flex-col items-center p-4 sm:p-6 gap-6 mx-auto lg:mx-0">
      <div className="w-[200px] sm:w-[233px] h-[45px] sm:h-[49px] bg-[#565656] rounded-b-[28px] sm:rounded-b-[32px] flex items-center justify-center -mt-6">
        <h2 className="text-white text-[18px] sm:text-[20px] font-semibold">
          رزرو خونه برای :
        </h2>
      </div>

      <div className="flex flex-col gap-4 w-full items-center">
        <div className="relative w-full max-w-[281px] h-[50px] bg-[#393939] border border-white rounded-[16px] flex items-center justify-center px-4">
          <span className="absolute -top-3 right-4 text-white text-sm px-1 bg-[#393939]">
            تاریخ رفت
          </span>
          <input
            type="date"
            className="w-full bg-transparent text-white outline-none text-sm cursor-pointer"
          />
        </div>

        <div className="relative w-full max-w-[281px] h-[50px] bg-[#393939] border border-white rounded-[16px] flex items-center justify-center px-4">
          <span className="absolute -top-3 right-4 text-[#B3B3B3] text-sm px-1 bg-[#393939]">
            تاریخ برگشت
          </span>
          <input
            type="date"
            className="w-full bg-transparent text-[#B3B3B3] outline-none text-sm cursor-pointer"
          />
        </div>

        <div className="relative w-full max-w-[281px] h-[50px] bg-[#393939] border border-white rounded-[16px] flex items-center justify-between px-4">
          <span className="absolute -top-3 right-4 text-[#B3B3B3] text-sm px-1 bg-[#393939]">
            تعداد مسافران
          </span>

          <div className="flex items-center justify-between w-full">
            <span className="text-white text-base">
              {guests > 0 ? `${guests} نفر` : "نفر"}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleIncrement}
                className="w-6 h-6 sm:w-[24px] sm:h-[24px] bg-[#8CFF45] border-2 border-[#363636] rounded-md text-black text-lg flex items-center justify-center cursor-pointer"
              >
                +
              </button>

              <span className="text-white text-base w-6 text-center">
                {guests}
              </span>

              <button
                type="button"
                onClick={handleDecrement}
                className="w-6 h-6 sm:w-[24px] sm:h-[24px] bg-[#8CFF45] border-2 border-[#363636] rounded-md text-black text-lg flex items-center justify-center cursor-pointer"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[281px] h-[2px] bg-[#646464]" />

      {/* قیمت‌های رزرو قسمت */}
      <div className="w-[150px] sm:w-[178px] h-[32px] sm:h-[36px] bg-[#646464] rounded-b-[20px] sm:rounded-b-[24px] flex items-center justify-center mx-auto mt-[-20px]">
        <p className="text-white text-[15px] sm:text-[16px] font-semibold">
          قیمت‌های رزرو
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full items-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full max-w-[281px] h-[20px] bg-transparent border border-dashed border-gray-600 rounded-sm"
          />
        ))}
      </div>

      <div className="w-full max-w-[281px] h-[2px] bg-[#646464]" />

      <div className="w-[120px] sm:w-[139px] h-[60px] sm:h-[67px] bg-[#393939] border border-[#565656] rounded-[8px] self-end sm:mr-12" />

      <button className="w-full max-w-[281px] h-[44px] bg-[#8CFF45] rounded-[14px] text-black font-semibold text-sm sm:text-base shadow-[0px_8px_16px_0px_#8CFF4514,2px_2px_12px_0px_#FFFFFF33_inset,-1px_-1px_4px_0px_#00000014_inset]">
        همین الان رزرو کن
      </button>
    </aside>
  )
}

export default ReserveSidebar

