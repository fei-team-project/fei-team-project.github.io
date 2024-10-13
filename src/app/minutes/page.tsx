import Minutes from '@/components/Minutes'
import PageTitle from '@/components/PageTitle'
import TopBar from '@/components/TopBar'

export default function MinutesPage() {
    const minutes = [
        { id: '1', date: '30.09.2024', path: '/minutes/minutes-01-2024-09-30.pdf' },
        { id: '2', date: '7.10.2024', path: '/minutes/minutes-02-2024-10-07.pdf' },
        { id: '3', date: '', path: '' },
        { id: '4', date: '', path: '' },
        { id: '5', date: '', path: '' },
        { id: '6', date: '', path: '' },
        { id: '7', date: '', path: '' },
        { id: '8', date: '', path: '' },
        { id: '9', date: '', path: '' },
        { id: '10', date: '', path: '' },
        { id: '11', date: '', path: '' },
        { id: '12', date: '', path: '' }
    ]
    return (
        <div>
            <TopBar />
            <main className='pt-24'>
                <PageTitle title='Zápisnice' />
                <div className='max-w-5xl mx-auto pl-5 pr-5 pb-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5'>
                    {minutes.map((minutes) => (
                        <Minutes key={minutes.id} date={minutes.date} path={minutes.path} />
                    ))}
                </div>
            </main>
        </div>
    )
}
