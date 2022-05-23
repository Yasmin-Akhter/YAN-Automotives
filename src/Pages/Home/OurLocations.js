import React from 'react';

const OurLocations = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-8'>
            <div>
                <img src="https://www.ice.org.uk/media/fs3h0nux/civil-engineering-is-more-important-than-ever.jpg" alt="" />
            </div>
            <div>
                <h1 className='text-5xl font-serif '>YAN Automotives operates out of 42 sites in Europe, North Africa and South America</h1>

                <p className=''>All of our plants either already provide parts and packaging for the most renowned automotive companies or can be easily adapted for this purpose.All of our plants either already provide parts and packaging for the most renowned automotive companies or can be easily adapted for this purpose.</p>
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2">See the map</button>
            </div>
        </div>
    );
};

export default OurLocations;