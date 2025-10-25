'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'
import AuthForm from '../../components/AuthForm'
import { Button, Input, Spinner } from '@heroui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import * as yup from 'yup'
import { verifyStepSchema } from '../utils/registerValidation'

const VerifyStep = () => {
  const [code, setCode] = useState(Array(6).fill(''))
  const [isLoading, setIsLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [error, setError] = useState('')
  const [timer, setTimer] = useState(0)
  const router = useRouter()
  const searchParams = useSearchParams()
  const tempUserId = searchParams.get('tempUserId') || ''
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

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
    const verificationCode = code.join('')
    try {
      await verifyStepSchema.validate({ verificationCode })
      if (!tempUserId) throw new Error('شناسه کاربر موقت یافت نشد')
      setIsLoading(true)
      router.push(`/register/complete-profile?tempUserId=${tempUserId}`)
    } catch (err: unknown) {
      if (err instanceof yup.ValidationError) setError(err.errors[0])
      else setError('کد تأیید معتبر نیست یا خطایی رخ داده است.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendClick = () => {
    setResendLoading(true)
    setTimeout(() => {
      setResendLoading(false)
      setTimer(120)
    }, 1500)
  }

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60)
    const s = t % 60
    return `${m}:${s < 10 ? '0' + s : s}`
  }

  return (
    <AuthForm onSubmit={handleSubmit} mode="register">
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
                      'text-center text-white text-[22px] font-bold bg-transparent outline-none p-0 m-0 flex items-center justify-center h-full leading-[1] tracking-widest',
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 w-[226px] justify-between bg-[#7569FF] h-[34px] rounded-[12px] px-3 shadow-[inset_-1px_-1px_8px_0px_#0000000A,inset_1px_2px_12px_0px_#FFFFFF33,0px_6px_12px_0px_#376F752E]">
              {timer > 0 ? (
                <>
                  <span className="text-white text-[13px]">{formatTime(timer)}</span>
                  <span className="text-white text-[13px]">در حال شمارش...</span>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleResendClick}
                  disabled={resendLoading}
                  className="w-[145px] h-[30px] rounded-[10px] bg-white text-[#303030] text-[13px] font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  {resendLoading ? <Spinner size="sm" color="default" /> : 'ارسال دوباره رمز'}
                </button>
              )}
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[588px] mt-6">
          <Button
            type="button"
            className="flex-1 h-[44px] bg-[#232323] border border-white text-white text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#303030] transition-all"
            onClick={() => router.push('/register')}
          >
            تغییر ایمیل
          </Button>

          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 h-[44px] bg-[#8CFF45] text-[#363636] text-[14px] sm:text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Spinner size="sm" /> در حال بررسی...
              </>
            ) : (
              'تأیید کد'
            )}
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default VerifyStep
