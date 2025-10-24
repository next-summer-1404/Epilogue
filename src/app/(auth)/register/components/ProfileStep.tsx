'use client'

import { useState, ChangeEvent } from 'react'
import { Button, Input, Spinner } from '@heroui/react'
import AuthForm from '../../components/AuthForm'
import { useRouter, useSearchParams } from 'next/navigation'
import { CompleteApi } from '@/core/services/api/auth/register/complete-registration.api'
import * as yup from 'yup'
import { profileStepSchema } from '../utils/registerValidation'

const ProfileStep = () => {
  const [formData, setFormData] = useState({ phoneNumber: '', password: '' })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const tempUserId = searchParams.get('tempUserId') || ''

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      await profileStepSchema.validate(formData)
      if (!tempUserId) throw new Error('شناسه کاربر موقت یافت نشد')
      setIsLoading(true)
      await CompleteApi({
        userId: tempUserId,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      })
      router.push('/dashboard')
    } catch (err: unknown) {
      if (err instanceof yup.ValidationError) {
        setError(err.errors[0])
      } else {
        setError('خطا در ثبت اطلاعات، دوباره تلاش کنید.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthForm onSubmit={handleSubmit} mode="register">
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-2">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-[588.25px] mb-6">
          <div className="flex-1 relative">
            <Input
              name="phoneNumber"
              type="tel"
              required
              placeholder="شماره موبایل خود را وارد کنید"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              inputMode="numeric"
              pattern="[0-9]*"
              variant="bordered"
              classNames={{
                inputWrapper:
                  'w-full h-[53px] bg-transparent rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] flex items-center justify-center group-data-[focus=true]:border-[#8CFF45]',
                input:
                  'text-center text-white text-[16px] bg-transparent outline-none placeholder:text-[#AAAAAA] flex items-center justify-center h-full',
              }}
            />
          </div>
          <div className="flex-1 relative">
            <Input
              name="password"
              type="password"
              required
              placeholder="کلمه عبور"
              value={formData.password}
              onChange={handleInputChange}
              variant="bordered"
              classNames={{
                inputWrapper:
                  'w-full h-[53px] bg-transparent rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] flex items-center justify-center group-data-[focus=true]:border-[#8CFF45]',
                input:
                  'text-center text-white text-[16px] bg-transparent outline-none placeholder:text-[#AAAAAA] flex items-center justify-center h-full',
              }}
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

        <div className="w-full max-w-[588.25px] mt-8 mb-6">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-[44px] bg-[#8CFF45] text-[#363636] text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Spinner size="sm" /> در حال ارسال اطلاعات...
              </>
            ) : (
              'ارسال اطلاعات'
            )}
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default ProfileStep
