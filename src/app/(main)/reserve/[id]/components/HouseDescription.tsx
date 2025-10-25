'use client'
import React, { useState } from "react"

const HouseDescription = () => {
  const [activeTab, setActiveTab] = useState("about")

  const activeStyle =
    "w-[140px] h-[44px] bg-[#8CFF45] text-black rounded-xl flex items-center justify-center shadow-[0px_8px_10px_0px_#8CFF4529,2px_2px_12px_0px_#FFFFFF33_inset,-1px_-1px_4px_0px_#00000014_inset]"
  const inactiveStyle =
    "w-[123px] h-[20px] text-[#AAAAAA] bg-transparent rounded-md flex items-center justify-center"

  return (
    <section className="flex flex-col items-center gap-6 sm:gap-8 w-full">
      <div className="w-full max-w-[999px] h-[52px] rounded-2xl bg-[#393939] flex items-center justify-start gap-6 px-2">
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
          onClick={() => setActiveTab("reviews")}
          className={`${activeTab === "reviews" ? activeStyle : inactiveStyle} transition-all duration-200 font-medium text-[16px] capitalize`}
        >
          نظرات کاربران
        </button>
      </div>

      <div className="w-full max-w-[1080px] rounded-2xl flex items-start justify-center overflow-hidden px-8 py-6">
        {activeTab === "about" && (
          <div className="flex flex-col gap-6 w-full">
            <div className="w-[466px] h-[30px] rounded-md">بهترین سبک طراحی وبسایت در سال 2024 چیست ؟</div>
            <div className="w-[999px] h-[108px] rounded-md">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.....</div>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="w-[445px] h-[391px] rounded-[64px] border border-[#555] shadow-[0px_8px_32px_0px_#00000029]"></div>
              <div className="w-[534px] h-[391px] rounded-[64px] border border-[#555] shadow-[0px_8px_32px_0px_#00000029]"></div>
            </div>
            <div className="w-[466px] h-[30px] rounded-md">بهترین سبک طراحی وبسایت در سال 2024 چیست ؟</div>
            <div className="w-[999px] h-[108px] rounded-md">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.....</div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid grid-cols-7 gap-4 w-full justify-items-center">
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={i}
                className="w-[127.4px] h-[94px] bg-[#3F3F3F] rounded-[16px] flex items-end justify-center"
              >
                <div
                  className="w-[111.41px] h-[37px] rounded-[10px] bg-[#7569FF] my-5"
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

        {activeTab === "reviews" && (
          <div className="flex flex-col gap-8 w-full items-center">
            <div className="flex flex-col gap-4 w-full items-end">
              <div className="flex flex-wrap gap-4 justify-end w-full">
                <div className="relative flex flex-col items-end">
                  <label className="absolute -top-2 right-3 bg-[#232323] px-1 text-[13px] font-medium text-white">
                    نام و نام خانوادگی :
                  </label>
                  <input
                    type="text"
                    className="w-[186px] h-[53px] bg-[#232323] border border-white rounded-[16px] px-3 text-white text-right"
                  />
                </div>
                <div className="relative flex flex-col items-end">
                  <label className="absolute -top-2 right-3 bg-[#232323] px-1 text-[13px] font-medium text-[#AAAAAA]">
                    ایمیل شما :
                  </label>
                  <input
                    type="email"
                    className="w-[186px] h-[53px] bg-[#232323] border border-[#AAAAAA] rounded-[16px] px-3 text-white text-right"
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

              <div className="flex items-center justify-end gap-4 w-full">
                <div className="relative flex flex-col items-end flex-1">
                  <label className="absolute -top-2 right-3 bg-[#232323] px-1 text-[13px] font-medium text-[#AAAAAA]">
                    پاسخ شما :
                  </label>
                  <input
                    type="text"
                    className="w-full h-[53px] bg-[#232323] border border-[#AAAAAA] rounded-[16px] px-3 text-white text-right"
                  />
                </div>
                <button className="w-[111px] h-[53px] bg-[#8CFF45] rounded-[10px] shadow-[0px_8px_16px_0px_#8CFF4514] text-black font-medium">
                  ارسال نظر
                </button>
              </div>
            </div>
            <div className="w-full h-[400px] border-2 border-[#AAAAAA] rounded-2xl mt-6"></div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HouseDescription
