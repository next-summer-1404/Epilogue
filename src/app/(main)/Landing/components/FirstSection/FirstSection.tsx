"use client";
import theDelta from '@/assets/images/LandingImages/theDelta.png';
import Image from "next/image";
import BuildingLayer from "./BuildingLayer";


// عکس‌های هر آیکون
import villa from "@/assets/images/LandingImages/villa.svg";
import cottage from "@/assets/images/LandingImages/cottage.png";
import house from "@/assets/images/LandingImages/house.svg";
import apartment from "@/assets/images/LandingImages/apartment.svg";
import wooden from "@/assets/images/LandingImages/wooden.svg";

const categories = [
    { title: "ملک ویلایی", icon: villa },
    { title: "ملک کلنگی", icon: cottage },
    { title: "بهرمندی", icon: wooden },
    { title: "استخر دار", icon: house },
    { title: "ملک ساحلی", icon: cottage },
    { title: "پنت‌هاوس", icon: apartment },
];
export default function FirstSection() {

    return (
        <section className="w-full text-white flex flex-col  items-center justify-center overflow-hidden">
            <div className="w-full flex flex-col items-center justify-center py-10 md:py-10">
                <div className="grid place-items-center w-full max-w-6xl relative">
                    <Image
                        src={theDelta}
                        alt="The Delta"
                        className="w-full h-auto select-none"
                        priority
                    />

                    {/* لایه ساختمان + دیوهای کناری */}
                    <BuildingLayer />
                </div>


            </div>

            {/* دسته‌بندی‌ها */}
            <div className="w-full text-center flex flex-col gap-6">
                <h3 className="text-[16px] md:text-xl font-semibold text-[#8CFF45]">
                    دسته‌بندی املاک دلتا
                </h3>
                <p className="text-[#FFFFFF] text-[32px] ">
                    هر ملکی بخوای اینجا پیدا میشه!
                </p>
                <p className=" text-[#FFFFFF] text-[16px] ">
                    با کلیک به روی هر دسته بندی می توانید تمام آگهی مربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-8 relative">
                    {categories.map((item, idx) => (
                        <button
                            key={idx}
                            className={`relative flex flex-col items-start justify-start px-13.5 py-5 rounded-[14px] text-[18px] font-medium transition bg-[#2a2a2a] text-white hover:bg-[#8CFF45] hover:text-black
                                }`}
                        >
                            <div className="w-[56px] h-[56px] rounded-2xl bg-[#393939] flex items-center justify-center absolute right-3 -top-8">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            </div>

                            <span className=" items-center justify-center text-center">{item.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
