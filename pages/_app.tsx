import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <div className=' bg-[rgb(145,156,143)] flex'>
  <NavBar/>
  <Component {...pageProps} />
  </div>
}

export default MyApp
