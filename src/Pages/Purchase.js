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
                <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure class="px-10 pt-10">
                        <img src={details.picture} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="card-title text-5xl font-bold">{details.name}</h1>
                        <p class="py-6">{details.des}</p>
                        <p className='font-bold'>Price: {details.price}tk/unit</p>
                        <p className='font-bold'>Minimum Order:{details.minimumOrder}</p>
                        <p className='font-bold'>Available:{details.available}</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;