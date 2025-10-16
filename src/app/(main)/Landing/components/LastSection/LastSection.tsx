import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FileContainer from '../SecondSection/FileContainer'

const LastSection = () => {
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
        <div>
            <div className='flex flex-col gap-6 pt-[134px] items-center justify-center text-center px-4'>
                <p className='text-[#8CFF45] text-[16px]'>نظرا  کاربران</p>
                <p className='text-[#FFFFFF] text-[32px]'>رضایت شما اعتبار و ارزش دلتا را می سازد !</p>
                <p className='text-[#FFFFFF] text-[16px] max-w-[600px] text-nowrap leading-relaxed'>
                    تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .                </p>
            </div>
            <div className=' py-[56px]'>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={2}        // موبایل: 1 اسلاید
                    slidesPerGroup={2}
                    breakpoints={{
                        640: { slidesPerView: 2, slidesPerGroup: 2 },   // تبلت و بالاتر: 2 کارت در هر اسلاید
                        1024: { slidesPerView: 2, slidesPerGroup: 2 },  // دسکتاپ: 2 کارت در هر اسلاید
                        1280: { slidesPerView: 2, slidesPerGroup: 2 },  // بزرگتر از دسکتاپ: 2 کارت
                    }}
                    className="h-fit"
                >

                    {cards.map((card) => (
                        <SwiperSlide key={card.id} className="flex flex-col items-center">
                            <FileContainer
                                background={"#393939"}
                                radius="md"
                                size="md"
                                label={card.tag}
                                labelHeight="40px"
                                labelWidth="120px"
                                tagHeight="40px"
                                width="678px"
                                height='309px'
                                classNames={{
                                    base: "w-full h-fit p-4 md:p-8 pt-[32px] group-hover:!bg-blue-700",
                                    innerLabel: "!p-1 py-3 px-4 flex justify-center items-center rounded-[10px] bg-amber-50",
                                    wrapperLabel: "py-3 px-4 bg-amber-50",
                                }}
                            >
                                <div className="flex flex-col gap-6  h-full">
                                    <p className='text-[#FFFFFF]'>” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد.... “</p>
                                    <div className='flex gap-4  h-[81px] px-4 rounded-[24px] items-center bg-[#444444] '>
                                        <div className='w-10 h-10 rounded-[12px] items-center  bg-amber-50'></div>

                                        <div className="   text-[#AAAAAA] bg-[#444444]  mt-2">
                                            <p className='items-center  '> اجاره ماهیانه :</p>
                                            <p className='items-center '>5.000.000 ت/ هر ماه</p>
                                        </div>
                                    </div>
                                </div>
                            </FileContainer>
                        </SwiperSlide>
                    ))}
                </Swiper>            </div>
        </div>
    )
}

export default LastSection
