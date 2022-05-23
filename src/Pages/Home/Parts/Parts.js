import React from 'react';
import { Link } from 'react-router-dom';

const Parts = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-300 to-blue-300 text-white my-8 p-6'>
            <h1 className='text-6xl'>In Our Industries we provide numerous automotive component solutions from plastics</h1>
            <h3 className='text-xl'>Our Expanded Polypropylene and Expanded Polystyrene automotive components are manufactured to the strictest tolerances and meet the highest standards within the industry.</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-16 py-4 '>
                <Link to="/epp">
                    <div class="card w-52 scale-100 hover:scale-110 bg-white hover:bg-blue-500 text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Epp/EPS COMPONENTS</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/epp">
                    <div class="card w-52 sc scale-100 hover:scale-110 bg-white hover:bg-blue-500 text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">INJECTED COMPONENTS</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/epp">
                    <div class="card w-52 scale-100 hover:scale-110 bg-white hover:bg-blue-500 text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">PACKAGING COMPONENTS</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/epp">
                    <div class="card w-52 scale-100 hover:scale-110 bg-white hover:bg-blue-500 text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">CHILD'S SAFETY SEATS</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/epp">
                    <div class="card w-52 scale-100 hover:scale-110 bg-white hover:bg-blue-500 text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">CAR BATTERY  PACK</h2>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Parts;