import React from 'react';
import Navbar from '../Navbar/Navbar';
// import './style.css';

const Banner = () => {
    return (
        <div className='banner h-[500px]  bg-no-repeat md:bg-contain  grid grid-cols-1 text-clip overflow-hidden relative'
            style={{

                backgroundImage: `url("http://s3.amazonaws.com/gt7sp-prod/livery/37/91/97/5909387985045979137_23.jpg")`,
                backgroundSize: 'cover',

            }}>
            <div className='text-white mb-5'>
                <Navbar />   
            </div>
           


            <div className='flex items-center absolute top-20 left-15'>
                <h1 className='text-2xl lg:text-4xl font-serif text-white leading-relaxed font-bold pt-5'>Stunning Design, Powerful Features, Easy to use and customize</h1>

            </div>

        </div >
    );
};

export default Banner;