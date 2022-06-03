import React from 'react';

import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Conatct from '../Contact/Conatct';
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
            <Conatct></Conatct>
            
            
        </div>
    );
};

export default Home;