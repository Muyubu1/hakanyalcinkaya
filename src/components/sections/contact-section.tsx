'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactSectionProps {
    address?: string
    phone?: string
    displayPhone?: string
    whatsapp?: string
    hours?: string
    closedDay?: string
    mapUrl?: string
    className?: string
}

export function ContactSection({
    address = 'Yeni, Gaziler Cd. No:95 D:b, 41420 Çayırova/Kocaeli',
    phone = '05396557180',
    displayPhone = '0539 655 71 80',
    whatsapp = '905396557180',
    hours = '09:00 - 22:00',
    closedDay = 'Pazar günleri kapalı',
    mapUrl = 'https://maps.google.com/maps?q=Yeni,+Gaziler+Cd.+No:95+D:b,+41420+%C3%87ay%C4%B1rova/Kocaeli&t=&z=16&ie=UTF8&iwloc=&output=embed',
    className,
}: ContactSectionProps) {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    const handleCall = () => {
        window.location.href = `tel:${phone}`
    }

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Merhaba, randevu almak istiyorum.')
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank')
    }

    const contactItems = [
        {
            icon: MapPin,
            label: 'Adres',
            value: address,
            action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank'),
        },
        {
            icon: Phone,
            label: 'Telefon',
            value: displayPhone,
            action: handleCall,
        },
        {
            icon: Clock,
            label: 'Çalışma Saatleri',
            value: `${hours} (${closedDay})`,
        },
    ]

    return (
        <section
            id="iletisim"
            ref={sectionRef}
            className={cn('py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-background', className)}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">İletişim & Randevu</h2>
                    <p className="text-muted-foreground text-lg">
                        Hemen arayın veya WhatsApp&apos;tan mesaj gönderin
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-6">
                        {contactItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                className={cn(
                                    'flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border',
                                    item.action && 'cursor-pointer hover:bg-muted/80 transition-colors'
                                )}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={item.action}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                    <p className="text-foreground font-medium">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.button
                                onClick={handleWhatsApp}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20BD5C] transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp ile Randevu
                            </motion.button>

                            <motion.button
                                onClick={handleCall}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Phone className="w-5 h-5" />
                                Hemen Ara
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-xl overflow-hidden bg-muted"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '300px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hakan Yalçınkaya Güzellik Merkezi Konum"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
