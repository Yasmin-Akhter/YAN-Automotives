import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className=' h-[275px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-700' src={product.picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.des}</p>
                <p className='font-bold'>Price:{product.price} tk<small>/unit</small> </p>
                <div className="card-actions">
                    <Link to={`/purchase/${product._id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Product;