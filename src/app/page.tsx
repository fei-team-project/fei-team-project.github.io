import TopBar from '../components/TopBar'

export default function HomePage() {
    return (
        <div className='h-screen flex flex-col'>
            <TopBar />
            <main className='flex flex-col flex-grow items-center justify-center'>
                <img src='/fei-logo.jpg' className='w-44 rounded' />
                <h1 className='mt-10 text-4xl text-center'>FEI STU Tímový projekt 2024/25</h1>
                <h2 className='mt-5 text-3xl text-center'>
                    Chatbot (GPT) na vyhľadávanie v štruktúrovaných dátach - agregovanie viacerých chatbotov
                </h2>
            </main>
        </div>
    )
}
