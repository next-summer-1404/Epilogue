'use client'
import Badge from './Badge'
import { Mortgage } from '../../utils/types/mortgage'
import FileContainer from '../FileContainer'

interface MortgageCardProps {
    mortgage: Mortgage
}

export default function MortgageCard({ mortgage }: MortgageCardProps) {
    return (
        <FileContainer
            background="#393939"
            radius="md"
            size="md"
            label=""
            labelHeight="30px"
            labelWidth="150px"
            width="100%"
            height="auto"
            classNames={{
                base: "bg-[#444444] transition-all duration-300 gap-4 rounded-xl p-4 md:flex md:gap-6",
                innerLabel: "flex flex-col md:flex-row w-full items-stretch",
                wrapperLabel: "",
            }}
        >
            {/* تصویر ملک */}
            <div className="flex-shrink-0 w-full relative bottom-6 md:w-[160px] h-44 md:h-full">
                <FileContainer
                    background="#2F2F2F"
                    radius="md"
                    size="md"
                    label=""
                    labelHeight="30px"
                    labelWidth="120px"
                    width="100%"
                    height="100%"
                    classNames={{
                        base: "bg-[#2F2F2F] rounded-xl transition-all duration-300",
                        innerLabel: "flex justify-center items-center",
                        wrapperLabel: "",
                    }}
                >
                    <span className="text-gray-500"></span>
                </FileContainer>
            </div>

            {/* جزئیات ملک */}
            <div className="flex flex-1 flex-col justify-between mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
                    {/* ستون چپ: عنوان، موقعیت، ویژگی‌ها */}
                    <div className="flex-1">
                        {mortgage.discount && (
                            <div className="mb-2">
                                <div className="w-[82px] h-[28px] rounded-[8px] bg-[#7569FF] text-[13px] flex justify-center items-center">
                                    %{mortgage.discount} تخفیف
                                </div>
                            </div>
                        )}
                        <h2 className="text-white font-semibold text-base md:text-lg">{mortgage.title}</h2>
                        <p className="text-gray-400 text-sm md:text-base mb-2">آدرس : {mortgage.location}</p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-1">
                                <p>4 خوابه</p>
                                <span className="px-2">|</span>
                                <p>2 حمام</p>
                                <span className="px-2">|</span>
                                <p>پارکینگ</p>
                            </div>
                        </div>
                    </div>

                    {/* ستون راست: قیمت و دکمه */}
                    <div className="flex flex-col items-start md:items-end justify-center gap-2">
                        <span className="text-[#8CFF45] font-semibold text-base md:text-lg">
                            {mortgage.price.toLocaleString()} ت
                        </span>
                        <button className="w-[154px] h-[44px] text-sm border border-[#8CFF45] hover:bg-[#8CFF45] text-[#8CFF45] hover:text-[#363636] rounded-xl transition-all">
                            مشاهده ملک
                        </button>
                    </div>
                </div>
            </div>
        </FileContainer>
    )
}
