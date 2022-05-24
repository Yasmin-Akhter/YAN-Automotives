import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const [user, loading] = useAuthState(auth);


    const handlePurchaseModal = e => {
        e.preventDefault();
        const email = user.email;
        const order = {
            // id: _id,
            email,
            name: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            quantity: e.target.quantity.value
        }
        console.log(order);

        fetch('http://localhost:5000/order', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.success) {
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
            <input type="checkbox" id="purchaseModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="purchaseModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handlePurchaseModal} className='grid grid-cols-1 gap-3 justify-items-center'>

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