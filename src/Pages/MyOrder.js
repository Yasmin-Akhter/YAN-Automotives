import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Payment from '../Payment';
import Loading from './Loading';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user, loading] = useAuthState(auth);



    useEffect(() => {
        if (user) {
            fetch(`https://thawing-mountain-27595.herokuapp.com/order?email=${user.email}`
                // , {
                //     method: 'GET',
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
                //     }
                // }
            )

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
        // const confirm = <OrderDeleteModal></OrderDeleteModal>

        if (confirm) {
            const updatedOrder = [...myOrders];
            const newOrder = updatedOrder.filter(myOrder => myOrder._id !== id);
            setMyOrders(newOrder);
        }

        fetch(`https://thawing-mountain-27595.herokuapp.com/order/${id}`, {
            method: 'DELETE'

        })
            .then(response => response.json())
            .then(data => {
                // setMyOrders(data);
                console.log('Success:', data);
                if (data.deletedCount > 0) {
                    toast("order updated");
                }



            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    return (
        <div>
            <h1 className='my-5 text-purple-700 text-2xl'>Order Details</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

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
                                    <td>
                                        <label for="orderDelete" onClick={() => handleDeleteOrder(order._id)} className="btn btn-square btn-outline"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                                    </td>
                                    <td> {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-sm mt-5" >Payment</button></Link>}</td>
                                    <td> {(order.price && order.paid) && <p className="btn btn-sm mt-5">Paid</p>}</td>

                                </tr>


                            )
                        }



                    </tbody>
                </table>

            </div>

        </div >
    );
};

export default MyOrder;