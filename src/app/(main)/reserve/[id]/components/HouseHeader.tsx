import React from "react"

const HouseHeader = () => {
  return (
    <div className="w-full flex flex-col gap-6 lg:translate-y-10 lg:-translate-x-16 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col items-start mx-[-90px]">
          <div className="w-[324px] h-[40px] border border-dashed border-gray-500 rounded-md" />
          <div className="w-[622px] h-[20px] border border-dashed border-gray-700 rounded-md mt-2 text-ellipsis whitespace-nowrap overflow-hidden" />
        </div>
        <div className="flex items-center gap-5 sm:gap-6">
          <button className="w-[92px] h-[32px] rounded-[10px] bg-[#7367FF] text-white text-sm shadow-[0px_8px_16px_0px_#7367FF33,2px_2px_10px_0px_#FFFFFF3D_inset,-1px_-1px_6px_0px_#0000000A_inset]">
            5 ستاره
          </button>
          <div className="w-[2px] h-[32px] bg-[#DDDDDD]" />
          <div className="flex items-center gap-2 w-[96px]">
            <button className="w-10 h-10 rounded-xl bg-[#393939]" />
            <button className="w-10 h-10 rounded-xl bg-[#8CFF45] shadow-[0px_8px_8px_0px_#8CFF4529,2px_2px_12px_0px_#FFFFFF33_inset,-1px_-1px_6px_0px_#00000014_inset]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseHeader


