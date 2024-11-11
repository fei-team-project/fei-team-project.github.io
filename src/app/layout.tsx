import type { Metadata } from 'next'
import './global.css'
import TopBar from '@/components/TopBar'

export const metadata: Metadata = {
    title: 'Tímový projekt',
    description: 'Prezentačná webstránka k tímovému projektu na FEI STU'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='sk'>
            <head>
                <link rel='icon' type='image/x-icon' href='favicon.ico' />
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='192x192' href='android-chrome-192x192.png' />
                <link rel='icon' type='image/png' sizes='512x512' href='android-chrome-512x512.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
            </head>
            <body className='bg-background'>
                <div>
                    <TopBar />
                    {children}
                </div>
            </body>
        </html>
    )
}
