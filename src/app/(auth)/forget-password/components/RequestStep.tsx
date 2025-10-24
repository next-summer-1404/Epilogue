'use client';

import { Button, Input } from '@heroui/react';
import AuthForm from '../../components/AuthForm';
import Link from 'next/link';

const RequestStep = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <div className="flex flex-col gap-8 w-full max-w-[588px] mb-6">
        <div className="w-full relative">
          <div className="relative">
            <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[13px] font-medium leading-none z-10 whitespace-nowrap">
              ایمیل شما <span className="text-red-500">*</span>
            </label>
            <Input
              name="email"
              type="email"
              required
              variant="bordered"
              classNames={{
                inputWrapper: [
                  "w-full max-w-[588px] h-[53px]",
                  "bg-[#232323]",
                  "rounded-[16px]",
                  "border-1 border-[#DDDDDD]",
                  "shadow-[2px_2px_0px_0px_#363636]",
                  "hover:bg-[#232323]",
                  "data-[hover=true]:bg-[#232323]",
                  "group-data-[focus=true]:bg-[#232323]",
                  "group-data-[focus=true]:border-[#8CFF45]",
                  "transition-all"
                ].join(" "),
                input: [
                  "text-right pr-4 text-white text-[16px]",
                  "bg-transparent",
                  "outline-none",
                  "placeholder:text-[#AAAAAA]",
                  "w-full"
                ].join(" "),
                innerWrapper: "h-full"
              }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[588px] mt-6">
          <Link href="/login" className="flex-1">
            <Button
              type="button"
              className="w-full h-[44px] bg-[#232323] border border-white text-white text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#303030] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200"
            >
              بازگشت به صفحه ورود
            </Button>
          </Link>
          <Button
            type="submit"
            className="flex-1 h-[44px] bg-[#8CFF45] text-[#363636] text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200 shadow-[-1px_-1px_6px_0px_#0000000A_inset,2px_2px_8px_0px_#FFFFFF29_inset,0px_6px_16px_0px_#8CFF4533]"
          >
            ارسال کد تایید
          </Button>
        </div>
      </div>
    </AuthForm>
  );
};

export default RequestStep;