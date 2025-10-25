'use client'
import React, { useState, useEffect, useRef } from "react"

const HouseHeader = () => {
  const slides = ["اسلاید ۱", "اسلاید ۲", "اسلاید ۳", "اسلاید ۴", "اسلاید ۵"]
  const totalSlides = slides.length
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef(null)

  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const handleDotClick = (index) => {
    setCurrentSlide(index)
    startAutoSlide()
  }

  return (
    <section className="w-full flex flex-col lg:flex-row justify-between gap-8 text-white">
      <div className="flex flex-row gap-6">
        <div
          className="relative bg-[#111] shadow-[0px_12px_32px_0px_#00000014] rounded-[32px] flex items-center justify-center text-gray-500 cursor-pointer overflow-hidden"
          style={{ width: "678px", height: "368px" }}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          onClick={() => console.log(`اسلاید ${currentSlide + 1} کلیک شد!`)}
        >
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full h-full flex-shrink-0 flex items-center justify-center text-gray-200 text-xl font-medium"
              >
                {slide}
              </div>
            ))}
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-transform ${
                  currentSlide === i ? "bg-[#8CFF45] scale-125" : "bg-gray-500 hover:scale-110"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className="bg-[#111] shadow-[0px_12px_32px_0px_#00000014] rounded-[32px] flex items-center justify-center text-gray-600"
            style={{ width: "445px", height: "172px" }}
          >
          </div>
          <div
            className="bg-[#111] shadow-[0px_12px_32px_0px_#00000014] rounded-[32px] flex items-center justify-center text-gray-600"
            style={{ width: "445px", height: "172px" }}
          >
          </div>
        </div>
      </div>

      <div
        className="bg-[#393939] rounded-[24px] p-4 flex flex-col items-center text-center relative"
        style={{
          width: "213px",
          height: "368px",
          border: "2px solid #565656",
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center text-sm text-white font-medium shadow-[0px_8px_16px_0px_#00000014]"
          style={{
            width: "165px",
            height: "36px",
            background: "#565656",
            borderBottomRightRadius: "32px",
            borderBottomLeftRadius: "32px",
          }}
        >
          اطلاعات تماس
        </div>

        <div
          className="bg-[#565656] rounded-[16px] mt-14 mb-3"
          style={{ width: "48px", height: "48px" }}
        ></div>

        <div
          className="bg-[#565656] mb-4"
          style={{ width: "129px", height: "45px" }}
        ></div>

        <div
          className="bg-[#565656] mb-2"
          style={{ width: "189px", height: "20px" }}
        ></div>
        <div
          className="bg-[#565656] mb-4"
          style={{ width: "189px", height: "20px" }}
        ></div>

        <button
          className="text-black font-semibold rounded-[10px]"
          style={{
            width: "189px",
            height: "32px",
            background: "#8CFF45",
            boxShadow: "0px 6px 24px 0px #8CFF451F",
          }}
        >
          تماس بگیرید
        </button>

        <button
          className="mt-3 rounded-[10px] border border-white text-white font-semibold"
          style={{ width: "189px", height: "32px" }}
        >
          گفتگو با فروشنده
        </button>
      </div>
    </section>
  )
}

export default HouseHeader
