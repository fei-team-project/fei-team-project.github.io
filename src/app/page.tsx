import Link from 'next/link'
import TopBar from '../components/TopBar'
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className='h-screen flex flex-col'>
            <TopBar />
            <main className='flex flex-col items-center'>
                <h1 className='mt-10 text-4xl text-center'>FEI STU Tímový projekt 2024/25</h1>
                <h2 className='mt-5 text-3xl text-center'>
                    Chatbot (GPT) na vyhľadávanie v štruktúrovaných dátach - agregovanie viacerých chatbotov
                </h2>
                <Link href='https://github.com/orgs/fei-team-project/repositories' className='mt-10'>
                    <Image src='github-logo.svg' alt='Github logo' width='50' height='50' />
                </Link>
            </main>
        </div>
    )
}
