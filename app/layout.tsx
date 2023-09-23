import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import BurgerIcons from '@/components/BurgerIcon';

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Start Moving',
  description: 'Start Moving and Having fun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        <div className='h-screen w-screen overflow-hidden'>
          <div className="z-50 absolute">
      <BurgerIcons></BurgerIcons>

          </div>
          <div className='mt-8'>
        {children}

          </div>
        </div>
  </body>
    </html>
  )
}
