'use client'
import Image from "next/image";
import agha from '../icons/agha.png';
import { useState, ChangeEvent } from 'react';
import { contactUsApi } from '@/core/services/api/contactUs.api';

export default function Footer() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isFormValid = title.trim() !== '' && message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);
    try {
      await contactUsApi({ title, message });
      setSuccessMsg('پیام شما با موفقیت ارسال شد!');
      setTitle('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMsg('ارسال پیام با خطا مواجه شد. لطفا دوباره تلاش کنید.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '297px',
    height: '59px',
    border: '1px solid #363636',
    borderRadius: '16px',
    padding: '0 16px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const textareaStyle: React.CSSProperties = {
    width: '610px',
    height: '120px',
    border: '1px solid #363636',
    borderRadius: '16px',
    padding: '8px 16px',
    outline: 'none',
    boxSizing: 'border-box',
    resize: 'none',
  };

  return (
    <footer className="bg-[#8CFF45] rounded-3xl p-8 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-1/12 text-black flex flex-col ">
          <p className=" text-gray-700 pb-6">همیشه کنارتیم ►►</p>
          <h2 className="text-xl md:text-2xl pb-6">۲۴ ساعت روز و ۷ روز هفته در اختیار شما هستیم!</h2>
          <p className="text-sm pb-2">تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارند تا بتواند در تمام لحظات کنار شما باشد.</p>

         <form className="flex flex-col gap-[42px] pt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col relative">
                <label className="absolute -top-2 right-4 bg-[#8CFF45] z-10 px-2 text-xs text-[#363636]"> نام و نام خانوادگی : </label>
                <input
                    type="text"
                    placeholder="وارد کنید..."
                    style={{
                    width: '297px',
                    height: '59px',
                    border: '1px solid #363636',
                    borderRadius: '16px',
                    padding: '0 16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>

                <div className="flex flex-col relative">
                <label className="absolute -top-2 right-4 bg-[#8CFF45] z-10 px-2 text-xs text-[#363636]"> شماره یا ایمیل : </label>
                <input
                    type="text"
                    placeholder="وارد کنید..."
                    style={{
                    width: '297px',
                    height: '59px',
                    border: '1px solid #363636',
                    borderRadius: '16px',
                    padding: '0 16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
            </div>

            <div className="flex flex-col relative">
                <label className="absolute -top-2 right-4 bg-[#8CFF45] z-10 px-2 text-xs text-[#363636]">پیام شما :</label>
                <textarea
                placeholder="..."
                rows={6}
                style={{
                    width: '610px',
                    height: '120px',
                    border: '1px solid #363636',
                    borderRadius: '16px',
                    padding: '8px 16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'none',
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div className="h-[24px] flex items-center">
                {successMsg && <p className="text-green-500">{successMsg}</p>}
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            </div>

            <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`bg-[#363636] text-white rounded-2xl py-2 w-[610px] h-11 transition-all duration-150 transform 
                ${isFormValid && !loading ? 'hover:bg-gray-800 hover:scale-105 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
            >
                {loading ? 'در حال ارسال...' : 'ارسال پیام'}
            </button>
        </form>

        </div>

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

      <div className="bg-[#232323] rounded-[56px] p-8 text-gray-400 text-xs md:text-sm max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:gap-8">
        <div className="flex flex-col ">
          <h3 className="text-white text-[32px] py-4">پلتفرم دلتا</h3>

          <div className="flex flex-row gap-8 flex-wrap">
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

            <div className="md:flex-[0.2] mb-6 ">
              <h3 className="text-white mb-2">نحوه رزرو اقامتگاه</h3>
              <ul className="space-y-1 text-gray-400">
                <li>راهنمای رزرو اقامتگاه</li>
                <li>شیوه پرداخت</li>
                <li>قوانین رزرو اقامتگاه</li>
              </ul>
            </div>

            <div className="md:flex-[0.2] mb-6 md:mb-0 min-w-[160px]">
              <h3 className="text-white mb-2">خدمات مشتریان</h3>
              <ul className="space-y-1 text-gray-400 ">
                <li>پرسش های متداول مهمان</li>
                <li>پرسش های متداول میزبان</li>
                <li>چطور اقامتگاه ثبت کنم؟</li>
                <li>حریم شخصی کاربران</li>
              </ul>
            </div>

            <div className="md:flex-[0.2] min-w-[200px]">
              <h3 className="text-white mb-2">راه ارتباطی دلتا</h3>
              <ul className="space-y-1 text-gray-400">
                <li>۰۹۲۳۹۱۷۱۹۴۶ - ۰۹۱۵۶۵۶۹۸۷۳</li>
                <li>Delta@gmail.com</li>
                <li>گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</li>
              </ul>
            </div>
          </div>

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
