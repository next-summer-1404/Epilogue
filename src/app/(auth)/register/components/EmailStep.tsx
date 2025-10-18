'use client'

import AuthForm from '../../components/AuthForm'
import { Button, Input, Spinner } from '@heroui/react'
import { useState, ChangeEvent } from 'react'
import { useRegister } from '../hooks/useRegister'

const EmailStep = () => {
  const { handleSubmit, isLoading } = useRegister()
  const [formData, setFormData] = useState({ email: '' })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(formData)
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
              inputWrapper: [
                'w-full max-w-[588px] h-[53px]',
                'bg-[#232323]',
                'rounded-[16px]',
                'border border-[#DDDDDD]',
                'shadow-[2px_2px_0px_0px_#363636]',
                'hover:bg-[#232323]',
                'group-data-[focus=true]:border-[#8CFF45]',
                'transition-all',
              ].join(' '),
              input: [
                'text-center text-white text-[16px]',
                'bg-transparent outline-none placeholder:text-[#AAAAAA]',
                'flex items-center justify-center',
                'leading-[53px]',
                'p-0',
              ].join(' '),
            }}
          />
        </div>

        <div className="w-full max-w-[588px] mt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-[44px] bg-[#8CFF45] text-[#363636] text-[16px] font-medium rounded-[12px] hover:bg-[#7ae63a] transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Spinner color="default" size="sm" /> در حال ارسال...
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

export default EmailStep
