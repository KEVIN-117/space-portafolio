import React from 'react'
import { NavLink } from './NavLink'
import { Logo } from '@/global/icons/Logo'

const navigationItems = [
    {
        href: '/about-me',
        text: 'About Me'
    },
    {
        href: '/projects',
        text: 'Projects'
    },
    {
        href: '/contact',
        text: 'Contact'
    }
]

export function NavBar() {
    return (
        <nav className='flex flex-col md:flex-row items-center justify-between w-full px-20 py-4 backdrop-blur-lg bg-stone-950/40 sticky top-0 z-50'>
            <Logo width={50} height={50} />
            <div className='flex flex-row space-x-8'>
                {navigationItems.map((item, index) => (
                    <NavLink key={index} href={item.href} text={item.text} />
                ))}
            </div>
            <div className='flex flex-row space-x-4'>
                <a href='#' className='text-white hover:text-blue-500 transition-colors duration-300 font-semibold text-lg cursor-pointer hover:underline'>Resume</a>
                <a href='#' className='text-white hover:text-blue-500 transition-colors duration-300 font-semibold text-lg cursor-pointer hover:underline'>GitHub</a>
            </div>
        </nav>
    )
}