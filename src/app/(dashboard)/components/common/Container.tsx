'use client';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className=" w-full mt-[100px] mx-[9px] gap-4">
      {children}
    </div>
  );
}
