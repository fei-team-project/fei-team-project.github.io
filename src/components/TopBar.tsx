import Link from 'next/link'
import Image from 'next/image'

export default function TopBar() {
    return (
        <header className='grid grid-cols-3 p-2 bg-white shadow'>
            <div className='flex'>
                <Link href='/'>
                    <Image src='/fei-logo.jpg' alt='FEI logo' width='36' height='36' className='w-9' />
                </Link>
            </div>
            <nav className='place-self-center'>
                <Link href='/team' className='mr-4 text-lg hover:text-fei-blue hover:underline'>
                    Tím
                </Link>
                <Link href='/assignment' className='mr-4 text-lg hover:text-fei-blue hover:underline'>
                    Zadanie
                </Link>
                <Link href='/offer' className='mr-4 text-lg hover:text-fei-blue hover:underline'>
                    Ponuka
                </Link>
                <Link href='/minutes' className='mr-4 text-lg hover:text-fei-blue hover:underline'>
                    Zápisnice
                </Link>
                <Link href='/documentation' className='text-lg hover:text-fei-blue hover:underline'>
                    Dokumentácia
                </Link>
            </nav>
            <div></div>
        </header>
    )
}
