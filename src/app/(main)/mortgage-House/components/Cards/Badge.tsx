'use client'


interface BadgeProps {
children: React.ReactNode
color?: 'green' | 'purple' | 'red'
}


export default function Badge({ children, color = 'green' }: BadgeProps) {
const base = 'inline-flex items-center gap-2 px-2 py-1 rounded text-xs font-medium'
const colors = {
green: 'bg-green-900 text-green-400 ring-1 ring-green-700',
purple: 'bg-violet-900 text-violet-300 ring-1 ring-violet-700',
red: 'bg-red-900 text-red-300 ring-1 ring-red-700',
}
return <span className={`${base} ${colors[color] || colors.green}`}>{children}</span>
}