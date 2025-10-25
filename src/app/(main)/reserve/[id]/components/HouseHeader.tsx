import React from "react"

const HouseHeader = () => {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-6 lg:gap-10 px-4 sm:px-8 lg:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
        <div className="flex flex-col items-start w-full sm:w-auto">
          <div className="text-white text-lg sm:text-xl font-semibold">
            هتل همایون فر کیش ایران
          </div>
          <div className="text-gray-400 text-sm sm:text-base mt-2 text-ellipsis whitespace-nowrap overflow-hidden max-w-full sm:max-w-[622px]">
            آدرس : گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 sm:gap-5">
          <button className="w-[92px] h-[32px] rounded-[10px] bg-[#7367FF] text-white text-sm shadow-[0px_8px_16px_0px_#7367FF33,2px_2px_10px_0px_#FFFFFF3D_inset,-1px_-1px_6px_0px_#0000000A_inset]">
            5 ستاره
          </button>
          <div className="w-[2px] h-[32px] bg-[#DDDDDD]" />
          <div className="flex items-center gap-2 sm:gap-2 w-[96px] justify-end">
            <button className="w-10 h-10 rounded-xl bg-[#393939]" />
            <button className="w-10 h-10 rounded-xl bg-[#8CFF45] shadow-[0px_8px_8px_0px_#8CFF4529,2px_2px_12px_0px_#FFFFFF33_inset,-1px_-1px_6px_0px_#00000014_inset]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseHeader
