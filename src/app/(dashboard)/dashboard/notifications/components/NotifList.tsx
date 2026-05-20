import { Select, SelectItem } from '@heroui/select'
import React from 'react'
export const animals = [
    { key: "cat", },
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

const NotifList = () => {
    return (
        <div className='flex flex-col gap-[19px] overflow-x-auto bg-white  p-4 rounded-lg shadow '>
            <div className=" flex justify-between  p-4 rounded-lg ">
                <p>لیست اعلان های شما</p>
                <div className='flex gap-4'>
                    <div className="w-full sm:w-[48%] lg:w-[167px] relative">
                        <p className="absolute -top-2 right-3 bg-[#FFFFFF] z-10 px-2 text-xs text-[#AAAAAA]">
                            نوع اعلان :                                </p>
                        <Select
                            className="border w-full justify-between items-center rounded-2xl text-[#AAAAAA] bg-transparent border-gray-400"
                            label="همه"
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
                    <button
                        className="flex justify-center items-center w-[254px] h-[50px] rounded-[12px] bg-[#8CFF45]"
                    >
                        علامت گذاری به عنوان خوانده شده
                    </button>
                </div>
            </div>

            <div className='w-[100%] flex items-center justify-center   border border-dashed border-[#88888842]'></div>

            <div className="hidden sm:flex bg-[#D9D9D9]  rounded-[16px] gap-[30px] p-3 text-sm font-yekan-600 whitespace-nowrap min-w-[600px]">
                <p className="w-[50%]">اعلان</p>
                <p className="w-[59%]">تاریخ</p>
            </div>
            <div className=' relative '>
                <p className="absolute -top-2  bg-[#FFFFFF] z-10 px-2 text-xs text-[#AAAAAA]">خوانده نشده</p>
                <div className='w-[100%] flex items-center justify-center   border border-dashed border-[#88888842]'></div>
            </div>
        </div>
    )
}

export default NotifList
