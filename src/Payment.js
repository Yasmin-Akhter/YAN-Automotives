import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './Pages/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L6SWTJDmgE92Af6IDCGhj1LLNiM2kaVfhhZRIdwxOORohvmxTHrOzOhwyWy4p5DRxNfQKe7EJjAYiqEe1Gn0CcB00R9d3YHHY');

const Payment = () => {
    const { id } = useParams()

    const url = `https://thawing-mountain-27595.herokuapp.com/order/${id}`
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

            <div class="card w-96 bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Payment for:{payment.productName}</h2>
                    <p></p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;