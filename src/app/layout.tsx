import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aesthetic Photo Gallery',
  description: 'A modern, smooth-scrolling image gallery template.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
