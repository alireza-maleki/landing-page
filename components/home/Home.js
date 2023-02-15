import React, { Fragment } from 'react';

import Intro from "../intro/Intro";
import About from '../about/About';
import Values from '../values/Values';
import Counts from '../counts/Counts';
import Feature from '../feature/Feature';
import Services from '../services/Services';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <Fragment>
            <Intro />
            <About />
            <Values />
            <Counts />
            <Feature />
            <Services />
            <Pricing />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default Home