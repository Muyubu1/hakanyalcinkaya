'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Scissors, User, MessageSquare, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
    label: string
    icon: React.ElementType
    href: string
}

interface BottomNavProps {
    className?: string
}

const navItems: NavItem[] = [
    { label: 'Ana Sayfa', icon: Home, href: '#hero' },
    { label: 'Hizmetler', icon: Scissors, href: '#hizmetler' },
    { label: 'Hakkımızda', icon: User, href: '#hakkimizda' },
    { label: 'Yorumlar', icon: MessageSquare, href: '#yorumlar' },
    { label: 'İletişim', icon: MapPin, href: '#iletisim' },
]

export function BottomNav({ className }: BottomNavProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index: number, href: string) => {
        setActiveIndex(index)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            className={cn(
                'fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden',
                'bg-background/80 backdrop-blur-lg border border-border rounded-full',
                'shadow-lg px-2 py-2',
                className
            )}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <ul className='flex items-center gap-1 list-none m-0 p-0'>
                {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeIndex === index
                    return (
                        <li key={item.label}>
                            <motion.button
                                onClick={() => handleClick(index, item.href)}
                                className={cn(
                                    'flex items-center justify-center min-w-[44px] min-h-[44px] px-3 py-2 rounded-full transition-colors',
                                    isActive
                                        ? 'bg-primary text-primary-foreground'
                                        : 'text-muted-foreground hover:text-foreground'
                                )}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className='w-5 h-5' />
                                <motion.span
                                    className='ml-1 text-xs font-medium overflow-hidden'
                                    animate={{
                                        width: isActive ? 'auto' : 0,
                                        opacity: isActive ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isActive && item.label}
                                </motion.span>
                            </motion.button>
                        </li>
                    )
                })}
            </ul>
        </motion.nav>
    )
}
