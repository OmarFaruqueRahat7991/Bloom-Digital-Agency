import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from './About/About';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AboutMe></AboutMe>
            <Services></Services>
        </div>
    );
};

export default Home;