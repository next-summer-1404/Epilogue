'use client'

import React, { useState, useEffect, useRef } from "react"

const Gallery = () => {
  const totalSlides = 6
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef(null)

  const startAutoSlide = () => {
    stopAutoSlide()
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)
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
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 px-4 lg:pl-8 w-full">
      <div
        className="relative w-full max-w-[1143px] h-[260px] sm:h-[360px] lg:h-[444px] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-gray-500 overflow-hidden"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {[...Array(totalSlides)].map((_, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <div className="text-xl text-gray-200 font-medium">
                Slide {i + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full border cursor-pointer transition-transform ${
                currentSlide === i
                  ? "scale-125 bg-[#8CFF45] border-[#8CFF45]"
                  : "border-gray-400 hover:scale-110 bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
        {[...Array(8)].map((_, i) => {
          const isActive = i === currentSlide
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleDotClick(i % totalSlides)}
              className={`w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[96px] lg:h-[96px] rounded-[28px] lg:rounded-[32px] bg-[#393939] transition-all cursor-pointer hover:scale-105 ${
                isActive
                  ? "border-2 border-[#8CFF45] shadow-[0px_8px_20px_0px_#8CFF4529]"
                  : "border border-gray-600"
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery

