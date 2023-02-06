import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-white text-black" lang="en">
      <head />
      <body className="touch-manipulation overflow-x-hidden antialiased">
        <main className="my-8 max-w-3xl px-6 md:my-16 md:mx-auto lg:my-32">{children}</main>
      </body>
    </html>
  )
}
