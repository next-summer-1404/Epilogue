import { Input } from '@heroui/react';
import { Select, SelectItem } from '@heroui/select'
import React from 'react'

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const HotelSearch = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div
        className="
          bg-[#303030] 
          w-full 
          flex 
          flex-wrap 
          lg:flex-nowrap 
          gap-4 
          lg:gap-5 
          items-end 
          justify-between 
          rounded-2xl 
          shadow-lg 
          p-4 
          sm:p-6
        "
      >

        {/* Select 1 */}
        <div className="w-full sm:w-[48%] lg:w-[223px] relative">
          <p className="absolute -top-2 right-3 bg-[#303030] z-10 px-2 text-xs text-[#AAAAAA]">
            مقصد یا هتل شما :
          </p>
          <Select
            className="border w-full justify-center items-center rounded-2xl text-[#AAAAAA] bg-transparent border-gray-400"
            label="استان ، شهر ، هتل ...."
            labelPlacement="outside"
            style={{ backgroundColor: 'transparent' }}
            size="lg"
          >
            {animals.map((animal) => (
              <SelectItem
                key={animal.key}
                className="text-[#AAAAAA] bg-[#262626] py-1 overflow-y-auto"
              >
                <div className="p-2 text-center hover:bg-[#393939] rounded-2xl">
                  {animal.label}
                </div>
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Select 2 */}
        <div className="w-full sm:w-[48%] lg:w-[223px] relative">
          <p className="absolute -top-2 right-3 bg-[#303030] z-10 px-2 text-xs text-[#AAAAAA]">
            مرتب سازی بر اساس :
          </p>
          <Select
            className="border w-full justify-center items-center rounded-2xl text-[#AAAAAA] bg-transparent border-gray-400"
            label="استان ، شهر ، هتل ...."
            labelPlacement="outside"
            style={{ backgroundColor: 'transparent' }}
            size="lg"
          >
            {animals.map((animal) => (
              <SelectItem
                key={animal.key}
                className="text-[#AAAAAA] bg-[#262626] py-1 overflow-y-auto"
              >
                <div className="p-2 text-center hover:bg-[#393939] rounded-2xl">
                  {animal.label}
                </div>
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Input */}
        <div className="w-full sm:w-[70%] lg:min-w-[500px] relative">
          <p className="absolute -top-2 right-4 bg-[#303030] z-10 px-2 text-xs text-[#AAAAAA]">
            جستجو :
          </p>
          <Input
            className="h-[50px] border py-[10px] border-gray-400 rounded-2xl text-[#AAAAAA]"
            placeholder="نام هتل مورد نظر ....."
          />
        </div>

        {/* Count */}
        <div className="w-full sm:w-[25%] lg:w-[167px] h-[50px] border flex justify-center items-center border-gray-400 rounded-2xl">
          <p className="text-center text-[#ffff]">تعداد آگهی : 33</p>
        </div>

      </div>
    </div>
  )
}

export default HotelSearch;
