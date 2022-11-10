import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;