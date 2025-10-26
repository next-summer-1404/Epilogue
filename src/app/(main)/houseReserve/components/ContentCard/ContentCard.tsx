'use client'
import FileContainer from '@/components/common/FileContainer'
import Image from 'next/image'
import React from 'react'
import StarS from "@/assets/images/StarS.png";


interface ContentCardProps {
    rating: string
    title: string
    addres: string
    time: string
    image: string
    price: number
}

const ContentCard: React.FC<ContentCardProps> = ({ rating, title, addres, time, image, price }) => {
    return (
        <div className="rounded-2xl overflow-hidden py-4">
            <div className="flex flex-col lg:flex-row gap-4">

                {/* تصویر */}
                <div className="relative w-full lg:w-[158px] h-48 sm:h-56 lg:h-64 flex-shrink-0">
                    <FileContainer
                        background="#232323"
                        radius="md"
                        size="md"
                        label=""
                        labelHeight="20px"
                        labelWidth="60px"
                        width="198px"
                        height="164px"
                        classNames={{
                            base: "group-hover:!bg-blue-700",
                            innerLabel: "!p-0 flex justify-center items-center",
                            wrapperLabel: "group-hover:!bg-blue-700",
                        }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </FileContainer>
                </div>

                {/* متن و جزئیات */}
                <div className="flex flex-col lg:flex-row flex-1 gap-4 lg:gap-12 px-0 lg:px-12">

                    {/* بخش اطلاعات اصلی */}
                    <div className="flex flex-col gap-4 flex-1">
                        <div className='h-[28px] w-[82px] flex rounded-[8px] items-center justify-center bg-[#7569FF] gap-1'>
                            <Image src={StarS} alt="ستاره" width={16} height={16} />
                            <p className='text-[13px]'>{rating} ستاره</p>
                        </div>
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-gray-300 text-sm">آدرس : {addres}</p>
                        <p className="text-gray-300 text-sm">مدت زمان : {time}</p>
                    </div>

                    {/* بخش قیمت و دکمه */}
                    <div className="flex flex-col gap-10 lg:items-end">
                        <div className='flex gap-3 flex-wrap'>
                            <p>2,500,000,000 ت</p>
                            <div className='w-[54px] h-[28px] bg-[#FF5555] rounded-[8px] flex justify-center items-center'>Off %</div>
                        </div>
                        <p className='text-[#8CFF45] text-sm'>{price.toLocaleString()} ت</p>
                        <div className='w-full lg:w-[175px] h-[44px] flex justify-center items-center border border-[#8CFF45] hover:bg-[#8CFF45] text-[#8CFF45] hover:text-[#363636] rounded-[14px]'>
                            <p className=' text-sm'>بررسی و رزرو هتل</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full border border-b border-[#3B3B3B] mt-4'></div>
        </div>
    )
}

export default ContentCard
