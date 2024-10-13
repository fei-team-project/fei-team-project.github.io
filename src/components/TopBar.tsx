'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import NavLink from './NavLink'

export default function TopBar() {
    const navLinks = [
        { text: 'Tím', href: '/team' },
        { text: 'Zadanie', href: '/assignment' },
        { text: 'Ponuka', href: '/offer' },
        { text: 'Zápisnice', href: '/minutes' },
        { text: 'Dokumentácia', href: '/documentation', target: '_blank' }
    ]
    const currentPath = usePathname()
    const mobileMenu = useRef<HTMLDivElement>(null)
    const mobileMenuButton = useRef<HTMLButtonElement>(null)
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)
    const horizontalMobileMenuIconPath = '/menu-icon-horizontal.svg'
    function handleClickOnMobileMenuButton() {
        setIsMobileMenuShown((prev) => !prev)
    }
    function handleClickOutsideMobileMenu(event: MouseEvent | TouchEvent) {
        const target = event.target as Node
        if (
            mobileMenu.current &&
            !mobileMenu.current.contains(target) &&
            mobileMenuButton.current &&
            !mobileMenuButton.current.contains(target)
        ) {
            setIsMobileMenuShown(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideMobileMenu)
        document.addEventListener('touchstart', handleClickOutsideMobileMenu)
    })
    return (
        <header className='fixed w-screen h-14 p-2 grid grid-cols-3 bg-white shadow'>
            <div id='left-part' className='flex justify-start items-center'>
                <Link href='/'>
                    <Image src='/fei-logo.jpg' alt='FEI logo' width='40' height='40' className='w-10' />
                </Link>
            </div>
            <div id='middle-part' className='flex justify-center items-center'>
                <nav className='hidden sm:flex gap-4'>
                    {navLinks.map((link) => (
                        <NavLink key={link.text} href={link.href} target={link.target} currentPath={currentPath}>
                            {link.text}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div id='right-part' className='flex justify-end items-center'>
                <button ref={mobileMenuButton} onClick={handleClickOnMobileMenuButton} className='sm:hidden'>
                    <Image
                        src={horizontalMobileMenuIconPath}
                        alt='Menu icon'
                        width='40'
                        height='40'
                        className={`w-10${isMobileMenuShown ? ' rotate-90' : ''} transition-transform duration-300`}
                    />
                </button>
            </div>
            <div
                id='mobile-menu'
                ref={mobileMenu}
                className={`sm:hidden fixed right-0 top-14 bottom-0 z-10 w-1/2 p-5 bg-white shadow ${isMobileMenuShown ? 'left-1/2' : 'left-full'} duration-300`}
            >
                <nav className='flex flex-col gap-5'>
                    {navLinks.map((link) => (
                        <NavLink key={link.text} href={link.href} currentPath={currentPath}>
                            {link.text}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}
