import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Level Up Nutrition',
  description: 'High-performance supplements for every athlete, at every stage.',
}

const Layout = dynamic(() => import('./components/Layout'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-background text-text`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
} 