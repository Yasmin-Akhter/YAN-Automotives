import { faArrowsToEye, faEye, faEyedropper, faFlag, faHandshake, faPeopleGroup, faRocket, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Charts from './Charts';

const BusinessSummery = () => {
    return (
        <div>
            <div className=" grid grid-cols-4 border-2 rounded-md">
                <div className="grid grid-cols-1 bg-blue-900 text-white p-3 rounded-l-md">
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
                <div className="grid col-span-3 roun ">
                    <div className="bg-gradient-to-r from-cyan-300 to-blue-300 text-white p-3 rounded-tr-md">
                        <h1 className='text-blue-900 text-3xl font-serif '>BUSINESS SUMMERY</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-4 text-blue-700 py-3'>
                            <div className="div">
                                <FontAwesomeIcon className='h-8' icon={faFlag}></FontAwesomeIcon>
                                <p className='text-sm text-left'>Accredited to ISO IATF 16949 our manufacturing plants located in 8 countries flexibly adapt their capacities to our automotive customer's needs and requirements.</p>
                            </div>
                            <div className="div">
                                <FontAwesomeIcon className='h-8' icon={faHandshake}></FontAwesomeIcon>
                                <p className='text-sm text-left pl-2'>We constantly focus on your business, helping you to: optimize costs while increasing the value of your products for supporting your developments and international growth.</p>
                            </div>
                            <div className="div">
                                <FontAwesomeIcon className='h-8' icon={faPeopleGroup}></FontAwesomeIcon>
                                <p className='text-sm text-left pl-2'>We see our customers as invited guest in a party ,and we are the host.It's our job every day to make every important aspects of the customer experience a little bit better</p>
                            </div>
                            <div className="div">
                                <FontAwesomeIcon className='h-8' icon={faThumbsUp}></FontAwesomeIcon>
                                <p className='text-sm text-left pl-2'>We see our customers as invited guest in a party ,and we are the host.It's our job every day to make every important aspects of the customer experience a little bit better</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default BusinessSummery;