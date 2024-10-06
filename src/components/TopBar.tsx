import Link from 'next/link'

export default function TopBar() {
    return (
        <header className='grid grid-cols-3 p-2 bg-white shadow'>
            <div>
                <Link href='/'>
                    <img src='/fei-logo.jpg' className='w-9 rounded' />
                </Link>
            </div>
            <nav className='place-self-center'>
                <Link href='/assignment' className='mr-3 text-lg hover:text-fei-blue hover:underline'>
                    Zadanie
                </Link>
                <Link href='/offer' className='mr-3 text-lg hover:text-fei-blue hover:underline'>
                    Ponuka
                </Link>
                <Link href='/minutes' className='text-lg hover:text-fei-blue hover:underline'>
                    Zápisnice
                </Link>
            </nav>
            <div></div>
        </header>
    )
}
