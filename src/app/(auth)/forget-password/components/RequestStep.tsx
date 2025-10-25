'use client'

import { useState, ChangeEvent } from 'react'
import { Button, Input, Spinner } from '@heroui/react'
import AuthForm from '../../components/AuthForm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { requestResetApi } from '@/core/services/api/auth/forget-password/request.api'

const requestSchema = yup.object().shape({
  email: yup.string().email('ایمیل معتبر نیست').required('وارد کردن ایمیل الزامی است'),
})

const RequestStep = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    try {
      await requestSchema.validate(formData)
      setIsLoading(true)
      const res = await requestResetApi(formData)

      setSuccess(res.message || 'کد تأیید برای شما ارسال شد')

      setTimeout(() => {
       setTimeout(() => {
        router.push(`/forget-password/verify?email=${formData.email}`)
        }, 1500)


      }, 1500)
    } catch (err: unknown) {
      if (err instanceof yup.ValidationError) setError(err.message)
      else setError('خطایی رخ داد، لطفاً دوباره تلاش کنید')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthForm onSubmit={handleSubmit} mode="forgot-password" showSocialButtons={false}>
      <div className="flex flex-col gap-8 w-full max-w-[588px] mb-6">
        <div className="w-full relative">
          <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[13px] font-medium leading-none z-10 whitespace-nowrap">
            ایمیل شما <span className="text-red-500">*</span>
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="bordered"
            disabled={isLoading}
            classNames={{
              inputWrapper:
                'w-full max-w-[588px] h-[53px] bg-[#232323] rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] hover:bg-[#232323] group-data-[focus=true]:border-[#8CFF45] transition-all flex items-center justify-center',
              input:
                'text-center text-white text-[16px] bg-transparent outline-none placeholder:text-[#AAAAAA] flex items-center justify-center h-full',
            }}
          />
          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-2 text-center">{success}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[588px] mt-6">
          <Link href="/login" className="flex-1">
            <Button
              type="button"
              disabled={isLoading}
              className="w-full h-[44px] bg-[#232323] border border-white text-white text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#303030] transition-all duration-200"
            >
              بازگشت به صفحه ورود
            </Button>
          </Link>

          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 h-[44px] bg-[#8CFF45] text-[#363636] text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] transition-all duration-200 flex items-center justify-center gap-2 relative"
          >
            {isLoading ? (
              <>
                <Spinner color="default" size="sm" />
                <span className="animate-pulse">در حال ارسال...</span>
              </>
            ) : (
              'ارسال کد تأیید'
            )}
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default RequestStep
