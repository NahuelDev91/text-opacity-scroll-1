import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from '../context/ParallaxProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider >
  )
}

export default MyApp
