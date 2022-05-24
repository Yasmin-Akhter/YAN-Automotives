import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Purchase = () => {
    const { id } = useParams();
    console.log(id);
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div>

                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={details.picture} alt="" />
                        <div>
                            <h1 class="text-5xl font-bold">{details.name}</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;