"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FileContainer from "../SecondSection/FileContainer";
import "swiper/css";

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
  ];

  return (
<section className="w-full px-4 sm:px-6 lg:px-12 py-20">
  {/* عنوان بالا */}
  <div className="flex flex-col gap-4 sm:gap-6 items-center text-center max-w-2xl mx-auto">
    <p className="text-[#8CFF45] text-sm sm:text-base">نظر کاربران</p>
    <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] font-semibold leading-tight">
      رضایت شما اعتبار و ارزش دلتا را می‌سازد!
    </h2>
    <p className="text-[#FFFFFF] text-sm sm:text-base leading-relaxed">
      تیم دلتا با ارائه بهترین نیروهای خدماتی و سرویس‌های املاکی سعی دارد تا بتواند
      در تمام لحظات کنار شما باشد.
    </p>
  </div>

  {/* اسلایدر کارت‌ها */}
  <div className="py-12 overflow-hidden">
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      slidesPerGroup={1}
      breakpoints={{
        640: { slidesPerView: 1.2, spaceBetween: 20 },
        768: { slidesPerView: 1.5, spaceBetween: 24 },
        1024: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
        1440: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 32 },
      }}
    >
      {cards.map((card) => (
        <SwiperSlide
          key={card.id}
          className="flex flex-col items-center justify-center"
        >
          <FileContainer
            background={card.background}
            radius="md"
            size="md"
            label={card.tag}
            labelHeight="40px"
            labelWidth="120px"
            tagHeight="40px"
            width="100%"
            height="auto"
            classNames={{
              base: "w-full h-full max-w-[640px] p-4 sm:p-6 md:p-8 transition group-hover:!bg-blue-700",
              innerLabel:
                "!p-1 py-3 px-4 flex justify-center items-center rounded-[10px] bg-amber-50",
              wrapperLabel: "py-3 px-4 bg-amber-50",
            }}
          >
            <div className="flex flex-col gap-6">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                کاربرد.... “
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#444444] rounded-[24px]">
                <div className="w-10 h-10 bg-amber-50 rounded-[12px]" />
                <div className="text-[#AAAAAA]">
                  <p>اجاره ماهیانه :</p>
                  <p>۵.۰۰۰.۰۰۰ ت / هر ماه</p>
                </div>
              </div>
            </div>
          </FileContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
};

export default LastSection;
