'use client'

import AuthForm from '../../components/AuthForm'
import { Button, Input, Spinner } from '@heroui/react'
import { useState, ChangeEvent } from 'react'
import { useRegister } from '../hooks/useRegister'
import * as yup from 'yup'
import { emailStepSchema } from '../utils/registerValidation'

const EmailStep = () => {
  const { handleSubmit, isLoading } = useRegister()
  const [formData, setFormData] = useState({ email: '' })
  const [error, setError] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      await emailStepSchema.validate(formData)
      handleSubmit(formData)
    } catch (err: unknown) {
      if (err instanceof yup.ValidationError) setError(err.errors[0])
      else setError('خطایی رخ داد، لطفاً دوباره تلاش کنید.')
    }
  }

  return (
    <AuthForm onSubmit={onSubmit} mode="register">
      <div className="flex flex-col gap-8 w-full max-w-[588px] mb-6">
        <div className="w-full relative">
          <label className="absolute -top-2.5 right-3 bg-[#232323] px-2 text-white text-[13px] font-medium leading-none z-10 whitespace-nowrap">
            ایمیل شما <span className="text-red-500">*</span>
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            variant="bordered"
            classNames={{
              inputWrapper:
                'w-full max-w-[588px] h-[53px] bg-[#232323] rounded-[16px] border border-[#DDDDDD] shadow-[2px_2px_0px_0px_#363636] hover:bg-[#232323] group-data-[focus=true]:border-[#8CFF45] transition-all flex items-center justify-center',
              input:
                'text-center text-white text-[16px] bg-transparent outline-none placeholder:text-[#AAAAAA] flex items-center justify-center h-full',
            }}
          />
          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        </div>

        <div className="w-full max-w-[588px] mt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className={`w-full h-[44px] text-[16px] font-medium rounded-[12px] transition-all duration-200 flex items-center justify-center gap-2
              ${isLoading
                ? 'bg-[#7ae63a] opacity-80 cursor-not-allowed'
                : 'bg-[#8CFF45] hover:bg-[#7ae63a] text-[#363636]'
              }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Spinner size="sm" color="default" />
                <span className="animate-pulse">در حال ارسال...</span>
              </div>
            ) : (
              'ارسال کد تأیید'
            )}
          </Button>
        </div>
      </div>
    </AuthForm>
  )
}

export default EmailStep
