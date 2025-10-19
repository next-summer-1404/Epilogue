import React from 'react'
import ContentCard from '../ContentCard/ContentCard'

const ContentGrid = () => {
  const items = [
    {
      title: 'هتل پارسیان',
      description: 'هتل ۵ ستاره با بهترین امکانات',
      image: '/images/hotel1.jpg',
    },
    {
      title: 'هتل استقلال',
      description: 'نمایی از شهر و خدمات ویژه',
      image: '/images/hotel2.jpg',
    },
    {
      title: 'هتل بزرگ رشت',
      description: 'دسترسی عالی به مراکز گردشگری',
      image: '/images/hotel3.jpg',
    },
  ]

  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-1 gap-6"
    >
      {items.map((item, index) => (
        <ContentCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default ContentGrid
