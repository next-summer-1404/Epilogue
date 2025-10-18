'use client';

import { Form } from '@heroui/react';
import { FC, FormEvent, ReactNode } from 'react';
import AuthLayout from './AuthLayout';

interface AuthFormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  mode?: 'login' | 'register' | 'forgot-password';
  showSocialButtons?: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ 
  children, 
  onSubmit, 
  mode = 'login',
  showSocialButtons = true 
}) => {
  return (
    <AuthLayout mode={mode} showSocialButtons={showSocialButtons}>
      <Form onSubmit={onSubmit} className="space-y-4">
        {children}
      </Form>
    </AuthLayout>
  );
};

export default AuthForm;