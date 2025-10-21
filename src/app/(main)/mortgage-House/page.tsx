'use client'
import BreadcrumbsFile from '@/app/(main)/mortgage-House/components/BreadCrumbs/BreadCrumbsFile'
import React from 'react'
import MortgageSearch from './components/MortgageSearch/MortgageSearch'
import Filter from './components/Filter/Filter'


const Page = () => {
    return (
        <div className='pb-[156px]'>
            <div className="pb-4 px-8">
                <BreadcrumbsFile />
            </div>
            <MortgageSearch />
            
            <Filter />

        </div>

    )
}

export default Page