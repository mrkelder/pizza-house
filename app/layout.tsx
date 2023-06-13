import { Header } from "@/src/components/Header"
import { Inter } from "next/font/google"

import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pizza House",
  description:
    "Pizza House is a pizza builder to create the pizza of your dreams 🍕🤗"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
