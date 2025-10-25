"use client";
import Image from "next/image";
import building from "@/assets/images/LandingImages/building.png";
import agha1 from "@/assets/images/LandingImages/agha1.png";
import agha2 from "@/assets/images/LandingImages/agha2.png";
import agha3 from "@/assets/images/LandingImages/agha3.png";
import agha4 from "@/assets/images/LandingImages/agha4.png";
import { Link } from "@heroui/react";
import FilterSearch from "./Searchbox/FilterSearch";

export default function BuildingLayer() {
    return (
        <div className="relative w-full flex flex-col justify-center items-start -translate-y-10 md:-translate-y-40">

            {/* فقط عکس برای موبایل */}
            <div className="block md:hidden w-full">
                <Image
                    src={building}
                    alt="building"
                    className="object-cover w-full h-[400px]"
                />
            </div>

            {/* نسخه کامل برای دسکتاپ */}
            <div className="hidden md:flex relative w-full flex-col justify-center items-start">
                
                {/* دیو راست */}
                <div className="absolute right-0 top-1/3 transform flex flex-col items-center ">
                    <div className="order-2 lg:order-1 flex flex-col gap-15 transform">
                        <div className="flex flex-row relative left-[85px] lg:left-0 ">
                            <div className="absolute right-0 rounded-full">
                                <Image src={agha1} alt="Agha 1" className="w-12 h-12 object-cover" />
                            </div>
                            <div className="absolute right-4 rounded-full">
                                <Image src={agha2} alt="Agha 2" className="w-12 h-12 object-cover" />
                            </div>
                            <div className="absolute right-8 rounded-full">
                                <Image src={agha3} alt="Agha 3" className="w-12 h-12 object-cover" />
                            </div>
                            <div className="absolute right-12 rounded-full">
                                <Image src={agha4} alt="Agha 4" className="w-12 h-12 object-cover" />
                            </div>
                            <div className="absolute right-16 rounded-full">
                                <Image src={agha1} alt="Agha 5" className="w-12 h-12 object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col w-[309px] h-[78px]">
                            <span className="text-white text-[20px]">بیش از 7000+ </span>
                            <span className="text-white text-[20px] text-nowrap">رضایت مشتریانی که به دلتا اعتماد کرده اند</span>
                        </div>
                    </div>
                </div>

                {/* عکس ساختمان */}
                <div className="relative z-10 flex justify-center order-1 lg:order-2 w-full">
                    <Image
                        src={building}
                        alt="building"
                        className="object-cover w-full h-[600px]"
                    />
                    <FilterSearch />
                </div>

                {/* دیو چپ */}
                <div className="absolute left-0 top-1/3 flex flex-col transform gap-8 ">
                    {/* متن اول */}
                    <div className="w-[350px] h-[67px] flex flex-col">
                        <p className="text-white text-[20px] text-nowrap">رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد</p>
                        <div className="flex gap-4">
                            <p className="text-white text-[20px] text-nowrap">
                                نظرتون مثل آب خوردن فقط در دلتا
                            </p>
                            <p>__________________</p>
                        </div>
                    </div>

                    {/* دکمه‌ها */}
                    <div className="flex flex-row gap-6">
                        <Link className="flex flex-col items-center justify-center text-[16px] h-[36px] w-[129px] text-[#363636] bg-[#FFFFFF] rounded-[12px]">
                            آسون رزرو کن
                        </Link>

                        <Link className="flex flex-col items-center justify-center text-[16px] h-[36px] w-[152px] text-[#FFFFFF] bg-[#363636] rounded-[12px]">
                            رهن و اجاره ملک
                        </Link>
                    </div>

                    {/* متن دوم */}
                    <div className="flex gap-16">
                        <div className="w-[177px] h-[60px] flex flex-col">
                            <p className="text-white text-[16px] text-nowrap">8500+</p>
                            <p className="text-white text-[16px] text-nowrap">
                                منطقه برای رزرو ،  ویلا و کلبه ها
                            </p>
                        </div>
                        <div className="w-[149px] h-[60px] flex flex-col">
                            <p className="text-white text-[16px] text-nowrap">8500+</p>
                            <p className="text-white text-[16px] text-nowrap">
                                منطقه برای رزرو ،  ویلا و کلبه ها
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
