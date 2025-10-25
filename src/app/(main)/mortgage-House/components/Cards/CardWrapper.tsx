'use client'
import MortgageCard from './MortgageCard'
import { Mortgage } from '../../utils/types/mortgage'

interface CardWrapperProps {
  mortgages: Mortgage[]
}

export default function CardWrapper({ mortgages }: CardWrapperProps) {
  // تقسیم داده‌ها به دو ستون ۶‌تایی
  const midIndex = Math.ceil(mortgages.length / 2)
  const col1 = mortgages.slice(0, midIndex)
  const col2 = mortgages.slice(midIndex)

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-1 flex flex-col gap-4">
        {col1.map((mortgage) => (
          <MortgageCard key={mortgage.id} mortgage={mortgage} />
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-4">
        {col2.map((mortgage) => (
          <MortgageCard key={mortgage.id} mortgage={mortgage} />
        ))}
      </div>
    </div>
  )
}
