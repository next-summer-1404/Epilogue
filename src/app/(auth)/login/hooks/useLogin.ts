'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { loginApi } from '../../../../core/services/api/auth/login/login.api';
import { setItem } from '@/core/services/common/storage.services';
import { loginValidationSchema } from '../utils/loginValidation';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ email?: string; password?: string; general?: string }>({});
  const router = useRouter();

  const handleSubmit = async (formData: { email: string; password: string }) => {
    setIsLoading(true);
    setError({});

    try {
      await loginValidationSchema.validate(formData, { abortEarly: false });

      const response = await loginApi(formData);

      if (typeof response === 'string') {
        setError({ general: response });
      } else {
        setItem('authToken', response.accessToken);
        setItem('refreshToken', response.refreshToken);
        router.push('/dashboard');
      }
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        const fieldErrors: Record<string, string> = {};
        validationError.inner.forEach((err) => {
          if (err.path) fieldErrors[err.path] = err.message;
        });
        setError(fieldErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error, setError };
};
