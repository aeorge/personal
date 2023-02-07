import { AnalyticsWrapper } from '@/components/analytics'
import { Inter } from '@next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`bg-[#ebebeb] text-[#141414] dark:bg-[#141414] dark:text-[#ebebeb] ${inter.variable}`}
      lang="en"
    >
      <head />
      <body className="touch-manipulation overflow-x-hidden antialiased">
        <main className="my-8 max-w-3xl px-6 md:my-16 md:mx-auto lg:my-32">
          {children}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  )
}
