import Image from "next/image";
import agha from '../icons/agha.png';

export default function Footer() {
    return (
        <footer className="bg-[#8CFF45] rounded-3xl p-8 md:p-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* Right Side: Form */}
                <div className="lg:flex-1/12 text-black flex flex-col ">
                    <p className=" text-gray-700 pb-6">همیشه کنارتیم ►►</p>
                    <h2 className="text-xl md:text-2xl pb-6">
                        ۲۴ ساعت روز و ۷ روز هفته در اختیار شما هستیم!
                    </h2>
                    <p className="text-sm pb-2">
                        تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارند تا بتواند در تمام لحظات کنار شما باشد.
                    </p>

                    <form className="flex flex-col gap-[42px] pt-10">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="نام و نام خانوادگی ...."
                                className="border border-[#363636] rounded-2xl px-4 py-2 w-[297px] h-[59px]"
                            />
                            <input
                                type="text"
                                placeholder="شماره یا ایمیل ...."
                                className="border border-[#363636] rounded-2xl px-4 py-2 w-[297px] h-[59px]"
                            />
                        </div>
                        <textarea
                            placeholder="پیام شما : ...."
                            rows={6}
                            className="border border-[#363636] rounded-2xl px-4 py-2 resize-none w-[610px]"
                        />

                        <button
                            type="submit"
                            className="bg-[#363636] text-white rounded-2xl py-2 hover:bg-gray-800 w-[610px] h-11 transition-colors"
                        >
                            ارسال پیام
                        </button>
                    </form>
                </div>

                {/* Left Side: Image */}
                <div className="lg:flex-[0.9] flex justify-center lg:justify-end">
                    <div className="w-full max-w-[524px] h-auto">
                        <Image
                            src={agha}
                            alt="Man smiling"
                            className="rounded-lg"
                            layout="responsive"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#232323] rounded-[56px] p-8 text-gray-400 text-xs md:text-sm max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:gap-8">
                <div className="flex flex-col ">
                    <h3 className="text-white text-[32px] py-4">پلتفرم دلتا</h3>

                    <div className="flex flex-row gap-8 flex-wrap">

                        {/* Platform Info */}
                        <div className="md:flex-[0.4]  md:mb-0 min-w-[280px]">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ..
                            </p>
                            <div className="flex gap-2 pt-8">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black text-xs font-bold">E</div>
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black text-xs font-bold">G</div>
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black text-xs font-bold">C</div>
                            </div>
                        </div>

                        {/* Reservation */}
                        <div className="md:flex-[0.2] mb-6 ">
                            <h3 className="text-white mb-2">نحوه رزرو اقامتگاه</h3>
                            <ul className="space-y-1 text-gray-400">
                                <li>راهنمای رزرو اقامتگاه</li>
                                <li>شیوه پرداخت</li>
                                <li>قوانین رزرو اقامتگاه</li>
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div className="md:flex-[0.2] mb-6 md:mb-0 min-w-[160px]">
                            <h3 className="text-white mb-2">خدمات مشتریان</h3>
                            <ul className="space-y-1 text-gray-400 ">
                                <li>پرسش های متداول مهمان</li>
                                <li>پرسش های متداول میزبان</li>
                                <li>چطور اقامتگاه ثبت کنم؟</li>
                                <li>حریم شخصی کاربران</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="md:flex-[0.2] min-w-[200px]">
                            <h3 className="text-white mb-2">راه ارتباطی دلتا</h3>
                            <ul className="space-y-1 text-gray-400">
                                <li>۰۹۲۳۹۱۷۱۹۴۶ - ۰۹۱۵۶۵۶۹۸۷۳</li>
                                <li>Delta@gmail.com</li>
                                <li>گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</li>
                            </ul>


                        </div>
                    </div>

                    {/* اصلاح خط پایین */}
                    <div className="border-b border-white pt-10  w-full" />
                    <div className="flex py-6">
                               <p className="text-white flex justify-start text-xs ">
                        تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است .
                    </p>
                    <div className="flex justify-end gap-4 flex-1 text-white text-lg">
                        <a href="#" aria-label="Whatsapp" className="hover:text-green-400 w-10 h-10 bg-white rounded-2xl"></a>
                        <a href="#" aria-label="Youtube" className="hover:text-red-600 w-10 h-10 bg-white rounded-2xl"></a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500 w-10 h-10 bg-white rounded-2xl"></a>
                        <a href="#" aria-label="Linkedin" className="hover:text-blue-500 w-10 h-10 bg-white rounded-2xl"></a>
                    </div>    
                    </div>

         
                </div>
            </div>
        </footer>
    );
}
