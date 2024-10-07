import Link from 'next/link'
import TopBar from '../components/TopBar'
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <TopBar />
            <main className='flex flex-col items-center'>
                <h1 className='mt-40 text-5xl text-center'>Tímový projekt na FEI STU 2024/25</h1>
                <h2 className='mt-10 text-3xl text-center'>
                    Chatbot (GPT) na vyhľadávanie v štruktúrovaných dátach - agregovanie viacerých chatbotov
                </h2>
                <Link href='https://github.com/orgs/fei-team-project/repositories' className='mt-60'>
                    <Image src='github-logo.svg' alt='Github logo' width='50' height='50' />
                </Link>
            </main>
        </div>
    )
}
