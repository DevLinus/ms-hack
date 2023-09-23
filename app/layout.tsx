import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import BurgerIcons from '@/components/BurgerIcon';

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={Roboto.className}>
      <BurgerIcons></BurgerIcons>
        {children}
  </body>
    </html>
  )
}
