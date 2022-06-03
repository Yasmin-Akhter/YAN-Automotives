import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-left'>

                <div className="hero min-h-screen  bg-base-200">
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <img src="" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <p className='font bold font-light'>Hello</p>
                            <h1 className="text-5xl font-bold font-serif">I'm Yasmin</h1>
                            <p>
                                <span className='font-light'>want's to be a <br /> </span>
                                <span className='font-semibold text-xl'>
                                    Junior Web Developer
                                </span>
                            </p>
                            <button className="btn btn-primary">Hire me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div>
                        <h1 className="text-5xl font-bold text-fuchsia-900">About Me</h1>
                        <p className="py-6"></p>
                        <p className='text-2xl'>Name:Yasmin Akhter</p>
                        <p className='text-2xl'>Education:
                            Bsc in Computer Science
                        </p>
                        <p className='text-2xl'>Skills:
                            Web development using React.js(basic) <br />
                            graphics design
                        </p>
                        <p>live website link: https://ema-jhon-simple-78156.web.app</p>
                        <p>live website link: https://manufacturer-496fc.web.app/</p>
                        <p>live website link: https://independent-service-prov-76db5.web.app/
                        </p>


                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;