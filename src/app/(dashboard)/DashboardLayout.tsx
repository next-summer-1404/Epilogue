'use client';
import { useState } from 'react';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [title, setTitle] = useState('داشبورد');

  return (
    <div className="h-full flex flex-col bg-[#F0F0F0]">
      <Header title={title} />
      <div className="flex flex-1">
        <div className='hidden md:flex'>
          <Sidebar onSelect={setTitle} />

        </div>
        <main className="flex-1 px-2">
          {children}
        </main>
      </div>
    </div>

  );
}
