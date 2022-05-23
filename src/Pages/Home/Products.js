import React, { useEffect, useState } from 'react';
import Product from './Parts/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-6xl text-primary-focus my-4'>PRODUCTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    products.map(product => <Product
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;