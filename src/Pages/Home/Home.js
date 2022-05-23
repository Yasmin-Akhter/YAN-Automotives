import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Charts from './BusinessSummery/Charts';
import NewsLetter from './NewsLetter';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div className='px-12'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>

            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;