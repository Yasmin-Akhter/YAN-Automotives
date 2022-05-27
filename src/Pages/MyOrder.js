import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user, loading] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

                .then(res => res.json())
                .then(data => setMyOrders(data))

        }
    }
        , [user]
    );
    if (loading) {
        return <Loading></Loading>
    };

    const handleDeleteOrder = (id) => {
        const confirm = window.confirm('are you sure');

        if (confirm) {
            const newOrder = myOrders.filter(myOrder => myOrder._id !== id);
            setMyOrders(newOrder);
        }

        // fetch(`http://localhost:5000/order/${user.email}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(myOrders),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         setMyOrders(data);
        //         console.log('Success:', data);
        //         if (data.success) {
        //             toast("order updated");
        //         }



        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });


    }

    return (
        <div>
            <h1 className='my-5 text-purple-700 text-2xl'>Order Details</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>


                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price(per unit)</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(order =>

                                <tr>

                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td><button onClick={() => handleDeleteOrder(order._id)} class="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                                    <tr><button>Payment</button></tr>

                                </tr>


                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;