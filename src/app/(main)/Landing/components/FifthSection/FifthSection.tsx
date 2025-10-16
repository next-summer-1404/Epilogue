import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FileContainer from '../SecondSection/FileContainer'
import Link from 'next/link'

const FifthSection = () => {
    const cards = [
        { id: 1, title: "پیشنهاد ویلا شمال", tag: "4.5", background: "#393939" },
        { id: 2, title: "پیشنهاد سوئیت تهران", tag: "3", background: "#444444" },
        { id: 3, title: "پیشنهاد ساحلی کیش", tag: "2", background: "#3B3B3B" },
        { id: 4, title: "پیشنهاد لاکچری شیراز", tag: "1.5", background: "#404040" },
        { id: 5, title: "پیشنهاد جنگلی ماسال", tag: "5", background: "#3C3C3C" },
        { id: 6, title: "پیشنهاد مدرن تهران", tag: "4", background: "#3F3F3F" },
        { id: 7, title: "پیشنهاد کوهستانی کردستان", tag: "3.5", background: "#414141" },
        { id: 8, title: "پیشنهاد لوکس قشم", tag: "3", background: "#424242" },
    ]
    return (
        <div className="w-full px-[37px]  flex flex-col py-[62px] rounded-b-[64px] gap-6 bg-[#2D2D2D]">
            <div className="flex flex-col md:flex-row justify-between  gap- pb-[50px]">
                <div className='flex flex-col gap-6'>
                    <p className="text-[14px] md:text-[16px] text-[#8CFF45]">خونه از خودت میخوای !</p>
                    <div className='flex'>
                        <p className="text-[24px] md:text-[32px] text-[#FFFFFF]">خرید و فروش ملک در دلتا</p>


                    </div>
                </div>
                <Link
                    href="/reserv"
                    className="flex items-center justify-center text-[14px] md:text-[16px] h-[36px] w-[120px] md:w-[129px] border border-[#FFFFFF] text-[#FFFFFF] rounded-[12px]"
                >
                    مشاهده همه
                </Link>
            </div>
            <div className=' py-[56px]'>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    breakpoints={{
                        640: { slidesPerView: 2, slidesPerGroup: 2 },
                        1024: { slidesPerView: 3, slidesPerGroup: 3 },
                        1280: { slidesPerView: 4, slidesPerGroup: 4 },
                    }}
                    className="h-fit"
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id} className="flex flex-col items-center">
                            <FileContainer
                                background={card.background}
                                radius="md"
                                size="md"
                                label={card.tag}
                                labelHeight="40px"
                                labelWidth="120px"
                                tagHeight="40px"
                                width="100%"
                                classNames={{
                                    base: "w-full h-fit p-4 pt-[32px] hover:bg-[#8CFF45] transition-all duration-300",
                                    innerLabel: "!p-1 py-3 px-4 flex justify-center items-center rounded-[10px] bg-amber-50",
                                    wrapperLabel: "py-3 px-4 bg-amber-50",
                                }}
                            >
                                <div className="flex flex-col gap-4 justify-between h-full">
                                    <div className="p-3 py-14 bg-[#444444] rounded-[20px] text-[18px] text-[#8CFF45]"></div>
                                </div>
                            </FileContainer>

                            {/* جزئیات زیر کارت */}
                            <div className="flex flex-col w-full max-w-[306px] py-6 gap-3">
                                <div className="flex  text-white">
                                    <p className="text-[14px] md:text-[16px] truncate">{card.title}</p>

                                </div>

                                <div className="flex flex-col gap-2 text-white text-[13px] md:text-[14px]">
                                    <p>گیلان ، رشت</p>
                                    <p>2 خوابه ، 2 حمامه ، ظرفیت 6 نفر</p>
                                </div>

                                <div className="w-full h-[36px] flex justify-between px-4 text-[#AAAAAA] bg-[#444444] rounded-[12px] mt-2">
                                    <p className='items-center justify-center flex '> اجاره ماهیانه :</p>
                                    <p className='items-center justify-center flex'>5.000.000 ت/ هر ماه</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* slid2 */}
            <div className=" py-10">
                <FileContainer
                    background="#232323"
                    radius="lg"
                    size="md"
                    label=""
                    labelHeight="50px"
                    labelWidth="180px"
                    tagHeight="50px"
                    width="100%"
                    classNames={{
                        base: "w-full h-fit p-4 md:p-8 pt-[32px] group-hover:!bg-blue-700",
                        innerLabel: "!p-3 flex justify-center items-center",
                        wrapperLabel: "group-hover:!bg-blue-700",
                    }}
                >
                    {/* بخش عنوان */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6">
                        <div>
                            <p className="text-[14px] md:text-[16px] text-[#8CFF45]">جدید ترین نقاط</p>
                            <p className="text-[24px] md:text-[32px] text-[#FFFFFF]">جدید ترین مناقط تفریحی</p>
                        </div>
                        <Link
                            href="/reserv"
                            className="flex items-center justify-center text-[14px] md:text-[16px] h-[36px] w-[120px] md:w-[129px] border border-[#FFFFFF] text-[#FFFFFF] rounded-[12px]"
                        >
                            مشاهده همه
                        </Link>
                    </div>

                    {/* اسلایدر */}
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        breakpoints={{
                            640: { slidesPerView: 2, slidesPerGroup: 2 },
                            1024: { slidesPerView: 3, slidesPerGroup: 3 },
                            1280: { slidesPerView: 4, slidesPerGroup: 4 },
                        }}
                        className="h-fit"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id} className="flex flex-col items-center">
                                <FileContainer
                                    background={card.background}
                                    radius="md"
                                    size="md"
                                    label={card.tag}
                                    labelHeight="40px"
                                    labelWidth="120px"
                                    tagHeight="40px"
                                    width="100%"
                                    classNames={{
                                        base: "w-full h-fit p-4 pt-[32px] hover:bg-[#8CFF45] transition-all duration-300",
                                        innerLabel: "!p-1 py-3 px-4 flex justify-center items-center rounded-[10px] bg-amber-50",
                                        wrapperLabel: "py-3 px-4 bg-amber-50",
                                    }}
                                >
                                    <div className="flex flex-col gap-4 justify-between h-full">
                                        <div className="p-3 py-14 bg-[#444444] rounded-[20px] text-[18px] text-[#8CFF45]"></div>
                                    </div>
                                </FileContainer>

                                {/* جزئیات زیر کارت */}
                                <div className="flex flex-col w-full max-w-[306px] py-6 gap-3">
                                    <div className="flex justify-between items-center text-white">
                                        <p className="text-[14px] md:text-[16px] truncate">{card.title}</p>
                                        <div className="w-[48px] md:w-[54px] h-[28px] md:h-[32px] flex items-center justify-center rounded-[10px] md:bg-[#FF5555]">
                                            1
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 text-white text-[13px] md:text-[14px]">
                                        <p>گیلان ، رشت</p>
                                        <p>2 خوابه ، 2 حمامه ، ظرفیت 6 نفر</p>
                                    </div>

                                    <div className="w-full h-[36px] bg-[#8CFF45] rounded-[12px] mt-2"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FileContainer>
            </div>
        </div>
    )
}

export default FifthSection
