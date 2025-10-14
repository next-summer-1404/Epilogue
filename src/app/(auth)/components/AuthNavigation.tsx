'use client'
import { Navbar, NavbarContent, NavbarItem } from '@heroui/react'
import Link from 'next/link'

const AuthNavigation = () => {
  return (
    <Navbar className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 bg-transparent">
      <NavbarContent justify="start">
        <NavbarItem>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Link 
              href="/" 
              className="text-[#AAAAAA] text-[10px] xs:text-xs sm:text-sm font-normal leading-none capitalize hover:text-[#8CFF45] transition-colors"
            >
              خانه
            </Link>
            
            <span className="text-[#AAAAAA] mx-1 sm:mx-2 md:mx-3 pointer-events-none text-[10px] xs:text-xs sm:text-sm">
              &gt;
            </span>
            
            <span className="text-[#8CFF45] text-[10px] xs:text-xs sm:text-sm font-normal leading-none capitalize">
              ورود به حساب کاربری
            </span>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default AuthNavigation