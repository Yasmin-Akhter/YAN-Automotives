import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading';

const Reviews = () => {
    const [myReview, setMyReview] = useState([]);
    const [user, loading] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/reviews')
                .then(res => res.json())
                .then(data => setMyReview(data))

        }
    }
        , [user]
    );
    if (loading) {
        return <Loading></Loading>
    };


    return (
        <div className='py-12'>
            <h1 className='text-5xl font-serif py-3 '>What Our Customer Say's</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-3'>

                {
                    myReview.map(review =>
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p className='font-bold'>Rating:{review.rating} out of 5</p>
                                <p className='text-left'>{review.comment}</p>
                                <div className="card-actions justify-end">
                                    <p className='font-bold'>{review.email}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Reviews;