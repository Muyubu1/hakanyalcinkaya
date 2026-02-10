'use client'

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'

interface HeroSectionProps {
    backgroundImage?: string
    videoSrc?: string
    posterImage?: string
    title?: string
    subtitle?: string
}

export function HeroSection({
    backgroundImage = '/anaGiris.png',
    videoSrc = '/Salon.mp4',
    posterImage = '/anaGiris.png',
    title = 'Hakan Yalçınkaya Güzellik Merkezi',
    subtitle = '"Bi güzellik yap kendine"',
}: HeroSectionProps) {
    return (
        <section id="hero">
            <ScrollExpandMedia
                mediaType="video"
                mediaSrc={videoSrc}
                posterSrc={posterImage}
                bgImageSrc={backgroundImage}
                title={title}
                subtitle={subtitle}
                scrollToExpand="Keşfetmek için kaydırın ↓"
                textBlend={true}
            />
        </section>
    )
}
