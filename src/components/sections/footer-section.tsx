'use client'

import { Instagram, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface FooterSectionProps {
    logoSrc?: string
    businessName?: string
    slogan?: string
    address?: string
    phone?: string
    displayPhone?: string
    instagram?: string
    instagramHandle?: string
    className?: string
}

export function FooterSection({
    logoSrc,
    businessName = 'Hakan Yalçınkaya Güzellik Merkezi',
    slogan = '"Bi güzellik yap kendine"',
    address = 'Yeni, Gaziler Cd. No:95 D:b, 41420 Çayırova/Kocaeli',
    phone = '05396557180',
    displayPhone = '0539 655 71 80',
    instagram = 'https://www.instagram.com/hakanyalcinkaya_beauty/',
    instagramHandle = '@hakanyalcinkaya_beauty',
    className,
}: FooterSectionProps) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={cn('bg-primary text-primary-foreground py-8 md:py-12 px-4 md:px-8', className)}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center md:text-left">
                        {logoSrc ? (
                            <Image
                                src={logoSrc}
                                alt={businessName}
                                width={80}
                                height={80}
                                className="mb-4 mx-auto md:mx-0 invert"
                            />
                        ) : (
                            <div className="mb-4">
                                <h3 className="text-xl font-bold">{businessName}</h3>
                            </div>
                        )}
                        <p className="text-primary-foreground/80 italic">{slogan}</p>
                        <p className="text-primary-foreground/60 text-sm mt-2">1995&apos;ten beri hizmetinizdeyiz</p>
                    </div>

                    <div className="text-center">
                        <h4 className="font-semibold mb-4">İletişim</h4>
                        <ul className="space-y-3 list-none m-0 p-0">
                            <li className="flex items-center justify-center gap-2 text-primary-foreground/80">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{address}</span>
                            </li>
                            <li>
                                <a
                                    href={`tel:${phone}`}
                                    className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>{displayPhone}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-right">
                        <h4 className="font-semibold mb-4">Sosyal Medya</h4>
                        <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                            <span>{instagramHandle}</span>
                        </a>
                        <p className="text-primary-foreground/60 text-sm mt-4">
                            Çalışma Saatleri: 09:00 - 22:00
                            <br />
                            (Pazar günleri kapalı)
                        </p>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 pt-6 text-center">
                    <p className="text-primary-foreground/60 text-sm">
                        © {currentYear} {businessName}. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    )
}
