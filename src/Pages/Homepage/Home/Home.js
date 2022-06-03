import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Reviews from '../Review/Reviews';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Service></Service>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;