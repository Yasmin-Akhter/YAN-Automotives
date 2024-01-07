import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(() => {
        fetch('https://yan-auto-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>

            {
                manageProducts.map(product =>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img className=' h-[275px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-700 rounded-xl' src={product.picture} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.des}</p>
                            <p className='font-bold'>Price:{product.price} tk<small>/pcs</small> </p>
                            <div className="card-actions">
                                <Link to={`/purchase/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div >



                )
            }

        </div>
    );
};

export default ManageProducts;
