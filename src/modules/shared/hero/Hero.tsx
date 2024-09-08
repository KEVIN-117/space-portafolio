import React from 'react'
import HeroContent from '@/modules/shared/background/HeroContent'

export function Hero() {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="absolute md:top-[-225px] md:h-full h-screen md:w-full w-screen left-0 z-[1] object-cover "
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    )
}