import TopBar from '@/components/TopBar'
import Image from 'next/image'
import Link from 'next/link'

export default function OfferPage() {
    return (
        <div>
            <TopBar />
            <main className='pt-10 pb-10 flex flex-col'>
                <h1 className='mb-10 text-center text-5xl'>Ponuka</h1>
                <div className='max-w-5xl mx-auto mb-5 pl-3 pr-3 flex flex-col gap-3'>
                    <Image src='/offer-01.jpg' alt='Offer 1/4' width='100' height='100' className='w-full shadow' />
                    <Image src='/offer-02.jpg' alt='Offer 2/4' width='100' height='100' className='w-full shadow' />
                    <Image src='/offer-03.jpg' alt='Offer 3/4' width='100' height='100' className='w-full shadow' />
                    <Image src='/offer-04.jpg' alt='Offer 4/4' width='100' height='100' className='w-full shadow' />
                </div>
                <Link href='/offer.pdf' className='text-center text-lg hover:text-fei-blue hover:underline'>
                    PDF
                </Link>
            </main>
        </div>
    )
}
