'use client'


interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}


export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${currentPage === i + 1
                            ? 'bg-green-500 text-black'
                            : 'bg-[#2b2b2d] text-gray-300 hover:bg-green-600 hover:text-white'
                        }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    )
}