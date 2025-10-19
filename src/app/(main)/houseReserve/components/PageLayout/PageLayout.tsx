'use client'
import React from 'react'
import BreadcrumbsFile from '@/components/common/Breadcrumbs/BreadcrumbsFile'
import ContentGrid from '../ContentGrid/ContentGrid'
import MapSection from '../MapSection/MapSection'


const PageLayout = ({ title }: { title: string }) => {
    return (
        <div className="min-h-screen text-white px-6 sm:px-10 lg:px-8 py-6">
            <div className="pb-4">
                <BreadcrumbsFile />
            </div>

            <div className="bg-[#303030] w-full rounded-2xl shadow-lg p-6 sm:p-8">
                <h1 className="text-xl sm:text-2xl font-bold mb-6">{title}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
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
