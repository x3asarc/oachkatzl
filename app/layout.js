import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Appartement Oachkatzl - Luxury Austrian Mountain Retreat',
  description: 'Experience authentic Austrian hospitality in our beautifully appointed apartment. Perfect for mountain getaways with modern amenities and stunning Alpine views.',
  keywords: 'Austria apartment, Alpine accommodation, mountain retreat, vacation rental',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}