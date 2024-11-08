import Link from 'next/link'

export default function Minutes({ date, path, last = false }: { date: string; path: string; last?: boolean }) {
    function moreThanDaysDifference(durationInDays: number) {
        const currentDate = new Date()
        const givenDate = new Date(date)
        if (givenDate > currentDate) {
            return false
        }
        const diff = currentDate.getTime() - givenDate.getTime()
        return diff > 1000 * 60 * 60 * 24 * durationInDays
    }

    return path ? (
        <Link
            href={path ? path : '#'}
            target='_blank'
            className='min-h-20 bg-white hover:bg-white/70 hover:text-black/70 rounded shadow flex justify-center items-center text-center sm:text-lg transition relative'
            title='Otvoriť zápisnicu'
        >
            {/* if its last and the date is not later than 1 week */}

            {last && moreThanDaysDifference(7) && (
                <div className='absolute top-0 right-0 bg-[#ff1500] text-white rotate-[30deg] py-1 px-2 translate-x-1/3 -translate-y-1/3 text-sm rounded-md flex items-center justify-center shadow-md font-bold'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-4 h-4 inline-block mr-0.5'
                    >
                        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                    </svg>
                    NEW
                </div>
            )}
            {date}
        </Link>
    ) : (
        <div
            className='min-h-20 rounded shadow flex justify-center items-center text-center sm:text-lg bg-neutral-200/20'
            title='Stretnutie sa ešte neuskutočnilo'
        >
            {date}
        </div>
    )
}
