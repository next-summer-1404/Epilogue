'use client'
import { contactUsApi } from '@/core/services/api/contactUs.api'
import { Input, Textarea } from '@heroui/react'
import React, { ChangeEvent, useState } from 'react'

const ContactUsForm = () => {
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!title.trim() || !message.trim()) return
    setLoading(true)
    setSuccessMsg(null)
    setErrorMsg(null)
    try {
      await contactUsApi({ title, message })
      setSuccessMsg('پیام شما با موفقیت ارسال شد!')
      setTitle('')
      setMessage('')
      setEmail('')
    } catch (error) {
      setErrorMsg('ارسال پیام با خطا مواجه شد. لطفا دوباره تلاش کنید.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const inputClasses = 'w-[243.5px] h-[50px] border border-gray-400 rounded-[16px] text-[#AAAAAA] px-4 text-center'
  const textareaClasses = 'h-[120px] w-full max-w-[527px] border border-gray-400 px-4 rounded-2xl text-[#AAAAAA] text-center'

  const inputStyle: React.CSSProperties = {
    outline: 'none',
    boxShadow: 'none',
    borderColor: '#AAAAAA',
    textAlign: 'center' as const,
    paddingTop: '0',
    paddingBottom: '0',
    lineHeight: '50px',
  }

  const textareaStyle: React.CSSProperties = {
    outline: 'none',
    boxShadow: 'none',
    borderColor: '#AAAAAA',
    textAlign: 'center' as const,
    paddingTop: '0',
    paddingBottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const isFormValid = title.trim() !== '' && message.trim() !== ''

  return (
    <div className="flex justify-center lg:justify-start w-full px-4 py-6 lg:px-25">
      <div className="hidden lg:flex flex-shrink-0 justify-end w-full">
        <div className="w-[387px] h-[400px] rounded-[32px] bg-[#3B3B3B] relative">
          <div className="w-[479px] h-[375px] rounded-[32px] bg-[#2D2D2D] absolute left-1/2 -translate-x-1/2 top-3">
            <div className="w-[575px] h-[350px] rounded-[32px] pt-[34px] bg-[#1C1C1C] flex flex-col gap-[16px] relative left-[42px] top-3 px-6 items-center">
              <div className="flex flex-row gap-[30px] justify-center w-full">
                <div className="relative">
                  <p className="absolute -top-2 right-4 bg-[#1C1C1C] z-10 px-2 text-xs text-[#AAAAAA]">نام و نام خانوادگی :</p>
                  <Input
                    type="text"
                    className={inputClasses}
                    style={inputStyle}
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2 right-4 bg-[#1C1C1C] z-10 px-2 text-xs text-[#AAAAAA]">ایمیل شما :</p>
                  <Input
                    type="email"
                    className={inputClasses}
                    style={inputStyle}
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full relative flex justify-center">
                <p className="absolute -top-2 right-4 bg-[#1C1C1C] z-10 px-2 text-xs text-[#AAAAAA]">پیام شما :</p>
                <Textarea
                  className={textareaClasses}
                  style={textareaStyle}
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                />
              </div>
              <div className="h-[24px] flex items-center">
                {successMsg && <p className="text-green-500">{successMsg}</p>}
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
              </div>
              <div className="flex justify-center mt-2">
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || loading}
                  className="w-[527px] h-[36px] bg-[#8CFF45] rounded-[12px] shadow-[0_6px_17px_0_rgba(140,255,69,0.1)] text-[#363636] font-semibold cursor-pointer text-sm sm:text-base md:text-base transform transition-all duration-150 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'در حال ارسال...' : 'ارسال درخواست'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden w-full max-w-md mx-auto">
        <div className="w-full bg-[#3B3B3B] rounded-2xl p-4 flex justify-center">
          <div className="bg-[#2D2D2D] rounded-2xl p-4 w-full">
            <div className="bg-[#1C1C1C] rounded-2xl p-6 flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col gap-3 items-center">
                  <label className="text-xs text-[#AAAAAA]">نام و نام خانوادگی :</label>
                  <Input
                    type="text"
                    className={inputClasses}
                    style={inputStyle}
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <label className="text-xs text-[#AAAAAA]">ایمیل شما :</label>
                  <Input
                    type="email"
                    className={inputClasses}
                    style={inputStyle}
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full items-center">
                <label className="text-xs text-[#AAAAAA]">پیام شما :</label>
                <Textarea
                  className={textareaClasses}
                  style={textareaStyle}
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                />
              </div>
              <div className="h-[24px] flex items-center">
                {successMsg && <p className="text-green-500">{successMsg}</p>}
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
              </div>
              <div className="flex justify-center mt-2">
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || loading}
                  className="w-full max-w-[527px] h-[36px] bg-[#8CFF45] rounded-[12px] shadow-[0_6px_17px_0_rgba(140,255,69,0.1)] text-[#363636] font-semibold cursor-pointer text-sm sm:text-base md:text-base transform transition-all duration-150 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'در حال ارسال...' : 'ارسال درخواست'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsForm
