import Head from 'next/head';

// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "../components/home/Home";
import { Fragment } from 'react';

const HomePage = () => {


  return (
    <Fragment>

      <Head>
        <title>landing-Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

    </Fragment>
  )
}

export default HomePage;