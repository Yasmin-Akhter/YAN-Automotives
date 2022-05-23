import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Reviews = () => {
    return (
        <div className='py-12'>
            <h1 className='text-5xl font-serif py-3 '>What Our Customer Say's</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-3'>

                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="avatar p-2 justify-center">

                        <div class="w-24 rounded">
                            <img src="https://api.lorem.space/image/face?hash=92048" />


                        </div>

                    </div>
                    <div class="card-body">

                        <div className=''>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStarHalfAlt}></FontAwesomeIcon>
                        </div>
                        <p>Amazing customer support and fantastic products to showcase your reviews on your website.Highly recommended</p>
                        <div class="card-actions justify-end">
                            <p className='font-bold'>Sakib Al Hasan</p>

                        </div>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="avatar p-2 justify-center">

                        <div class="w-24 rounded">
                            <img src="https://api.lorem.space/image/face?hash=92048" />


                        </div>

                    </div>
                    <div class="card-body">

                        <div className=''>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStarHalfAlt}></FontAwesomeIcon>
                        </div>
                        <p>Amazing customer support and fantastic products to showcase your reviews on your website.Highly recommended</p>
                        <div class="card-actions justify-end">
                            <p className='font-bold'>Sakib Al Hasan</p>

                        </div>
                    </div>
                </div>
                <div class="card w-72 bg-base-100 shadow-xl">
                    <div class="avatar p-2 justify-center">

                        <div class="w-24 rounded">
                            <img src="https://api.lorem.space/image/face?hash=92048" />


                        </div>

                    </div>
                    <div class="card-body">

                        <div className=''>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStarHalfAlt}></FontAwesomeIcon>
                        </div>
                        <p>Amazing customer support and fantastic products to showcase your reviews on your website.Highly recommended</p>
                        <div class="card-actions justify-end">
                            <p className='font-bold'>Sakib Al Hasan</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;