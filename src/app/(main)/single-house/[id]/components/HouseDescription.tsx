'use client'
import React, { useState } from "react"

const HouseDescription = () => {
  const [activeTab, setActiveTab] = useState("about")

  const activeStyle =
    "w-[140px] h-[44px] bg-[#8CFF45] text-black rounded-xl flex items-center justify-center shadow-[0px_8px_10px_0px_#8CFF4529,2px_2px_12px_0px_#FFFFFF33_inset,-1px_-1px_4px_0px_#00000014_inset]"
  const inactiveStyle =
    "w-[123px] h-[20px] text-[#AAAAAA] bg-transparent rounded-md flex items-center justify-center"

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-10">
      <div className="w-full h-[52px] rounded-2xl bg-[#393939] flex flex-wrap sm:flex-nowrap items-center justify-start gap-2 sm:gap-6 px-2 mb-8">
        <button
          onClick={() => setActiveTab("about")}
          className={`${activeTab === "about" ? activeStyle : inactiveStyle} transition-all duration-200 font-medium text-[16px] capitalize`}
        >
          درباره ملک
        </button>
        <button
          onClick={() => setActiveTab("features")}
          className={`${activeTab === "features" ? activeStyle : inactiveStyle} transition-all duration-200 font-medium text-[16px] capitalize`}
        >
          امکانات اقامتگاه
        </button>
        <button
          onClick={() => setActiveTab("location")}
          className={`${activeTab === "location" ? activeStyle : inactiveStyle} transition-all duration-200 font-medium text-[16px] capitalize`}
        >
          موقعیت ملک
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`${activeTab === "reviews" ? activeStyle : inactiveStyle} transition-all duration-200 font-medium text-[16px] capitalize`}
        >
          نظرات کاربران
        </button>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-8">
        {activeTab === "about" && (
          <div className="w-full text-justify text-sm sm:text-base leading-7 text-gray-200">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 w-full justify-items-center">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className="w-full sm:w-[127.4px] h-[100px] bg-[#3F3F3F] rounded-[16px] flex items-end justify-center"
              >
                <div
                  className="w-full sm:w-[111.41px] h-[40px] rounded-[10px] bg-[#7569FF] my-5"
                  style={{
                    boxShadow: `
                      -1px -1px 6px 0px #0000001F inset,
                      2px 2px 8px 0px #FFFFFF1F inset,
                      0px 8px 16px 0px #7569FF33
                    `,
                  }}
                ></div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "location" && (
          <div className="flex flex-row gap-6 w-full justify-center mt-6">
            <div
              className="bg-[#3F3F3F] rounded-[48px] opacity-100"
              style={{
                width: "678px",
                height: "324px",
              }}
            ></div>
            <div
              className="w-[678px] h-[324px] flex items-center justify-center text-white text-justify leading-7"
              style={{
                background: "transparent",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-col gap-6 w-full items-end mt-6">
            <div className="flex flex-wrap gap-4 justify-end w-full">
              <div className="relative flex flex-col items-end">
                <label className="absolute -top-2 right-3 bg-[#232323] px-1 text-[13px] font-medium text-white">
                  نام و نام خانوادگی :
                </label>
                <input
                  type="text"
                  className="w-full sm:w-[186px] h-[53px] bg-[#232323] border border-white rounded-[16px] px-3 text-white text-right"
                />
              </div>
              <div className="relative flex flex-col items-end">
                <label className="absolute -top-2 right-3 bg-[#232323] px-1 text-[13px] font-medium text-[#AAAAAA]">
                  ایمیل شما :
                </label>
                <input
                  type="email"
                  className="w-full sm:w-[186px] h-[53px] bg-[#232323] border border-[#AAAAAA] rounded-[16px] px-3 text-white text-right"
                />
              </div>
              <div className="relative flex flex-col items-end flex-1">
                <label className="absolute -top-2 right-3 bg-[#232323] px-1 text-[13px] font-medium text-[#AAAAAA]">
                  برای نظر :
                </label>
                <input
                  type="text"
                  className="w-full h-[53px] bg-[#232323] border border-[#AAAAAA] rounded-[16px] px-3 text-white text-right"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-4 w-full">
              <div className="relative flex flex-col items-end flex-1">
                <label className="absolute -top-2 right-3 bg-[#232323] px-1 text-[13px] font-medium text-[#AAAAAA]">
                  پاسخ شما :
                </label>
                <input
                  type="text"
                  className="w-full h-[53px] bg-[#232323] border border-[#AAAAAA] rounded-[16px] px-3 text-white text-right"
                />
              </div>
              <button className="w-full sm:w-[111px] h-[53px] bg-[#8CFF45] rounded-[10px] shadow-[0px_8px_16px_0px_#8CFF4514] text-black font-medium">
                ارسال نظر
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HouseDescription
