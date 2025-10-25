'use client'

import { useState, useRef, ChangeEvent, useEffect } from 'react'
import AuthForm from '../../components/AuthForm'
import { Button, Input, Spinner } from '@heroui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import * as yup from 'yup'
import { verifyApi } from '@/core/services/api/auth/forget-password/verify.api'

const verifySchema = yup.object({
  resetCode: yup
    .string()
    .length(6, 'کد باید ۶ رقم باشد')
    .required('کد تأیید الزامی است'),
})

const VerifyStep = () => {
  const [code, setCode] = useState(Array(6).fill(''))
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)
      if (value && index < 5) inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !code[index] && index > 0)
      inputRefs.current[index - 1]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    const resetCode = code.join('')
    try {
      await verifySchema.validate({ resetCode })
      setIsLoading(true)
      await verifyApi({ email, resetCode })
        router.push(`/forget-password/reset?email=${email}&resetCode=${resetCode}`)

    } catch (err: unknown) {
      if (err instanceof yup.ValidationError) setError(err.errors[0])
      else setError('کد تأیید معتبر نیست یا خطایی رخ داده است.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthForm onSubmit={handleSubmit} mode="forgot-password" showSocialButtons={false}>
      <div className="flex flex-col gap-8 w-full max-w-[588px] mb-6">
        <div className="w-full relative">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 justify-center flex-1">
              {code.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  variant="bordered"
                  classNames={{
                    inputWrapper:
                      'w-12 h-12 bg-[#232323] rounded-[12px] border border-[#565656] hover:bg-[#232323] group-data-[focus=true]:border-[#8CFF45] transition-all flex items-center justify-center shadow-[2px_2px_0px_0px_#363636]',
                    input:
                      'text-center text-white text-[20px] font-semibold bg-transparent outline-none p-0 m-0 leading-none tracking-wider flex items-center justify-center h-full',
                  }}
                />
              ))}
            </div>

            <Button
              type="button"
              className="w-[226px] h-[34px] rounded-[10px] bg-transparent border-2 border-[#303030] text-white hover:bg-gray-800 transition-all text-[12px] font-semibold"
            >
              ارسال دوباره کد
            </Button>
          </div>

          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[588px] mt-6">
          <Button
            type="button"
            onClick={() => router.push('/forgot-password')}
            className="flex-1 h-[44px] bg-[#232323] border border-white text-white text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#303030] hover:scale-[0.98] active:scale-[0.95] transition-all duration-200"
          >
            تغییر ایمیل
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 h-[44px] bg-[#8CFF45] text-[#363636] text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Spinner size="sm" /> <span>در حال بررسی...</span>
              </>
            ) : (
              'تأیید و ادامه'
            )}
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default VerifyStep
