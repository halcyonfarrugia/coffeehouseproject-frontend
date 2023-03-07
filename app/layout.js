"use client"
import './globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body>
        <AnimatePresence initial={false}>
          <ChakraProvider key={path}>
            {children}
          </ChakraProvider>
        </AnimatePresence>
      </body>
    </html>
  )
}
