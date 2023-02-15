import '../styles/globals.css';
import Layout from '../components/layout/Layout';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';



const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true, فقط یکبار اجرا میشود
      offset: 50,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp;