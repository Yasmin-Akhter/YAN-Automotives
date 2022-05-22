import React from 'react';
// import './style.css';

const Banner = () => {
    return (
        <div className='banner h-[500px]  bg-no-repeat md:bg-contain shadow-xl grid grid-cols-1 text-clip overflow-hidden'
            style={{

                backgroundImage: `url("https://media.ford.com/content/dam/fordmedia/North%20America/US/2017/09/21/HoloLensLoop.gif")`,
                backgroundSize: 'cover',

            }}>


            <h1 className='text-2xl lg:text-7xl font-serif text-purple-400 pt-12 px-6 text-left leading-relaxed'>WE ARE EXPERTS IN <br />
                AUTOMOTIVE PRODUCTS</h1>
            <p className='text-purple-400 py-6 text-left text-lg lg:text-xl w-1/2 px-6'>We are committed to supplying our customers with robust automotive components and reliable services through our international commercial and production network</p>

        </div >
    );
};

export default Banner;