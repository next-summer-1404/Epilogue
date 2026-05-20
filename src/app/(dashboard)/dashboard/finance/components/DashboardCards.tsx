'use client';
import React from 'react';

interface DashboardCardsProps {
  cards: string[];
}

export default function DashboardCards({ cards }: DashboardCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((title, idx) => (
        <div key={idx} className="bg-white p-4 rounded-[12px] shadow flex flex-col">
          <h3 className="text-sm font-semibold">{title}</h3>
          <div className='w-full my-[15px] border border-dashed border-[#88888842]'></div>
          <p className="text-lg mt-[4px] text-center">115،000،000     تومان</p>

        </div>
      ))}
    </div>
  );
}
