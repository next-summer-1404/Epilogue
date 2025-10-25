import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FileContainer from '../SecondSection/FileContainer'
import ThirdOneSec from './ThirdOneSec'

const ThirdSection = () => {
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
        <div className="w-full  flex flex-col py-[156px] rounded-b-[64px] gap-6 bg-[#2D2D2D]">
            <div className='text-center'>
                <h3 className="text-[16px] md:text-xl font-semibold text-[#8CFF45]">
                    مقصد رویا ها
                </h3>
                <p className="text-[#FFFFFF] text-[32px] ">
                    اجاره ویلا در محبوب ترین مقاصد این ماه            </p>
                <p className="text-[#FFFFFF] text-[16px] ">
                    در اینجا می توانید محبوب ترین مقصد هارا از بین انتخاب کاربران مشاهده کنید و آن ها بررسی کنید !
                </p>
            </div>
            <div className='px-[37px] py-[56px]'>
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

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className=''>
                <ThirdOneSec />

            </div>
        </div>
    )
}

export default ThirdSection
