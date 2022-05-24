import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className=' h-[275px]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-700' src={product.picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{product.name}</h2>
                <p>{product.des}</p>
                <p className='font-bold'>Price:{product.price} tk<small>/unit</small> </p>
                <div class="card-actions">
                    <Link to={`/purchase/${product._id}`}><button class="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Product;