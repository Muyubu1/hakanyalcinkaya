'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'
import { cn } from '@/lib/utils'

interface AboutSectionProps {
    title?: string
    subtitle?: string
    description?: string
    imageUrl?: string
    stats?: { value: string; label: string }[]
    className?: string
}

const defaultStats = [
    { value: '1995', label: 'Kuruluş' },
    { value: '29+', label: 'Yıllık Deneyim' },
    { value: '10K+', label: 'Mutlu Müşteri' },
    { value: '8', label: 'Hizmet Alanı' },
]

export function AboutSection({
    title = 'Hikayemiz',
    subtitle = '1995\'ten bu yana güzelliğinize değer katıyoruz',
    description = 'Hakan Yalçınkaya Güzellik Merkezi olarak, 1995 yılından bu yana Çayırova\'da hizmet veriyoruz. Profesyonel ekibimiz ve modern ekipmanlarımızla, her müşterimize özel bir deneyim sunuyoruz. Bay ve bayan müşterilerimize geniş bir hizmet yelpazesi ile güzellik ve bakım ihtiyaçlarını karşılıyoruz.',
    imageUrl = '/images/hikayemiz.jpg',
    stats = defaultStats,
    className,
}: AboutSectionProps) {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section
            id="hakkimizda"
            ref={sectionRef}
            className={cn('py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-muted/30', className)}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Image
                            src={imageUrl}
                            alt="Hakan Yalçınkaya Güzellik Merkezi"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                                <p className="text-white font-medium text-center text-lg">
                                    &ldquo;Bi güzellik yap kendine&rdquo;
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">
                            Hakkımızda
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            {isInView && (
                                <VerticalCutReveal
                                    splitBy="words"
                                    staggerDuration={0.1}
                                    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                                >
                                    {title}
                                </VerticalCutReveal>
                            )}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-6">{subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-4 bg-background rounded-xl border border-border"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
