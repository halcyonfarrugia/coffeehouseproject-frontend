import '@/styles/globals.css'
import "../styles/carousel.scss"
import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false}>
      <ChakraProvider>
        <Component {...pageProps} key={router.route}/>
      </ChakraProvider>
    </AnimatePresence>
  )
}
