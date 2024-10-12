'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import NavLink from './NavLink'

export default function TopBar() {
    const links = [
        { text: 'Tím', href: '/team' },
        { text: 'Zadanie', href: '/assignment' },
        { text: 'Ponuka', href: '/offer' },
        { text: 'Zápisnice', href: '/minutes' },
        { text: 'Dokumentácia', href: '/documentation' }
    ]
    const currentPath = usePathname()
    const mobileMenu = useRef<HTMLDivElement>(null)
    const mobileMenuButton = useRef<HTMLButtonElement>(null)
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)
    const horizontalMobileMenuIconPath = '/menu-icon-horizontal.svg'
    const verticalMobileMenuIconPath = '/menu-icon-vertical.svg'
    const [mobileMenuIconPath, setMobileMenuIconPath] = useState(horizontalMobileMenuIconPath)
    function handleClickOnMobileMenuButton() {
        setIsMobileMenuShown((prev) => !prev)
        setMobileMenuIconPath((prev) =>
            prev === horizontalMobileMenuIconPath ? verticalMobileMenuIconPath : horizontalMobileMenuIconPath
        )
    }
    function handleClickOutsideMobileMenu(event: MouseEvent) {
        const target = event.target as Node
        if (
            mobileMenu.current &&
            !mobileMenu.current.contains(target) &&
            mobileMenuButton.current &&
            !mobileMenuButton.current.contains(target)
        ) {
            setIsMobileMenuShown(false)
            setMobileMenuIconPath(horizontalMobileMenuIconPath)
        }
    }
    function handleScroll() {
        setIsMobileMenuShown(false)
        setMobileMenuIconPath(horizontalMobileMenuIconPath)
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideMobileMenu)
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <header className='h-14 p-2 grid grid-cols-3 bg-white shadow'>
            <div id='left-part' className='flex justify-start items-center'>
                <Link href='/'>
                    <Image src='/fei-logo.jpg' alt='FEI logo' width='40' height='40' className='w-10' />
                </Link>
            </div>
            <div id='middle-part' className='flex justify-center items-center'>
                <nav className='hidden sm:flex gap-4'>
                    {links.map((link) => (
                        <NavLink key={link.text} href={link.href} currentPath={currentPath}>
                            {link.text}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div id='right-part' className='flex justify-end items-center'>
                <button ref={mobileMenuButton} onClick={handleClickOnMobileMenuButton} className='sm:hidden'>
                    <Image src={mobileMenuIconPath} alt='Menu icon' width='40' height='40' className='w-10' />
                </button>
            </div>
            {isMobileMenuShown && (
                <div
                    id='mobile-menu'
                    ref={mobileMenu}
                    className='sm:hidden absolute right-0 top-14 bottom-0 z-10 w-1/2 p-3 flex flex-col gap-3 bg-white shadow'
                >
                    {links.map((link) => (
                        <NavLink key={link.text} href={link.href} currentPath={currentPath} className='text-lg'>
                            {link.text}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    )
}
