'use client'

import { useState, ChangeEvent } from 'react'
import AuthForm from '../../components/AuthForm'
import { Button, Input, Spinner } from '@heroui/react'
import * as yup from 'yup'
import { useRouter, useSearchParams } from 'next/navigation'
import { resetApi } from '@/core/services/api/auth/forget-password/reset.api'

const resetSchema = yup.object({
  newPassword: yup
    .string()
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
    .required('رمز عبور الزامی است'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'رمزها باید یکسان باشند')
    .required('تکرار رمز عبور الزامی است'),
})

const ResetStep = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const resetCode = searchParams.get('resetCode') || ''

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    try {
      await resetSchema.validate(formData)
      setIsLoading(true)
      const res = await resetApi({
        email,
        resetCode,
        newPassword: formData.newPassword,
      })
      setSuccess(res.message || 'رمز عبور با موفقیت تغییر کرد')
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } catch (err: unknown) {
      if (err instanceof yup.ValidationError) setError(err.message)
      else setError('خطایی رخ داد، لطفاً دوباره تلاش کنید.')
    } finally {
      setIsLoading(false)
    }
  }

  const EyeIcon = ({ open }: { open: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-gray-300"
    >
      {open ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      ) : (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 002.458 12C3.732 16.057 7.523 19 12 19a9.96 9.96 0 005.46-1.64"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3l18 18"
          />
        </>
      )}
    </svg>
  )

  return (
    <AuthForm onSubmit={handleSubmit} mode="forgot-password" showSocialButtons={false}>
      <div className="flex flex-col gap-8 w-full max-w-[588px] mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[13px] font-medium leading-none z-10 whitespace-nowrap">
              رمز عبور جدید <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Input
                name="newPassword"
                type={showPassword ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={handleChange}
                required
                variant="bordered"
                disabled={isLoading}
                classNames={{
                  inputWrapper:
                    'w-full h-[53px] bg-[#232323] rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] hover:bg-[#232323] group-data-[focus=true]:border-[#8CFF45] flex items-center transition-all',
                  input:
                    'text-center text-white text-[16px] bg-transparent outline-none placeholder:text-[#AAAAAA] flex items-center h-full',
                  innerWrapper: 'h-full flex items-center',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <EyeIcon open={showPassword} />
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[13px] font-medium leading-none z-10 whitespace-nowrap">
              تکرار رمز عبور <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Input
                name="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                variant="bordered"
                disabled={isLoading}
                classNames={{
                  inputWrapper:
                    'w-full h-[53px] bg-[#232323] rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] hover:bg-[#232323] group-data-[focus=true]:border-[#8CFF45] flex items-center transition-all',
                  input:
                    'text-center text-white text-[16px] bg-transparent outline-none placeholder:text-[#AAAAAA] flex items-center h-full',
                  innerWrapper: 'h-full flex items-center',
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <EyeIcon open={showConfirm} />
              </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2 text-center">{success}</p>}

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[588px] mt-6">
          <Button
            type="button"
            onClick={() => router.push('/dashboard')}
            className="flex-1 h-[44px] bg-[#232323] border border-white text-white text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#303030] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200"
          >
            بازگشت
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 h-[44px] bg-[#8CFF45] text-[#363636] text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Spinner size="sm" /> <span>در حال تغییر رمز...</span>
              </>
            ) : (
              'تغییر رمز عبور'
            )}
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default ResetStep
