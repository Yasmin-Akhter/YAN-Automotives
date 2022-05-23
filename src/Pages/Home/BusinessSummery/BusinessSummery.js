import { faArrowsToEye, faEye, faEyedropper, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div>
            <div className=" grid grid-cols-4">
                <div className="grid grid-cols-1 bg-blue-900 text-white p-3">
                    <div> <FontAwesomeIcon className='h-7' icon={faEye} ></FontAwesomeIcon>
                        <h1 className='text-xl font-bold'>Company's Vision</h1>
                        <small>Our vision is to be earth's most customer-centric company, where customers can find and discover anything they might want to buy online.</small>
                    </div>
                    <div>
                        <FontAwesomeIcon className='h-7 pt-3' icon={faRocket} ></FontAwesomeIcon>
                        <h1 className='text-xl font-bold'>Company's Mission</h1>
                        <small>To become the world's leading provider of premium products and premium services for individual mobility</small>
                    </div>
                </div>
                <div className="grid col-span-3 ">
                    <div className="bg-gradient-to-r from-cyan-300 to-blue-300 text-white">
                        <h1>BUSINESS SUMMERY</h1>
                    </div>
                    <div className="div">
                        <h1>hjjkllklh hjjkkl</h1>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BusinessSummery;