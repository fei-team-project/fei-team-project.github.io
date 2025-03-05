import Minutes from '@/components/Minutes'
import PageTitle from '@/components/PageTitle'

export default function MinutesPage() {
    const minutes = [
        { date: '30.09.2024', path: '/minutes/minutes-2024-09-30.pdf' },
        { date: '7.10.2024', path: '/minutes/minutes-2024-10-07.pdf' },
        { date: '14.10.2024', path: '/minutes/minutes-2024-10-14.pdf' },
        { date: '21.10.2024', path: '/minutes/minutes-2024-10-21.pdf' },
        { date: '28.10.2024', path: '/minutes/minutes-2024-10-28.pdf' },
        { date: '4.11.2024', path: '/minutes/minutes-2024-11-04.pdf' },
        { date: '11.11.2024', path: '/minutes/minutes-2024-11-11.pdf' },
        { date: '18.11.2024', path: '/minutes/minutes-2024-11-18.pdf' },
        { date: '25.11.2024', path: '/minutes/minutes-2024-11-25.pdf' },
        { date: '02.12.2024', path: '/minutes/minutes-2024-12-02.pdf' },
        { date: '14.01.2025', path: '/minutes/minutes-2025-01-14.pdf' },
        { date: '', path: '' },
        { date: '19.02.2025', path: '/minutes/minutes-2025-02-19.pdf' },
        { date: '26.02.2025', path: '/minutes/minutes-2025-02-26.pdf' }
    ]

    return (
        <main className='pt-24 overflow-x-clip'>
            <PageTitle title='Zápisnice' />
            <div className='max-w-5xl mx-auto flex flex-col gap-6'>
                <div className='px-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5'>
                    {minutes.slice(0, 12).map((minute, i) => (
                        <Minutes key={i} date={minute.date} path={minute.path} last={i === minutes.length - 1} />
                    ))}
                    {Array.from({ length: 12 - minutes.length }).map((_, i) => (
                        <Minutes key={minutes.length + i} date='' path='' />
                    ))}
                </div>
                <hr className='w-full' />
                <div className='px-5 pb-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5'>
                    {minutes.slice(12, 24).map((minute, i) => (
                        <Minutes key={'2' + i} date={minute.date} path={minute.path} />
                    ))}
                    {Array.from({ length: 12 - Math.min(12, minutes.slice(12, 24).length) }).map((_, i) => (
                        <Minutes key={'2' + (minutes.slice(12, 24).length + i)} date='' path='' />
                    ))}
                </div>
            </div>
        </main>
    )
}
