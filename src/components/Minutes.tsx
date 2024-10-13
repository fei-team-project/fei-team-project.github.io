import Link from 'next/link'

export default function Minutes({ date, path }: { date: string; path: string }) {
    return path ? (
        <Link
            href={path ? path : '#'}
            target='_blank'
            className='min-h-20 bg-white hover:bg-gray-50 rounded shadow flex justify-center items-center text-center sm:text-lg transition duration-100'
            title='Otvoriť zápisnicu'
        >
            {date}
        </Link>
    ) : (
        <div
            className='min-h-20 bg-white rounded shadow flex justify-center items-center text-center sm:text-lg bg-white/40'
            title='Stretnutie sa ešte neuskutočnilo'
        >
            {date}
        </div>
    )
}
