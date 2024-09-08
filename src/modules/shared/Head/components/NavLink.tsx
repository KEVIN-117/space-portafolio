"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string
    text: string
}

export function NavLink({ href, text }: NavLinkProps) {
    const router = usePathname()
    const isActive = router === href
    return (
        <Link className={`
            cursor-pointer text-white font-bold relative text-base md:w-fit w-full py-1 px-5 h-full text-center bg-stone-900 bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-0 before:-bottom-0 before:-left-0 before:-right-0 before:bg-gradient-to-r before:from-purple-700 before:from-5% before:to-cyan-500 before:bg-[length:200%] before:-z-10 before:rounded-[35px] before:hover:blur-md before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] flex items-center justify-center
        ${isActive ? 'before:bg-[length:10%] before:blur-md' : ''}`} href={href}>
            <span className="relative z-20">{text}</span>
        </Link>
    )
}

