import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import { Inter } from 'next/font/google'
import NextAuthSessionProvider from '@/providers/sessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R Dash',
  description: 'RCR Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}
