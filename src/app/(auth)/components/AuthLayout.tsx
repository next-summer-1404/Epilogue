'use client';

import { FC, ReactNode, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface AuthLayoutProps {
  children: ReactNode;
  mode?: 'login' | 'register' | 'forgot-password';
  showSocialButtons?: boolean;
}

const AuthLayout: FC<AuthLayoutProps> = ({ 
  children, 
  mode = 'login',
  showSocialButtons = true 
}) => {
  const [activeTab, setActiveTab] = useState<'phone' | 'password'>('password');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    try {
      setIsLoading(true);
      const result = await signIn(provider, { callbackUrl: '/dashboard', redirect: false });
      if (result?.url) window.location.href = result.url;
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterClick = () => router.push('/register');
  const handleLoginClick = () => router.push('/login');

  const getTitles = () => {
    switch (mode) {
      case 'register':
        return {
          welcome: 'خوش آمدید !',
          main: 'به خانواده دلتا، خوش آمدید !',
          description: 'با ساخت حساب کاربری به جمع ما بپیوندید و از امکانات ویژه بهره‌مند شوید !'
        };
      case 'forgot-password':
        return {
          welcome: 'فراموشی رمز عبور',
          main: 'رمز عبور خود را فراموش کرده‌اید؟',
          description: 'ایمیل خود را وارد کنید تا لینک بازیابی برای شما ارسال شود.'
        };
      default:
        return {
          welcome: 'خوش برگشتی !',
          main: 'به خانواده دلتا، خوش برگشتی !',
          description: 'با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون خبر بگیرید !'
        };
    }
  };

  const titles = getTitles();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:justify-between">
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 w-full lg:h-screen">
        <div className="w-full max-w-[588.25px] flex flex-col justify-center">
          <div className="flex flex-col gap-4 sm:gap-6 pb-6 sm:pb-8 text-right">
            <h4 className="text-[14px] sm:text-[16px] font-medium text-[#8CFF45]">{titles.welcome}</h4>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-light text-white">{titles.main}</h3>
            <p className="text-[12px] sm:text-sm lg:text-[16px] font-medium text-white">{titles.description}</p>
          </div>

          {mode !== 'forgot-password' && (
            <div className="w-full h-10 sm:h-12 rounded-[16px] bg-[#303030] flex mb-4 sm:mb-6 gap-1 p-1">
              <button 
                onClick={handleLoginClick}
                className={`flex-1 h-full rounded-[12px] text-sm font-medium transition-all ${
                  mode === 'login'
                    ? 'bg-[#8CFF45] text-[#363636] shadow-[0_8px_12px_0_#8CFF4529]'
                    : 'bg-transparent text-[#AAAAAA] hover:bg-[#404040] hover:text-white'
                } hover:scale-[0.98] active:scale-[0.95]`}
              >
                ورود به حساب کاربری
              </button>
              <button 
                onClick={handleRegisterClick}
                className={`flex-1 h-full rounded-[12px] text-sm font-medium transition-all ${
                  mode === 'register'
                    ? 'bg-[#8CFF45] text-[#363636] shadow-[0_8px_12px_0_#8CFF4529]'
                    : 'bg-transparent text-[#AAAAAA] hover:bg-[#404040] hover:text-white'
                } hover:scale-[0.98] active:scale-[0.95]`}
              >
                ساخت حساب کاربری
              </button>
            </div>
          )}

          {showSocialButtons && mode !== 'forgot-password' && (
            <>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-4 sm:mb-6">
                <button
                  onClick={() => handleSocialLogin('google')}
                  disabled={isLoading}
                  className="w-full sm:w-[278.13px] h-10 sm:h-12 rounded-[16px] border border-[#444] text-white hover:bg-[#8CFF45] hover:text-[#363636]"
                >
                  ورود با گوگل
                </button>
                <button
                  onClick={() => handleSocialLogin('github')}
                  disabled={isLoading}
                  className="w-full sm:w-[278.13px] h-10 sm:h-12 rounded-[16px] border border-[#444] text-white hover:bg-[#8CFF45] hover:text-[#363636]"
                >
                  ورود با گیتهاب
                </button>
              </div>

              <div className="relative flex items-center justify-center my-6 sm:my-8">
                <div className="flex-grow h-px bg-gradient-to-r from-[#AAAAAA] to-transparent opacity-50"></div>
                <span className="mx-3 sm:mx-4 text-[#AAAAAA] text-sm">یا میتونید</span>
                <div className="flex-grow h-px bg-gradient-to-l from-[#AAAAAA] to-transparent opacity-50"></div>
              </div>
            </>
          )}

          {children}
        </div>
      </div>

      {mode === 'login' ? (
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 w-full lg:h-screen">
          <div className="relative w-full max-w-[691.75px] aspect-[691.75/545] rounded-[28px] border-2 border-[#414141] shadow-[0px_8px_32px_0px_#00000029] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] flex flex-col justify-between items-center overflow-hidden">
            
            <div className="absolute top-6 left-6 flex w-[294px] h-[44px] bg-[#303030] rounded-[16px] p-1 gap-1">
              <button
                onClick={() => {
                  setActiveTab('phone');
                  router.push('/register');
                }}
                className={`flex-1 h-full rounded-[12px] text-[14px] font-medium transition-all ${
                  activeTab === 'phone'
                    ? 'bg-transparent text-[#AAAAAA]'
                    : 'bg-transparent text-[#AAAAAA]'
                } hover:bg-[#404040] hover:text-white`}
              >
                ورود با شماره
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`flex-1 h-full rounded-[12px] text-[14px] font-medium transition-all ${
                  activeTab === 'password'
                    ? 'bg-white text-[#363636] shadow-[0px_0px_12px_0px_#FFFFFF33]'
                    : 'bg-transparent text-[#AAAAAA]'
                }`}
              >
                ورود با پسورد
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center w-full">
              <span className="text-[#AAAAAA] text-[14px]">تصویر اصلی</span>
            </div>

            <div className="w-full px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="w-full rounded-[24px] border border-[#686868] bg-[#363636C7] backdrop-blur-md flex items-center justify-between px-4 py-3">
                <div className="flex flex-col items-start text-white">
                  <h4 className="text-lg font-semibold">بیش از 5600+</h4>
                  <p className="text-sm opacity-80 mt-1">مشتریانی لذت سفرشان را با ما تجربه کردند!</p>
                </div>
                <div className="w-12 h-12 border border-[#555] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 w-full lg:h-screen">
          <div className="relative w-full max-w-[691.75px] aspect-[691.75/545] rounded-[28px] border-2 border-[#414141] shadow-[0px_8px_32px_0px_#00000029] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] flex flex-col justify-between items-center overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full">
              <span className="text-[#AAAAAA] text-[14px]">تصویر اصلی</span>
            </div>
            <div className="w-full px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="w-full rounded-[24px] border border-[#686868] bg-[#363636C7] backdrop-blur-md flex items-center justify-between px-4 py-3">
                <div className="flex flex-col items-start text-white">
                  <h4 className="text-lg font-semibold">بیش از 5600+</h4>
                  <p className="text-sm opacity-80 mt-1">مشتریانی لذت سفرشان را با ما تجربه کردند!</p>
                </div>
                <div className="w-12 h-12 border border-[#555] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
