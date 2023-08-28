import './globals.css'
import type { Metadata } from 'next'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
//import "../css/customcss.css";
import Head from "next/head";
import Script from "next/script";
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

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
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <body className={inter.className}>
      {children}
    </body>
    </>
  );
}
