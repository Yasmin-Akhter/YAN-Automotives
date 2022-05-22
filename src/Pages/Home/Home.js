import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Navbar></Navbar>
            <Banner></Banner>
            <h1>Home</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;