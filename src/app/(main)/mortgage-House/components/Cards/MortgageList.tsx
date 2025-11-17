'use client'
import { useEffect, useState } from 'react'
import CardWrapper from './CardWrapper'
import Pagination from './Pagination'
import { Mortgage } from '../../utils/types/mortgage'
import { housesApi } from '@/core/services/api/houses/housesApi'

export default function MortgageList() {
  const [mortgages, setMortgages] = useState<Mortgage[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const mortgagesPerPage = 8

  useEffect(() => {
    const fetchMortgages = async () => {
      try {
        const data = await housesApi({
          page: currentPage,
          limit: mortgagesPerPage,
          transactionType: ['rental','mortgage'], 
        })
        console.log("first house:", data?.houses[0]);


        const formattedData: Mortgage[] = data?.houses?.map((item: any) => ({
          id: item.id,
          title: item.title || 'بدون عنوان',
          location: item.location || 'نامشخص',
          price: item.price || 0,
          discount: item.discount || null,
          tag: item.tag || '',
        })) || []

        setMortgages(formattedData)
      } catch (error) {
        console.error('fetchMortgages error:', error)
      }
    }

    fetchMortgages()
  }, [currentPage])

  return (
    <div className="min-h-screen text-white p-6">
      <CardWrapper mortgages={mortgages} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil((mortgages.length || 1) / mortgagesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
