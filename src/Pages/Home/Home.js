import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Charts from './BusinessSummery/Charts';
import NewsLetter from './NewsLetter';
import OurLocations from './OurLocations';
import Parts from './Parts/Parts';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Parts></Parts> */}
            <Products></Products>
            <OurLocations></OurLocations>
            <BusinessSummery></BusinessSummery>
            {/* <Reviews></Reviews> */}
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;