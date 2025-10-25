'use client'
import BreadcrumbsFile from '@/app/(main)/contact-us/components/BreadCrumbs/BreadCrumbs'
import React from 'react'
import RightSection from './components/Side/RightSection'
import ContactUsForm from './components/Form/ContactUsForm'

const page = () => {
    return (
        <div className='pb-[156px] px-4 sm:px-8 lg:px-12'>
            <div className="flex flex-col gap-6 pb-4">
                <BreadcrumbsFile />
                <p className='text-[#8CFF45]'>ارتباط با ما </p>

                <div className='flex flex-col lg:flex-row gap-12 pt-[80px]'>
                    {/* بخش سمت راست */}
                    <div className='flex-1 flex justify-center lg:justify-start'>
                        <div className="w-full max-w-md">  {/* محدودیت عرض */}
                            <RightSection />
                        </div>
                    </div>

                    {/* فرم */}
                    <div className='flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0'>
                        <div className="w-full max-w-lg"> {/* محدودیت عرض فرم */}
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
