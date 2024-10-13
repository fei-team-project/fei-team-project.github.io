import Link from 'next/link'
import TopBar from '../components/TopBar'
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <TopBar />
            <main className='flex flex-col items-center'>
                <h1 className='mt-40 text-5xl text-center'>Tímový projekt na FEI STU 2024/25</h1>
                <h2 className='mt-10 mb-40 text-3xl text-center'>
                    Chatbot (GPT) na vyhľadávanie v štruktúrovaných dátach - agregovanie viacerých chatbotov
                </h2>
                <div className='flex justify-center items-center gap-5'>
                    <Link href='https://github.com/orgs/fei-team-project/repositories'>
                        <Image src='github-logo.svg' alt='Github logo' width='50' height='50' />
                    </Link>
                    <Link href='https://trello.com/b/yrHQ2Hsf/tp-2024'>
                        <Image src='trello-logo.svg' alt='Trello logo' width='50' height='50' />
                    </Link>
                </div>
            </main>
        </div>
    )
}
