'use client'
import React from 'react'
import BreadcrumbsFile from '@/components/common/Breadcrumbs/BreadcrumbsFile'
import ContentGrid from '../ContentGrid/ContentGrid'
import MapSection from '../MapSection/MapSection'
import HotelFilter from '../Filter/HotelFilter'

const PageLayout = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen text-white px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-[#303030] w-full rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <HotelFilter />
            <ContentGrid />
          </div>

          <div className="lg:col-span-1">
            <MapSection />
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageLayout
