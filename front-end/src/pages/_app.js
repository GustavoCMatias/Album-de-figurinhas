import AlbunsDataContext from '@/contexts/albumContext';
import UserContext from '@/contexts/userContext'
import '@/styles/globals.css'
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <UserContext>
        <AlbunsDataContext>
          <Component {...pageProps} />
        </AlbunsDataContext>
      </UserContext>
    </CookiesProvider>

  )
}
