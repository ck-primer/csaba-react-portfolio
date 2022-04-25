import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Login from '../components/Login';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();
  const { user, username } = userData;
  return (
    <UserContext.Provider value={userData}>
      <Layout>{!user ? <Login /> : <Component {...pageProps} />}</Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
