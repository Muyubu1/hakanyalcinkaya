'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Testimonial {
    text: string
    name: string
    title: string
    avatarUrl?: string
    rating?: number
}

interface TestimonialsColumnProps {
    testimonials: Testimonial[]
    duration?: number
    className?: string
}

interface TestimonialsSectionProps {
    testimonials?: Testimonial[]
    title?: string
    subtitle?: string
    className?: string
}

const TestimonialsColumn = ({
    testimonials,
    duration = 15,
    className,
}: TestimonialsColumnProps) => {
    return (
        <div className={cn('overflow-hidden relative h-[600px]', className)}>
            <motion.ul
                animate={{ translateY: '-50%' }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
                className='flex flex-col gap-6 pb-6 list-none m-0 p-0'
            >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <li key={index} className='list-none'>
                        <div className='p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-300'>
                            {testimonial.rating && (
                                <div className='flex gap-1 mb-4'>
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className='w-4 h-4 fill-primary text-primary' />
                                    ))}
                                </div>
                            )}
                            <p className='text-muted-foreground mb-4 leading-relaxed'>
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className='flex items-center gap-3'>
                                {testimonial.avatarUrl ? (
                                    <Image
                                        src={testimonial.avatarUrl}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className='w-10 h-10 rounded-full object-cover'
                                    />
                                ) : (
                                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                                        <span className='text-primary font-semibold text-sm'>
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <p className='font-semibold text-foreground'>{testimonial.name}</p>
                                    <p className='text-sm text-muted-foreground'>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}

const defaultTestimonials: Testimonial[] = [
    {
        text: 'Harika bir deneyim! Saç kesimim tam istediğim gibi oldu. Personel çok ilgili ve profesyonel.',
        name: 'Ahmet Y.',
        title: 'Düzenli Müşteri',
        rating: 5,
    },
    {
        text: 'Cilt bakımı için geldim, sonuçlar muhteşem. Kesinlikle tavsiye ederim.',
        name: 'Mehmet K.',
        title: 'İş İnsanı',
        rating: 5,
    },
    {
        text: '1995\'ten beri aynı kalite. Her zaman güvenilir ve profesyonel hizmet.',
        name: 'Burak S.',
        title: '20 Yıllık Müşteri',
        rating: 5,
    },
    {
        text: 'Sakal tasarımı konusunda en iyi yer. Modern ve hijyenik ortam.',
        name: 'Can A.',
        title: 'Yeni Müşteri',
        rating: 5,
    },
    {
        text: 'Lazer epilasyon için tercihim. Profesyonel ekip ve son teknoloji cihazlar.',
        name: 'Emre T.',
        title: 'Düzenli Müşteri',
        rating: 5,
    },
    {
        text: 'Saç boyama konusunda çok yetenekliler. Renk tam istediğim gibi çıktı.',
        name: 'Oğuz D.',
        title: 'İlk Kez Gelen',
        rating: 5,
    },
]

export function TestimonialsSection({
    testimonials = defaultTestimonials,
    title = 'Müşterilerimiz Ne Diyor?',
    subtitle = '1995\'ten bu yana binlerce mutlu müşteri',
    className,
}: TestimonialsSectionProps) {
    const firstColumn = testimonials.slice(0, testimonials.length / 3)
    const secondColumn = testimonials.slice(testimonials.length / 3, (testimonials.length / 3) * 2)
    const thirdColumn = testimonials.slice((testimonials.length / 3) * 2)

    return (
        <section id="yorumlar" className={cn('py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-muted/50', className)}>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>{title}</h2>
                    <p className='text-muted-foreground text-lg'>{subtitle}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
                    {/* Mobile: Show all in one column */}
                    <TestimonialsColumn testimonials={testimonials} duration={25} className='md:hidden' />

                    {/* Desktop: Split into columns */}
                    <TestimonialsColumn testimonials={firstColumn.length > 0 ? firstColumn : testimonials} duration={18} className='hidden md:block' />
                    <TestimonialsColumn testimonials={secondColumn.length > 0 ? secondColumn : testimonials} duration={22} className='hidden md:block' />
                    <TestimonialsColumn testimonials={thirdColumn.length > 0 ? thirdColumn : testimonials} duration={20} className='hidden lg:block' />
                </div>
            </div>
        </section>
    )
}
