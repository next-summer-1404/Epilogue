'use client';

export default function PersonalInfoSection() {
  return (
    <div className="p-4 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* سمت راست: عنوان و دکمه ها */}
        <div className="flex flex-col justify-between text-right md:w-1/3 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">اطلاعات فردی</h2>
            <p className="text-sm text-gray-500">میتوانید اطلاعات فردی خود را تغییر دهید</p>
          </div>

          <div className="flex gap-4">
            <p className="flex justify-center items-center text-[#888888] cursor-pointer">انصراف</p>
            <button className="flex justify-center items-center w-[130px] h-[40px] rounded-[12px] bg-[#8CFF45]">
              اعمال تغییرات
            </button>
          </div>
        </div>

        {/* سمت چپ: فرم اطلاعات */}
        <div className="flex-1 flex flex-col gap-4 text-gray-300">
          <div>
            <label className="block text-sm text-gray-400 mb-1">نام کامل</label>
            <input
              type="text"
              defaultValue="Tina Mahmoudi"
              className="h-[50px] border border-gray-400 rounded-2xl px-3 py-[10px] text-center flex justify-center items-center text-[#AAAAAA] w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">ایمیل</label>
            <input
              type="email"
              defaultValue="tina@example.com"
              className="h-[50px] border border-gray-400 rounded-2xl px-3 py-[10px] text-center flex justify-center items-center text-[#AAAAAA] w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">شماره تماس</label>
            <input
              type="tel"
              defaultValue="0912xxxxxxx"
              className="h-[50px] border border-gray-400 rounded-2xl px-3 py-[10px] text-center flex justify-center items-center text-[#AAAAAA] w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">شهر</label>
            <input
              type="text"
              defaultValue="Tehran"
              className="h-[50px] border border-gray-400 rounded-2xl px-3 py-[10px] text-center flex justify-center items-center text-[#AAAAAA] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
