import { AnalyticsWrapper } from '@/components/analytics'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Georgios Kotziabassis',
  description: 'CTO at SPACEGOATS, aiming to simplify international sales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`bg-[#ebebeb] text-[#141414] dark:bg-[#141414] dark:text-[#ebebeb] ${GeistSans.variable} ${GeistMono.variable}`}
      lang="en"
    >
      <head />
      <body className="touch-manipulation overflow-x-hidden antialiased">
        <main className="my-8 max-w-3xl px-6 md:mx-auto md:my-16 lg:my-32">
          {children}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  )
}
