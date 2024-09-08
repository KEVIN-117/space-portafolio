import React from 'react'
import { NavLink } from './NavLink'
import { Logo } from '@/global/icons/Logo'
import { GitHub } from '@/global/icons/GitHub'

const navigationItems = [
    {
        href: '/about-me',
        text: 'Sobre mi'
    },
    {
        href: '/projects',
        text: 'Proyectos'
    },
    {
        href: '/contact',
        text: 'Contacto'
    }
]

export function NavBar() {
    return (
        <nav className='flex flex-col gap-4 md:flex-row items-center justify-between w-full px-20 py-4 backdrop-blur-lg bg-stone-950/40 sticky top-0 z-50'>
            <Logo width={50} height={50} />
            <div className='flex md:flex-row flex-col justify-center items-center gap-4'>
                {navigationItems.map((item, index) => (
                    <NavLink key={index} href={item.href} text={item.text} />
                ))}
            </div>
            <div className='flex flex-row space-x-4'>                
                <button className='flex justify-between items-center gap-2 cursor-pointer text-white font-semibold px-7 py-1 rounded-xl hover:scale-105 duration-200 shadow-md transition-shadow shadow-cyan-500
                '>
                    <GitHub className='
                        h-8 w-8
                        text-white
                        hover:text-gray-500
                        transition-colors
                        duration-300                    
                    ' />
                    GitHub
                </button>
            </div>
        </nav>
    )
}