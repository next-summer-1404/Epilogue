'use client';
import AuthForm from '../components/AuthForm';
import { Input, Button } from '@heroui/react';
import Link from 'next/link';

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-2">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-[588.25px] mb-4 sm:mb-6">
          <div className="flex-1 relative">
            <div className="relative">
              <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[12px] sm:text-[13px] font-medium leading-none z-10 whitespace-nowrap">
                ایمیل شما <span className="text-red-500">*</span>
              </label>
              <Input 
                name="email"
                type="email"
                required
                variant="bordered"
                classNames={{
                  inputWrapper: [
                    "w-full h-[48px] sm:h-[53px]",
                    "bg-[#232323]",
                    "rounded-[14px] sm:rounded-[16px]",
                    "border-1 border-[#DDDDDD]",
                    "shadow-[2px_2px_0px_0px_#363636]",
                    "hover:bg-[#232323]",
                    "data-[hover=true]:bg-[#232323]",
                    "group-data-[focus=true]:bg-[#232323]",
                    "group-data-[focus=true]:border-[#8CFF45]",
                    "transition-all"
                  ].join(" "),
                  input: [
                    "text-right pr-4 text-white text-[14px] sm:text-[16px]",
                    "bg-transparent",
                    "outline-none",
                    "placeholder:text-[#AAAAAA]"
                  ].join(" "),
                  innerWrapper: "h-full"
                }}
              />
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative mb-2">
              <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[12px] sm:text-[13px] font-medium leading-none z-10 whitespace-nowrap">
                کلمه عبور <span className="text-red-500">*</span>
              </label>
              <Input 
                name="password"
                type="password"
                required
                variant="bordered"
                classNames={{
                  inputWrapper: [
                    "w-full h-[48px] sm:h-[53px]",
                    "bg-[#232323]",
                    "rounded-[14px] sm:rounded-[16px]",
                    "border-1 border-[#DDDDDD]",
                    "hover:bg-[#232323]",
                    "data-[hover=true]:bg-[#232323]",
                    "group-data-[focus=true]:bg-[#232323]",
                    "group-data-[focus=true]:border-[#8CFF45]",
                    "transition-all"
                  ].join(" "),
                  input: [
                    "text-right pr-4 text-white text-[14px] sm:text-[16px]",
                    "bg-transparent",
                    "outline-none",
                    "placeholder:text-[#AAAAAA]"
                  ].join(" "),
                  innerWrapper: "h-full"
                }}
              />
            </div>
            <div className="flex justify-start mt-2 sm:mt-1">
              <Link 
                href="/forgot-password" 
                className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium leading-none text-white hover:text-[#8CFF45] transition-colors whitespace-nowrap hover:underline"
              >
                رمز عبور خود را فراموش کردم
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[588.25px] mt-6 sm:mt-8 lg:mt-14 mb-6 sm:mb-8">
          <Button 
            type="submit" 
            className="w-full h-[40px] sm:h-[44px] bg-[#8CFF45] text-[#363636] text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200 shadow-[-1px_-1px_8px_0px_#0000000A_inset,2px_2px_12px_0px_#FFFFFF33_inset,0px_8px_12px_0px_#8CFF4529]"
          >
            ورود به حساب کاربری
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default LoginPage;