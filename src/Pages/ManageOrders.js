import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
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
                            orders.map(order =>

                                <tr>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                </tr>


                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;