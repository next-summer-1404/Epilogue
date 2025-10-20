'use client'
import React from 'react'
import ContentCard from '../ContentCard/ContentCard'

const ContentGrid = () => {
    const items = [
        { rating: "5", title: "هتل پارسیان", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "2 شب", image: "/images/hotel1.jpg", price: 20000 },
        { rating: "4", title: "هتل استقلال", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "3 شب", image: "/images/hotel2.jpg", price: 20000 },
        { rating: "5", title: "هتل بزرگ رشت", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "1 شب", image: "/images/hotel3.jpg", price: 20000 },
        { rating: "3", title: "هتل لاله", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "2 شب", image: "/images/hotel4.jpg", price: 20000 },
        { rating: "4", title: "هتل اسپیناس", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "2 شب", image: "/images/hotel5.jpg", price: 20000 },
        { rating: "5", title: "هتل عباسی", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "3 شب", image: "/images/hotel6.jpg", price: 20000 },
        { rating: "4", title: "هتل شیراز", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "2 شب", image: "/images/hotel7.jpg", price: 20000 },
        { rating: "5", title: "هتل مشهد", addres: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ", time: "1 شب", image: "/images/hotel8.jpg", price: 20000 },
    ]

    return (
        <div className="h-[600px] overflow-y-auto w-full py-4">
            <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                    <ContentCard
                        key={index}
                        rating={item.rating}
                        title={item.title}
                        addres={item.addres}
                        time={item.time}
                        image={item.image}
                        price={item.price}

                    />
                ))}
            </div>
        </div>
    )
}

export default ContentGrid
