'use client'
import { useEffect, useState } from 'react'
import CardWrapper from './CardWrapper'
import Pagination from './Pagination'
import { Mortgage } from '../../utils/types/mortgage'


export default function MortgageList() {
const [mortgages, setMortgages] = useState<Mortgage[]>([])
const [currentPage, setCurrentPage] = useState<number>(1)
const mortgagesPerPage = 8


useEffect(() => {
const fetchMortgages = async (): Promise<Mortgage[]> => {
// فیک API برای تست
const fakeData: Mortgage[] = Array.from({ length: 20 }).map((_, i) => ({
id: i + 1,
title: 'وام مسکن سامان',
location: 'رشت - گلسار - خیابان معلم',
price: 15000000,
discount: i % 3 === 0 ? 15 : null,
tag: i % 2 === 0 ? 'ویژه' : 'عادی',
}))
return new Promise((resolve) => setTimeout(() => resolve(fakeData), 1000))
}


fetchMortgages().then((data) => setMortgages(data))
}, [])


const indexOfLast = currentPage * mortgagesPerPage
const indexOfFirst = indexOfLast - mortgagesPerPage
const currentMortgages = mortgages.slice(indexOfFirst, indexOfLast)


return (
<div className="min-h-screen bg-[] text-white p-6">
<CardWrapper mortgages={currentMortgages} />
<Pagination
currentPage={currentPage}
totalPages={Math.ceil(mortgages.length / mortgagesPerPage)}
onPageChange={setCurrentPage}
/>
</div>
)
}