import { FC, ReactNode } from 'react'
import AuthNavigation from './components/AuthNavigation';

interface AuthLayoutProps {

    children: ReactNode;

}

const AuthLayout : FC<AuthLayoutProps> = ({ children }) => {
  return (
      <main className="min-h-screen">
        <AuthNavigation />
        {children} 
      </main>
  )
}

export default AuthLayout
