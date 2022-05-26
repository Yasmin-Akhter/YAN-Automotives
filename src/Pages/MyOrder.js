import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user, loading] = useAuthState(auth);
    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data))

        }
    }
        , [user]
    )

    return (
        <div>
            <h1 className='my-5 text-purple-700'>{user.email}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Product</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map(order =>
                                <tr>
                                    <th>{order.email}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.phone}</td>

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