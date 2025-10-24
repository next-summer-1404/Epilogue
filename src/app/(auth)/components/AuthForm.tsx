'use client';

import { Form, Button } from '@heroui/react';
import { FC, FormEvent, ReactNode, useState } from 'react';

interface AuthProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AuthForm: FC<AuthProps> = ({ children, onSubmit }) => {
  const [activeService, setActiveService] = useState<'google' | 'github' | null>(null);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start justify-start">
      <div className="flex-1 flex items-start justify-center p-4 lg:p-8 w-full lg:h-screen lg:pt-10">
        
        <div className="w-full max-w-[588.25px]">
          <div className="flex flex-col gap-4 sm:gap-6 pb-6 sm:pb-8 text-right">
            <h4 className="text-[14px] sm:text-[16px] font-medium leading-[100%] capitalize text-[#8CFF45]">
              خوش برگشتی !
            </h4>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light leading-[120%] capitalize text-white">
              به خانواده دلتا، خوش برگشتی !
            </h3>
            <p className="text-[12px] sm:text-sm lg:text-[16px] font-medium leading-[140%] capitalize text-white overflow-hidden text-ellipsis">
              با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون خبر بگیرید !
            </p>
          </div>

          <div className="w-full h-10 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#303030] flex mb-4 sm:mb-6 gap-1 p-1">
            <Button className="flex-1 h-8 sm:h-10 rounded-[10px] sm:rounded-[12px] bg-[#8CFF45] text-[#363636] text-[12px] sm:text-sm lg:text-[16px] font-medium shadow-[-1px_-1px_8px_0px_#0000000A_inset,2px_2px_12px_0px_#FFFFFF33_inset,0px_8px_12px_0px_#8CFF4529] hover:scale-[0.98] active:scale-[0.95] transition-transform">
              ورود به حساب کاربری
            </Button>
            <Button className="flex-1 h-8 sm:h-10 rounded-[10px] sm:rounded-[12px] bg-transparent text-[#AAAAAA] text-[12px] sm:text-sm lg:text-[16px] font-medium hover:bg-[#404040] hover:text-white active:scale-[0.98] transition-all">
              ساخت حساب کاربری
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-4 sm:mb-6">
            <Button
              onClick={() => setActiveService('google')}
              className={`w-full sm:w-[278.13px] h-10 sm:h-12 rounded-[14px] sm:rounded-[16px] font-medium transition-all ${
                activeService === 'google'
                  ? 'bg-[#8CFF45] text-[#363636] shadow-[-1px_-1px_8px_0px_#0000000A_inset,2px_2px_12px_0px_#FFFFFF3D_inset,0px_8px_20px_0px_#8CFF451F]'
                  : 'bg-[#303030] border border-[#444444] text-white hover:bg-[#8CFF45] hover:text-[#363636]'
              } hover:scale-[0.98] active:scale-[0.95]`}
            >
              ورود با گوگل
            </Button>
            <Button
              onClick={() => setActiveService('github')}
              className={`w-full sm:w-[278.13px] h-10 sm:h-12 rounded-[14px] sm:rounded-[16px] font-medium transition-all ${
                activeService === 'github'
                  ? 'bg-[#8CFF45] text-[#363636] shadow-[-1px_-1px_8px_0px_#0000000A_inset,2px_2px_12px_0px_#FFFFFF3D_inset,0px_8px_20px_0px_#8CFF451F]'
                  : 'bg-[#303030] border border-[#444444] text-white hover:bg-[#8CFF45] hover:text-[#363636]'
              } hover:scale-[0.98] active:scale-[0.95]`}
            >
              ورود با گیتهاب
            </Button>
          </div>

          <div className="relative flex items-center justify-center my-6 sm:my-8">
            <div className="flex-grow h-px bg-gradient-to-r from-[#AAAAAA] to-transparent opacity-50"></div>
            <span className="mx-3 sm:mx-4 text-[#AAAAAA] text-[12px] sm:text-sm font-medium">یا میتونید</span>
            <div className="flex-grow h-px bg-gradient-to-l from-[#AAAAAA] to-transparent opacity-50"></div>
          </div>

          <Form onSubmit={onSubmit} className="space-y-4">
            {children}
          </Form>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-center p-4 lg:p-8 w-full lg:h-screen lg:pb-32">
        <div className="w-full max-w-[691.75px] aspect-[691.75/545] rounded-[28px] sm:rounded-[36px] border-2 border-[#414141] shadow-[0px_8px_32px_0px_#00000029] relative overflow-hidden bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#AAAAAA] text-[12px] sm:text-[14px]">تصویر اصلی</span>
          </div>
          
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-8 left-3 sm:left-4 lg:left-8 right-3 sm:right-4 lg:right-8">
            <div className="w-full aspect-[659.75/97] rounded-[24px] sm:rounded-[32px] border border-[#686868] bg-[#363636C7] backdrop-blur-md shadow-[0px_8px_12px_0px_#00000033] flex items-center justify-between px-3 sm:px-4 lg:px-6">
              <div className="w-16 sm:w-20 lg:w-28 h-8 sm:h-10 lg:h-12 border border-[#363636] rounded-lg flex items-center justify-center relative bg-transparent">
                <div className="w-[170.02px] h-[166.09px] border-2 border-white opacity-0 absolute -top-20 -left-20" />
                <span className="text-white text-[10px] sm:text-xs lg:text-sm">بخش اول</span>
              </div>

              <div className="flex flex-col flex-1 mx-2 sm:mx-3 lg:mx-4 bg-transparent">
                <div className="w-full max-w-[200px] sm:max-w-[259px] bg-transparent rounded-lg flex flex-col justify-center items-start px-2 sm:px-3 lg:px-4 gap-1 sm:gap-2">
                  <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold leading-none text-right text-white whitespace-nowrap">بیش از 5600+</h4>
                  <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-none text-right mt-1 text-white whitespace-nowrap">مشتریانی لذت سفذشان را با ما تجربه کردند !</p>
                </div>
              </div>

              <div className="w-16 sm:w-20 lg:w-28 h-8 sm:h-10 lg:h-12 border border-[#363636] rounded-lg flex items-center justify-center bg-transparent">
                <span className="text-white text-[10px] sm:text-xs lg:text-sm">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;