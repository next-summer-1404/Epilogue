
import React from "react"

const Gallery = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 px-4 lg:pl-8 w-full">
      <div className="relative w-full max-w-[1143px] h-[260px] sm:h-[360px] lg:h-[444px] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-dashed border-gray-600 bg-[#1a1a1a] cursor-pointer">
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9] cursor-pointer hover:scale-110 transition-transform"
            />
          ))}
          <div className="w-3.5 h-3.5 bg-[#8CFF45] clip-path-triangle cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[96px] lg:h-[96px] rounded-[28px] lg:rounded-[32px] bg-[#393939] transition-all cursor-pointer hover:scale-105 ${
              i === 0
                ? "border-2 border-[#8CFF45] shadow-[0px_8px_20px_0px_#8CFF4529]"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery

