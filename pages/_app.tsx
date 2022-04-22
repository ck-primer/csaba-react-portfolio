import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Login from '../components/Login';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const  userData = useUserData();
  return (
    <UserContext.Provider value={userData}>
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}

      <Login />
    </UserContext.Provider>
  );
}

export default MyApp;
