import Image from "next/image";
import agha from "../icons/agha.png";

export default function Footer() {
  return (
    <footer className="bg-[#8CFF45] rounded-3xl p-6 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-8">

        {/* Right Side: Form */}
        <div className="flex-1 text-black flex flex-col">
          <p className="text-gray-700 pb-4 sm:pb-6 text-sm sm:text-base">همیشه کنارتیم ►►</p>
          <h2 className="text-lg sm:text-xl md:text-2xl pb-4 sm:pb-6">
            ۲۴ ساعت روز و ۷ روز هفته در اختیار شما هستیم!
          </h2>
          <p className="text-sm leading-relaxed pb-4 sm:pb-6">
            تیم دلتا با ارائه بهترین نیروهای خدماتی و سرویس‌های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد.
          </p>

          <form className="flex flex-col gap-6 pt-4 sm:pt-10">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="نام و نام خانوادگی ...."
                className="border border-[#363636] rounded-2xl px-4 py-2 flex-1 min-w-0 h-[50px] sm:h-[59px]"
              />
              <input
                type="text"
                placeholder="شماره یا ایمیل ...."
                className="border border-[#363636] rounded-2xl px-4 py-2 flex-1 min-w-0 h-[50px] sm:h-[59px]"
              />
            </div>
            <textarea
              placeholder="پیام شما : ...."
              rows={6}
              className="border border-[#363636] rounded-2xl px-4 py-2 resize-none w-full"
            />

            <button
              type="submit"
              className="bg-[#363636] text-white rounded-2xl py-3 hover:bg-gray-800 transition-colors w-full sm:w-auto sm:px-12"
            >
              ارسال پیام
            </button>
          </form>
        </div>

        {/* Left Side: Image */}
        <div className="flex justify-center lg:justify-end flex-1">
          <div className="w-full max-w-[400px] sm:max-w-[480px]">
            <Image
              src={agha}
              alt="Man smiling"
              className="rounded-lg w-full h-auto"
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#232323] rounded-[40px] sm:rounded-[56px] p-6 sm:p-8 text-gray-400 text-xs sm:text-sm max-w-7xl mx-auto mt-10 flex flex-col gap-8">
        <div className="flex flex-col">
          <h3 className="text-white text-2xl sm:text-[32px] py-2 sm:py-4">پلتفرم دلتا</h3>

          <div className="flex flex-col md:flex-row gap-10 flex-wrap">

            {/* Platform Info */}
            <div className="md:flex-[0.4] min-w-[250px]">
              <p className="leading-relaxed">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
              <div className="flex gap-2 pt-6">
                {["E", "G", "C"].map((text) => (
                  <div
                    key={text}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-black text-sm sm:text-xs font-bold"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Reservation */}
            <div className="md:flex-[0.2]">
              <h3 className="text-white mb-2">نحوه رزرو اقامتگاه</h3>
              <ul className="space-y-1">
                <li>راهنمای رزرو اقامتگاه</li>
                <li>شیوه پرداخت</li>
                <li>قوانین رزرو اقامتگاه</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="md:flex-[0.2] min-w-[160px]">
              <h3 className="text-white mb-2">خدمات مشتریان</h3>
              <ul className="space-y-1">
                <li>پرسش‌های متداول مهمان</li>
                <li>پرسش‌های متداول میزبان</li>
                <li>چطور اقامتگاه ثبت کنم؟</li>
                <li>حریم شخصی کاربران</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:flex-[0.2] min-w-[200px]">
              <h3 className="text-white mb-2">راه ارتباطی دلتا</h3>
              <ul className="space-y-1">
                <li>۰۹۲۳۹۱۷۱۹۴۶ - ۰۹۱۵۶۵۶۹۸۷۳</li>
                <li>Delta@gmail.com</li>
                <li>گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</li>
              </ul>
            </div>
          </div>

          <div className="border-b border-white mt-8 w-full" />

          <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
            <p className="text-white text-xs text-center sm:text-start">
              تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است.
            </p>
            <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 text-white text-lg">
              <a href="#" aria-label="Whatsapp" className="hover:text-green-400 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl"></a>
              <a href="#" aria-label="Youtube" className="hover:text-red-600 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl"></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl"></a>
              <a href="#" aria-label="Linkedin" className="hover:text-blue-500 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
