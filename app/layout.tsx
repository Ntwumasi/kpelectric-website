import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'KP Electric - Licensed Master Electrician Services | North Shore MA',
  description: 'Fully licensed and insured master electrician services. Reliable and professional, offering both small and large jobs with free estimates. Serving North Shore Massachusetts.',
  keywords: 'master electrician, North Shore, Massachusetts, licensed master electrician, electrical services, residential, commercial',
  openGraph: {
    title: 'KP Electric - Licensed Master Electrician Services',
    description: 'Professional master electrician services in North Shore MA',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}