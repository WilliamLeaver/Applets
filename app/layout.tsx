import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Applets',
  description: 'Just some stuff I guess',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" data-theme="business">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
