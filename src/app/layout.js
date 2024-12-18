'use client'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import './scrollbar.css'
import { usePathname } from 'next/navigation'
import { AuthProvider } from '@/components/AuthContext'
import '@/styles/tailwind.css'
import { LayoutAdmin } from '@/components/LayoutAdmin'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin');


  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`flex h-full  bg-fixed bg-gradient-to-b from-red-900/90 via-red-900 to-black`}
      >
         {isAdminRoute ? <AuthProvider><LayoutAdmin>{children}</LayoutAdmin></AuthProvider>
          : (
        <Providers>
          <div className="flex w-full">
           
              <Layout>{children}</Layout>
          </div>
        </Providers>
        )}
      </body>
    </html>
  )
}
