'use client'
import React, { useState } from "react"

const ReserveSidebar = () => {
  const [guests, setGuests] = useState(0)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleIncrement = () => setGuests((prev) => prev + 1)
  const handleDecrement = () => setGuests((prev) => (prev > 0 ? prev - 1 : 0))

  const handleReserve = () => {
    if (!startDate || !endDate) {
      alert("لطفاً تاریخ رفت و برگشت را پر کنید")
      return
    }
    alert(`رزرو انجام شد!\nتعداد مسافران: ${guests}\nتاریخ رفت: ${startDate}\nتاریخ برگشت: ${endDate}`)
  }

  const priceData = [
    { nights: 5, base: "17.000.000 ت", total: "18.000.000 ت" },
    { nights: 1, base: "17.000.000 ت", total: "18.000.000 ت" },
    { nights: 3, base: "17.000.000 ت", total: "18.000.000 ت" },
  ]

  return (
    <aside className="w-full max-w-[329px] sm:max-w-[329px] lg:max-w-[350px] bg-[#393939] border border-[#565656] rounded-[32px] flex flex-col items-center p-4 sm:p-6 gap-6 mx-auto lg:mx-0">
      <div className="w-[200px] sm:w-[233px] h-[45px] sm:h-[49px] bg-[#565656] rounded-b-[28px] sm:rounded-b-[32px] flex items-center justify-center -mt-6">
        <h2 className="text-white text-[18px] sm:text-[20px] font-semibold">
          رزرو خونه برای :
        </h2>
      </div>

      <div className="flex flex-col gap-4 sm:gap-4 w-full items-center">
        <div className="relative w-full max-w-[281px] sm:max-w-full h-[50px] bg-[#393939] border border-white rounded-[16px] flex items-center justify-center px-4">
          <span className="absolute -top-3 right-4 text-white text-sm px-1 bg-[#393939]">
            :تاریخ رفت
          </span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full bg-transparent text-white outline-none text-sm cursor-pointer"
          />
        </div>

        <div className="relative w-full max-w-[281px] sm:max-w-full h-[50px] bg-[#393939] border border-white rounded-[16px] flex items-center justify-center px-4">
          <span className="absolute -top-3 right-4 text-[#B3B3B3] text-sm px-1 bg-[#393939]">
            :تاریخ برگشت
          </span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full bg-transparent text-[#B3B3B3] outline-none text-sm cursor-pointer"
          />
        </div>

        <div className="relative w-full max-w-[281px] sm:max-w-full h-[50px] bg-[#393939] border border-white rounded-[16px] flex items-center justify-between px-4">
          <span className="absolute -top-3 right-4 text-[#B3B3B3] text-sm px-1 bg-[#393939]">
            :تعداد مسافران
          </span>

          <div className="flex items-center justify-between w-full">
            <span className="text-white text-base">
              {guests > 0 ? `${guests} نفر` : "نفر"}
            </span>

            <div className="flex items-center gap-2 sm:gap-3">
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

      <div className="w-full max-w-[281px] sm:max-w-full h-[2px] bg-[#646464]" />

      <div className="w-[150px] sm:w-[178px] h-[32px] sm:h-[36px] bg-[#646464] rounded-b-[20px] sm:rounded-b-[24px] flex items-center justify-center mx-auto mt-[-25px]">
        <p className="text-white text-[15px] sm:text-[16px] font-semibold">
          قیمت‌های رزرو
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-3 w-full items-center">
        {priceData.map((item, i) => (
          <div
            key={i}
            className="w-full max-w-[281px] sm:max-w-full flex justify-between rounded-sm p-2 bg-transparent text-white text-sm"
          >
            <span>{`${item.nights} شب * ${item.base}`}</span>
            <span>{item.total}</span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[281px] sm:max-w-full h-[2px] bg-[#646464]" />

      <div className="w-full max-w-[281px] sm:max-w-full relative flex flex-col items-end gap-2 p-4 bg-[#393939] rounded-[8px]">
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 w-full justify-end">
          <div className="relative">
            <span className="text-[#AAAAAA] text-sm font-medium">25.000.000</span>
            <span className="absolute top-0 left-0 w-full h-[1px] bg-gray-500 rotate-12 origin-top-left"></span>
          </div>

          <div className="w-[40px] h-[25px] sm:w-[40px] sm:h-[25px] bg-[#FF5555] rounded-[8px] flex items-center justify-center shadow-[2px_2px_8px_0px_#FFFFFF29_inset,-1px_-1px_4px_0px_#0000000F_inset,0px_6px_12px_0px_#FF555529]">
            <span className="text-white text-[12px] font-semibold">%15</span>
          </div>
        </div>

        <span className="text-[#8CFF45] text-sm font-semibold mt-1">
          15.000.000
        </span>
      </div>

      <button
        onClick={handleReserve}
        className={`w-full max-w-[281px] sm:max-w-full h-[44px] bg-[#8CFF45] rounded-[14px] text-black font-semibold text-sm sm:text-base shadow-[0px_8px_16px_0px_#8CFF4514,2px_2px_12px_0px_#FFFFFF33_inset,-1px_-1px_4px_0px_#00000014_inset] ${
          !startDate || !endDate ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        همین الان رزرو کن
      </button>
    </aside>
  )
}

export default ReserveSidebar
