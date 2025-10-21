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
    <div className="flex flex-wrap lg:flex-nowrap gap-5 w-full justify-between px-8">

      <div className="w-full sm:w-[32%] relative">
        <p className="absolute -top-2 right-3 bg-[#303030] z-10 px-2 text-xs text-[#AAAAAA]">
          امکانات هتل :
        </p>
        <Select
          className="border w-full justify-center items-center rounded-2xl text-[#AAAAAA] bg-transparent border-gray-400"
          label="انتخاب کنید"
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

      <div className="w-full sm:w-[32%] relative">
        <p className="absolute -top-2 right-4 bg-[#303030] z-10 px-2 text-xs text-[#AAAAAA]">
          حداقل قیمت :
        </p>
        <Input
          type="number"
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="تومان"
        />
      </div>

      {/* Input Max */}
      <div className="w-full sm:w-[32%] relative">
        <p className="absolute -top-2 right-4 bg-[#303030] z-10 px-2 text-xs text-[#AAAAAA]">
          حداکثر قیمت :
        </p>
        <Input
          type="number"
          className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
          placeholder="تومان"
        />
      </div>
      
    </div>
  )
}

export default Filter;