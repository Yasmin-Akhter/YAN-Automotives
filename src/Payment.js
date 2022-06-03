import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './Pages/Loading';
// import { loadStripe, Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe('pk_test_51L6SWTJDmgE92Af6IDCGhj1LLNiM2kaVfhhZRIdwxOORohvmxTHrOzOhwyWy4p5DRxNfQKe7EJjAYiqEe1Gn0CcB00R9d3YHHY');

const Payment = () => {
    const { id } = useParams()

    const url = `http://localhost:5000/order/${id}`
    const { data: payment, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Payment for:{payment.productName}</h2>
                    <p></p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">

                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements> */}

                </div>
            </div>
        </div>
    );
};

export default Payment;