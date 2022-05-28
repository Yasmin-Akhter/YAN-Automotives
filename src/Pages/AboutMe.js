import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-left'>

                <div class="hero min-h-screen  bg-base-200">
                    <div class="hero-content  flex-col lg:flex-row-reverse">
                        <img src="https://buffer.com/library/content/images/2022/03/amina.png" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <p className='font bold font-light'>Hello</p>
                            <h1 class="text-5xl font-bold font-serif">I'm Yasmin</h1>
                            <p>
                                <span className='font-light'>want's to be a <br /> </span>
                                <span className='font-semibold text-xl'>
                                    Junior Web Developer
                                </span>
                            </p>
                            <button class="btn btn-primary">Hire me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="hero min-h-screen">
                    <div>
                        <h1 class="text-5xl font-bold text-fuchsia-900">About Me</h1>
                        <p class="py-6"></p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;