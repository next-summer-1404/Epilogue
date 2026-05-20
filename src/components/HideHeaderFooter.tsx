'use client';
import { usePathname } from 'next/navigation';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

export default function HideHeaderFooter({ children }: Props) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith('/dashboard');

  return (
    <div className={`${!hideHeaderFooter ? 'bg-[#232323] min-h-screen' : ''}`}>
      {!hideHeaderFooter && (
        <div className="px-8 pt-6">
          <Header />
        </div>
      )}

      <main className="grow">
        {children}
      </main>

      {!hideHeaderFooter && (
        <div className="px-8 pb-8 pt-[100px]">
          <Footer />
        </div>
      )}
    </div>
  );
}
