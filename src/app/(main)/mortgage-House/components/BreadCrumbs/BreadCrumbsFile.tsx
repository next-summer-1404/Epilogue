'use client'

import { Breadcrumbs, BreadcrumbItem } from '@heroui/breadcrumbs'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const BreadcrumbsFile = () => {
  const pathname = usePathname()
  const router = useRouter()

  const routes = [
    { name: 'خانه', href: '/' },
    { name: 'رهن و اجاره', href: '/mortgage-House' },

  ]

  return (
    <div className="w-full flex pt-[56px] ">
      <Breadcrumbs
        separator={<span className="text-gray-500  px-3">{'>'}</span>}
        className="flex flex-wrap items-center gap-2 text-sm"
      >
        {routes.map((route, index) => {
          const isActive = pathname === route.href
          return (
            <BreadcrumbItem
              key={index}
              onClick={() => router.push(route.href)}
              className={`cursor-pointer py-1 transition-colors duration-200 ${
                isActive
                  ? 'text-[#8CFF45] '
                  : 'text-gray-300 hover:text-[#8CFF45]'
              }`}
            >
              {route.name}
            </BreadcrumbItem>
          )
        })}
      </Breadcrumbs>
    </div>
  )
}

export default BreadcrumbsFile