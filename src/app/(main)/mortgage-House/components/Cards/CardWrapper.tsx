'use client'
import MortgageCard from './MortgageCard'
import { Mortgage } from '../../utils/types/mortgage'

interface CardWrapperProps {
  mortgages: Mortgage[]
}

export default function CardWrapper({ mortgages }: CardWrapperProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {mortgages.map((mortgage) => (
        <div key={mortgage.id} className="flex">
          <MortgageCard mortgage={mortgage} />
        </div>
      ))}
    </div>
  )
}
