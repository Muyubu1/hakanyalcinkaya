'use client'

import {
    HoverSlider,
    HoverSliderImage,
    HoverSliderImageWrap,
    TextStaggerHover,
} from '@/components/ui/animated-slideshow'
import { cn } from '@/lib/utils'

interface Service {
    id: number
    name: string
    imageUrl: string
}

interface ServicesSectionProps {
    services?: Service[]
    title?: string
    subtitle?: string
    className?: string
}

const defaultServices: Service[] = [
    {
        id: 1,
        name: 'Saç Kesimi',
        imageUrl: '/foto/sacKesim1.jpg',
    },
    {
        id: 2,
        name: 'Sakal Tasarımı',
        imageUrl: '/foto/sakalTasarimi.jpg',
    },
    {
        id: 3,
        name: 'Perma',
        imageUrl: '/foto/perma.jpg',
    },
    {
        id: 4,
        name: 'Cilt Bakımı',
        imageUrl: '/foto/ciltBakim1.jpg',
    },
    {
        id: 5,
        name: 'Kaş Tasarımı',
        imageUrl: '/foto/kasTasarimi23.png',
    },
    {
        id: 6,
        name: 'Saç Terapisi',
        imageUrl: '/foto/sacTerapisi3.png',
    },
    {
        id: 7,
        name: 'Renklendirme',
        imageUrl: '/foto/erkekSacBoyama.jpg',
    },
    // {
    //     id: 8,
    //     name: 'Lazer Epilasyon',
    //     imageUrl: '/foto/erkekYuzLazer.jpg',
    // }
]

export function ServicesSection({
    services = defaultServices,
    title = 'Hizmetlerimiz',
    subtitle = 'Profesyonel ekibimizle size en iyi hizmeti sunuyoruz',
    className,
}: ServicesSectionProps) {
    return (
        <section id="hizmetler" className={cn('py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-background', className)}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
                </div>

                <HoverSlider className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                    <div className="flex-1 order-2 lg:order-1">
                        <ul className="space-y-4 list-none m-0 p-0 pb-12 lg:pb-0">
                            {services.map((service, index) => (
                                <li key={service.id} className="list-none min-h-[48px] flex items-center">
                                    <TextStaggerHover
                                        text={service.name}
                                        index={index}
                                        className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground cursor-pointer block py-2 border-b border-border/30 hover:border-primary transition-colors active:text-primary"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <HoverSliderImageWrap className="flex-1 order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden bg-muted sticky top-24 lg:static z-10 shadow-lg lg:shadow-none mb-8 lg:mb-0">
                        {services.map((service, index) => (
                            <HoverSliderImage
                                key={service.id}
                                index={index}
                                imageUrl={service.imageUrl}
                                src={service.imageUrl}
                                alt={service.name}
                                className="w-full h-full object-cover"
                            />
                        ))}
                    </HoverSliderImageWrap>
                </HoverSlider>
            </div>
        </section>
    )
}
