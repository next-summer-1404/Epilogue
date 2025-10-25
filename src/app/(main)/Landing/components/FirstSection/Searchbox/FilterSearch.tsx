"use client";

import { Button, Link, Select, SelectItem } from "@heroui/react";
import booking from "@/assets/images/LandingImages/booking.png";
import hbuilding from "@/assets/images/LandingImages/hbuilding.png";
import money from "@/assets/images/LandingImages/money.png";
import Image from "next/image";


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
export default function FilterSearch() {
    return (
        <div
            className="
       p-6 
        bg-[#404040]/95 backdrop-blur-md 
        rounded-4xl shadow-xl 
        flex flex-col md:flex-row items-center gap-3 md:gap-5
        static md:absolute md:bottom-5 md:left-1/2 md:-translate-x-1/2
      "
        >

            <div className="flex gap-5 absolute mx-4 bottom-[120px]">
                <div className="flex gap-2 items-center">
                    <Image
                        src={booking}
                        alt="The Delta"
                        className="h-5 w-5 items-center text-[#AAAAAA] select-none"
                        priority
                    />
                    <Link href="#" className="text-[#AAAAAA] text-nowrap hover:text-white">
                        رزرو ملک
                    </Link>
                    <p className="px-4">|</p>
                </div>

                <div className="flex gap-2 items-center">
                    <Image
                        src={hbuilding}
                        alt="The Delta"
                        className="h-5 w-5 items-center text-[#AAAAAA] select-none"
                        priority
                    />
                    <Link href="#" className="text-[#AAAAAA] hover:text-white">
                        رهن و اجاره
                    </Link>
                    <p className="px-4">|</p>

                </div>

                <div className="flex gap-2 items-center">
                    <Image
                        src={money}
                        alt="The Delta"
                        className="h-5 w-5 items-center text-[#AAAAAA] select-none"
                        priority
                    />
                    <Link href="#" className="text-[#AAAAAA] hover:text-white">
                        خرید و فروش
                    </Link>
                </div>

            </div>

            <div className="flex-1 h-[59px] text-[#AAAAAA] rounded-2xl min-w-[292px] border border-[#AAAAAA]">
                <p className=" absolute top-3 mr-4 bg-[#404040] "> انتخاب مقصد : </p>
                <Select
                    className="max-w-xs"
                    placeholder="استان ، شهر ، اقامتگاه ...."
                >
                    {animals.map((animal) => (
                        <SelectItem className=" bg-[#404040]  text-[#AAAAAA]  " key={animal.key}>{animal.label}
                        </SelectItem>

                    ))}
                </Select>
            </div>

            <div className="flex-1 h-[59px] text-[#AAAAAA] rounded-2xl min-w-[189px] border border-[#AAAAAA]">
                <p className=" absolute top-3 mr-4 bg-[#404040] ">تاریخ ورود :</p>
                <Select
                    className="max-w-xs"
                    placeholder="وارد کنید ...."
                >
                    {animals.map((animal) => (
                        <SelectItem className="  bg-[#404040]  text-[#AAAAAA]  " key={animal.key}>
                            {animal.label}
                        </SelectItem>

                    ))}
                </Select>
            </div>

            <div className="flex-1 h-[59px] text-[#AAAAAA] rounded-2xl min-w-[189px] border border-[#AAAAAA]">
                <p className=" absolute top-3 mr-4 bg-[#404040] ">تاریخ خروج :</p>
                <Select
                    className="max-w-xs"
                    placeholder="وارد کنید ...."
                >
                    {animals.map((animal) => (
                        <SelectItem className="  bg-[#404040]  text-[#AAAAAA]  " key={animal.key}>{animal.label}
                        </SelectItem>

                    ))}
                </Select>
            </div>

            <div className="flex-1 h-[59px] text-[#AAAAAA] rounded-2xl min-w-[189px] border border-[#AAAAAA]">
                <p className=" absolute top-3 mr-4 bg-[#404040] ">تعداد نفرات :</p>
                <Select
                    className="max-w-xs"
                    placeholder="وارد کنید ...."
                >
                    {animals.map((animal) => (
                        <SelectItem className=" bg-[#404040]  cursor-pointer  text-[#AAAAAA] " key={animal.key}>
                            {animal.label}
                        </SelectItem>

                    ))}
                </Select>
            </div>
            <Button className="flex-1 h-[59px] bg-[#8CFF45] text-[#363636] rounded-2xl min-w-[134px] p-2 ">جستجو کن</Button>


        </div>
    );
}
