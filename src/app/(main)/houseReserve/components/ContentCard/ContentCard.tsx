import FileContainer from '@/components/common/FileContainer'
import Image from 'next/image'
import React from 'react'

const ContentCard = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => {
  return (
    <div className="bg-[#3a3a3a] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
      <div className="relative w-full h-48 sm:h-56 lg:h-64">
        <FileContainer/>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ContentCard
