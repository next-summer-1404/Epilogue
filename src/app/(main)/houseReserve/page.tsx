'use client'
import React from 'react'
import PageLayout from './components/PageLayout/PageLayout'
import { div } from 'framer-motion/client'
import BreadcrumbsFile from '@/components/common/Breadcrumbs/BreadcrumbsFile'
import HotelSearch from './components/HotelSearch/HotelSearch'

const Page = () => {
    return (
        <div>
            <div className="pb-4 px-8">
                <BreadcrumbsFile />
            </div>
            <div className='py-4'>
                <HotelSearch />
            </div>
            <PageLayout title="صفحه اصلی" />

        </div>

    )
}

export default Page
