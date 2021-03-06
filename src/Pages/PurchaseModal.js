import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';
import auth from '../firebase.init';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const [user, loading] = useAuthState(auth);


    const handlePurchaseModal = e => {
        e.preventDefault();
        const email = user.email;
        const order = {
            id: purchase._id,
            productName: e.target.productName.value,
            email,
            price: purchase.price,
            name: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            quantity: e.target.quantity.value
        }
        console.log(order);

        fetch('https://thawing-mountain-27595.herokuapp.com/order', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.acknowledged) {
                    toast("order placed");
                }
                setPurchase(null);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handlePurchaseModal} className='grid grid-cols-1 gap-3 justify-items-center'>

                        <input type="text" name='productName' disabled value={purchase.name} className="input input-bordered w-full max-w-xs font-bold" />
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="number" id="quantity" name="quantity" min={purchase.minimumOrder} max={purchase.available} placeholder={`Quantity must be min ${purchase.minimumOrder} to max ${purchase.available}`} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Place Order" className="btn btn-primary w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;