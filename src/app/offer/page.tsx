import Image from 'next/image'

import PageTitle from '@/components/PageTitle'

export default function OfferPage() {
    return (
        <main className='pt-24'>
            <PageTitle title='Ponuka' />
            <div className='max-w-5xl mx-auto px-5 mb-3 flex flex-col gap-3'>
                <Image src='/offer-01.jpg' alt='Offer 1/4' width='100' height='100' className='w-full shadow' />
                <Image src='/offer-02.jpg' alt='Offer 2/4' width='100' height='100' className='w-full shadow' />
                <Image src='/offer-03.jpg' alt='Offer 3/4' width='100' height='100' className='w-full shadow' />
                <Image src='/offer-04.jpg' alt='Offer 4/4' width='100' height='100' className='w-full shadow' />
            </div>
        </main>
    )
}
