import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    href: string
    text: string
}

export function NavLink({ href, text }: NavLinkProps) {
    return (
        <Link className='text-white hover:text-blue-500 transition-colors duration-300 font-semibold text-lg cursor-pointer hover:underline' href={href}>
            {text}
        </Link>
    )
}

