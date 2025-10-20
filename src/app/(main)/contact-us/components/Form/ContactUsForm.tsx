'use client'
import { Input, Textarea } from '@heroui/react'
import React from 'react'

const ContactUsForm = () => {
    return (
        <div className="flex justify-center px-4 py-6">
            <div className='w-[387px] h-[365px] rounded-[32px] bg-[#3B3B3B] relative'>
                <div className='w-[479px] h-[340px] rounded-[32px] bg-[#2D2D2D] absolute left-1/2 -translate-x-1/2 top-3'>
                    <div className='w-[575px] h-[315px] rounded-[32px] pt-[34px] bg-[#1C1C1C] flex flex-col gap-[34px] relative left-[42px] top-3'>
                        
                        {/* نام و ایمیل */}
                        <div className='flex flex-col lg:flex-row gap-10 relative justify-center w-full'>
                            <div className="w-full sm:w-[42%] relative">
                                <p className="absolute -top-2 right-4 bg-[#1C1C1C] z-10 px-2 text-xs text-[#AAAAAA]">
                                    نام و نام خانوادگی :
                                </p>
                                <Input
                                    type="text"
                                    className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
                                    placeholder="تومان"
                                />
                            </div>

                            <div className="w-full sm:w-[42%] relative">
                                <p className="absolute -top-2 right-4 bg-[#1C1C1C] z-10 px-2 text-xs text-[#AAAAAA]">
                                    ایمیل شما :
                                </p>
                                <Input
                                    type="text"
                                    className="h-[50px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
                                    placeholder="تومان"
                                />
                            </div>
                        </div>

                        {/* پیام */}
                        <div className="w-full right-6 sm:w-[92%] relative flex">
                            <p className="absolute -top-2 right-4 bg-[#1C1C1C] z-10 px-2 text-xs text-[#AAAAAA]">
                                پیام شما :
                            </p>
                            <Textarea
                                className="h-[109px] border py-[10px] text-center flex justify-center items-center border-gray-400 rounded-2xl text-[#AAAAAA]"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsForm
