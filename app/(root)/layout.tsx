import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'MeetYard',
  description: 'Meet me at the Yard',
  icons: {
    icon: '/icons/logo.svg',
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  )
}

export default RootLayout
