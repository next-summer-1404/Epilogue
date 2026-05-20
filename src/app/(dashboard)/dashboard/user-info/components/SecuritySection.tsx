'use client';

import { useState } from "react";
import { Input } from "@heroui/react";

export default function SecuritySection() {
  const [formData, setFormData] = useState({
    firstName: "Tina",
    lastName: "Mahmoudi",
    email: "tina@example.com",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/update-security", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("خطا در ارسال اطلاعات");
      alert("اطلاعات با موفقیت به‌روزرسانی شد");
    } catch (err) {
      console.error(err);
      alert("مشکلی پیش آمده");
    }
  };

  return (
    <div className="p-4 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* سمت راست: عنوان و دکمه ها */}
        <div className="flex flex-col justify-between text-right md:w-1/3 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">امنیت</h2>
            <p className="text-sm text-gray-500">میتوانید در این بخش رمز خود را تغییر دهید</p>
          </div>

          <div className="flex gap-4">
            <p className="flex justify-center items-center text-[#888888] cursor-pointer">انصراف</p>
            <button
              onClick={handleSubmit}
              className="flex justify-center items-center w-[130px] h-[40px] rounded-[12px] bg-[#8CFF45]"
            >
              اعمال تغییرات
            </button>
          </div>
        </div>

        {/* سمت چپ: فرم */}
        <div className="flex-1 flex flex-col gap-[19px] text-gray-300">
          {[
            { label: "نام :", value: formData.firstName, field: "firstName" },
            { label: "نام خانوادگی :", value: formData.lastName, field: "lastName" },
            { label: "ایمیل :", value: formData.email, field: "email" },
          ].map((item, idx) => (
            <div key={idx} className="w-full sm:w-[70%] lg:w-[335px] relative">
              <p className="absolute -top-2 right-4 bg-[#FFFFFF] z-10 px-2 text-xs text-[#AAAAAA]">
                {item.label}
              </p>
              <Input
                value={item.value}
                onChange={(e: any) => handleChange(item.field, e.target.value)}
                className="h-[50px] border py-[10px] border-gray-400 rounded-2xl text-[#AAAAAA] w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
