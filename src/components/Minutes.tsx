import Link from 'next/link'

export default function Minutes({ date, path }: { date: string; path: string }) {
    return (
        <Link
            href={path}
            target='_blank'
            className='min-h-20 bg-white hover:bg-gray-50 rounded shadow flex justify-center items-center text-center sm:text-lg'
        >
            {date}
        </Link>
    )
}
