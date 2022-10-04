import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <div className=''>
  <NavBar/>
  <Component {...pageProps} />
  </div>
}

export default MyApp
