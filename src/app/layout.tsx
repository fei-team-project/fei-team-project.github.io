import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
    title: 'Tímový projekt'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className='bg-background'>{children}</body>
        </html>
    )
}
