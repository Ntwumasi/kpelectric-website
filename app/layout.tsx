import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'kP Electric - Licensed Electrician Services | North Shore MA',
  description: 'Fully licensed and insured electrician services. Reliable and professional, offering both small and large jobs with free estimates. Serving North Shore Massachusetts.',
  keywords: 'electrician, North Shore, Massachusetts, licensed electrician, electrical services, residential, commercial',
  openGraph: {
    title: 'kP Electric - Licensed Electrician Services',
    description: 'Professional electrician services in North Shore MA',
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