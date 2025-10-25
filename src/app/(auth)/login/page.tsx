'use client'

import { FC, useState, ChangeEvent } from 'react'
import { loginApi } from '../../../core/services/api/auth/login/login.api'
import { setItem } from '@/core/services/common/storage.services'
import { Input, Button } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AuthForm from '../components/AuthForm'

const LoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      const response = await loginApi(formData)
      if (typeof response === 'string') {
        setError(response)
      } else {
        setItem('authToken', response.accessToken)
        setItem('refreshToken', response.refreshToken)
        router.push('/dashboard')
      }
    } catch {
      setError('خطایی در ورود رخ داد، دوباره تلاش کنید.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthForm onSubmit={handleSubmit} mode="login">
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-2">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full max-w-[588.25px] mb-6 justify-center">
          <div className="flex-1 relative w-full flex flex-col items-center">
            <div className="relative w-full">
              <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[12px] sm:text-[13px] font-medium leading-none z-10 whitespace-nowrap">
                ایمیل شما <span className="text-red-500">*</span>
              </label>
              <Input
                name="email"
                type="email"
                required
                variant="bordered"
                classNames={{
                  inputWrapper:
                    'w-full h-[56px] bg-[#232323] rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] hover:bg-[#232323] group-data-[focus=true]:border-[#8CFF45] transition-all',
                  input:
                    'text-center text-white text-[15px] bg-transparent outline-none placeholder:text-[#AAAAAA]',
                  innerWrapper: 'h-full flex items-center',
                }}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex-1 relative w-full flex flex-col items-center">
            <div className="relative w-full">
              <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[12px] sm:text-[13px] font-medium leading-none z-10 whitespace-nowrap">
                کلمه عبور <span className="text-red-500">*</span>
              </label>
              <Input
                name="password"
                type="password"
                required
                variant="bordered"
                classNames={{
                  inputWrapper:
                    'w-full h-[56px] bg-[#232323] rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] hover:bg-[#232323] group-data-[focus=true]:border-[#8CFF45] transition-all',
                  input:
                    'text-center text-white text-[15px] bg-transparent outline-none placeholder:text-[#AAAAAA]',
                  innerWrapper: 'h-full flex items-center',
                }}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full text-right mt-1 sm:mt-2">
              <Link
                href="/forget-password"
                className="cursor-pointer text-[12px] sm:text-[14px] font-medium text-white hover:text-[#8CFF45] transition-colors hover:underline"
              >
                رمز عبور خود را فراموش کردم
              </Link>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="w-full max-w-[588.25px] mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8">
          <Button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer w-full h-[44px] sm:h-[48px] bg-[#8CFF45] text-[#363636] text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-t-transparent border-[#363636] rounded-full animate-spin" />
                <span>در حال ورود...</span>
              </>
            ) : (
              'ورود به حساب کاربری'
            )}
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default LoginPage
