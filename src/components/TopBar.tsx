'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import NavLink from './NavLink'

export default function TopBar() {
    const currentPath = usePathname()
    return (
        <header className='grid grid-cols-3 p-2 bg-white shadow'>
            <div className='flex'>
                <Link href='/'>
                    <Image src='/fei-logo.jpg' alt='FEI logo' width='36' height='36' className='w-9' />
                </Link>
            </div>
            <nav className='place-self-center'>
                <NavLink href='/team' currentPath={currentPath} className='mr-4'>
                    Tím
                </NavLink>
                <NavLink href='/assignment' currentPath={currentPath} className='mr-4'>
                    Zadanie
                </NavLink>
                <NavLink href='/offer' currentPath={currentPath} className='mr-4'>
                    Ponuka
                </NavLink>
                <NavLink href='/minutes' currentPath={currentPath} className='mr-4'>
                    Zápisnice
                </NavLink>
                <NavLink href='/documentation' currentPath={currentPath}>
                    Dokumentácia
                </NavLink>
            </nav>
            <div></div>
        </header>
    )
}
