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

const Filter = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-10 w-[75%] pt-[50px] justify-between pr-8">

      <div className="w-full sm:w-[42%] relative">
        <p className="absolute -top-2 right-4 bg-[#232323] z-10 px-2 text-xs text-[#AAAAAA]">
حداقل رهن :        </p>
        <Input
          
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="تومان"
        />
      </div>

      {/* Input Max */}
      <div className="w-full sm:w-[42%] relative">
        <p className="absolute -top-2 right-4 bg-[#232323] z-10 px-2 text-xs text-[#AAAAAA]">
          حداکثر قیمت :
        </p>
        <Input
          
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="تومان"
        />
      </div>

      
      <div className="w-full sm:w-[42%] relative">
        <p className="absolute -top-2 right-4 bg-[#232323] z-10 px-2 text-xs text-[#AAAAAA]">
حداقل اجاره :        </p>
        <Input
          
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="تومان"
        />
      </div>

      {/* Input Max */}
      <div className="w-full sm:w-[42%] relative">
        <p className="absolute -top-2 right-4 bg-[#232323] z-10 px-2 text-xs text-[#AAAAAA]">
حداکثر اجاره :        </p>
        <Input
          
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="تومان"
        />
      </div>

      
      <div className="w-full sm:w-[42%] relative">
        <p className="absolute -top-2 right-4 bg-[#232323] z-10 px-2 text-xs text-[#AAAAAA]">
حداقل متراژ :        </p>
        <Input
          
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="متر"
        />
      </div>

      {/* Input Max */}
      <div className="w-full sm:w-[42%] relative">
        <p className="absolute -top-2 right-4 bg-[#232323] z-10 px-2 text-xs text-[#AAAAAA]">
حداکثر متراژ :        </p>
        <Input
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="متر"
        />
      </div>

      
    </div>
  )
}

export default Filter;