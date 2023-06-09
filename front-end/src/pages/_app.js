import UserContext from '@/contexts/context'
import '@/styles/globals.css'
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </CookiesProvider>

  )
}
