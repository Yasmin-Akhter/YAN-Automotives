import React from 'react';
import { toast } from 'react-toastify';

const AddProductModal = () => {
    const handleAddProductModal = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const des = e.target.des.value;
        const minimumOrder = e.target.price.value;
        const picture = e.target.price.value;
        const available = e.target.available.value;
        const newProduct = { name, price, picture, des, minimumOrder, available };

        fetch('https://thawing-mountain-27595.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast('products added');

            })
        e.reset();

    }
    return (
        <div>

            <form onSubmit={handleAddProductModal} className='grid grid-cols-1 gap-3 justify-items-center'>

                <input type="text" name='name' disabled placeholder='Name' className="input input-bordered w-full max-w-xs font-bold" />

                <input type="number" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="available" placeholder="Available" className="input input-bordered w-full max-w-xs" />
                <input type="number" name='minimumOrder' placeholder="Minimum Order" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='des' placeholder="Minimum Order" className="input input-bordered w-full max-w-xs" />
                <input type="url" name='Picture' placeholder="Picture" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Add Products" className="btn btn-primary w-full max-w-xs" />

            </form>
        </div>
    );
};

export default AddProductModal;