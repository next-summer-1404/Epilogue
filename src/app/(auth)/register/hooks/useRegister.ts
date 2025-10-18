'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { registerApi } from '../../../../core/services/api/auth/register/start-registration.api'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (formData: { email: string }) => {
    setIsLoading(true)
    try {
      await registerApi(formData)
      router.push('/register/verify-email')
    } catch (error) {
      console.error('Register error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleSubmit, isLoading }
}
