'use client';

import AuthForm from '../../components/AuthForm';
import { Button, Input } from '@heroui/react';

const VerifyStep = () => {
  return (
    <AuthForm onSubmit={() => {}}>
      <div className="flex flex-col gap-8 w-full max-w-[588px] mb-6">
        <div className="w-full relative">
          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="flex gap-1 justify-center flex-1">
                {[0, 1, 2, 3, 4].map((index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    variant="bordered"
                    classNames={{
                      inputWrapper: [
                        "w-11 h-11",
                        "min-w-11",
                        "bg-[#232323]",
                        "rounded-[12px]",
                        "border-1 border-[#565656]",
                        "hover:bg-[#232323]",
                        "data-[hover=true]:bg-[#232323]",
                        "group-data-[focus=true]:bg-[#232323]",
                        "group-data-[focus=true]:border-[#8CFF45]",
                        "transition-all",
                        "p-0",
                        "flex",
                        "items-center",
                        "justify-center"
                      ].join(" "),
                      input: [
                        "text-center text-white text-[16px] font-medium",
                        "bg-transparent",
                        "outline-none",
                        "w-full",
                        "p-0",
                        "text-center",
                        "flex",
                        "items-center",
                        "justify-center",
                        "h-full", 
                        "leading-none"
                      ].join(" "),
                      innerWrapper: [
                        "h-full",
                        "justify-center",
                        "items-center",
                        "text-center",
                        "flex",
                        "min-h-full"
                      ].join(" ")
                    }}
                  />
                ))}
              </div>
              
              <Button
                type="button"
                className="w-[226px] h-[34px] rounded-[10px] bg-transparent border-2 border-[#303030] text-white hover:bg-gray-800 transition-all text-[12px] font-semibold"
              >
                ارسال رمز
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[588px] mt-6">
          <Button
            type="button"
            className="flex-1 h-[44px] bg-[#232323] border border-white text-white text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#303030] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200"
          >
            تغییر ایمیل
          </Button>
          <Button
            type="button"
            className="flex-1 h-[44px] bg-[#8CFF45] text-[#363636] text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200 shadow-[-1px_-1px_6px_0px_#0000000A_inset,2px_2px_8px_0px_#FFFFFF29_inset,0px_6px_16px_0px_#8CFF4533]"
          >
            ساخت حساب کاربری
          </Button>
        </div>
      </div>
    </AuthForm>
  );
};

export default VerifyStep;