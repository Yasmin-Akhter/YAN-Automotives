import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
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
                    myReview.map(review => {
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <div className="avatar p-2 justify-center">

                                <div className="w-24 rounded">
                                    <img src="https://api.lorem.space/image/face?hash=92048" alt='' />
                                </div>

                            </div>
                            <div className="card-body">

                                {review.rating}
                                <p>{review.des}</p>
                                <div className="card-actions justify-end">
                                    <p className='font-bold'>{user.displayName}</p>

                                </div>
                            </div>
                        </div>
                    })
                }
                <div className="card w-72 bg-base-100 shadow-xl">
                    <div className="avatar p-2 justify-center">

                        <div className="w-24 rounded">
                            <img src="https://api.lorem.space/image/face?hash=92048" />


                        </div>

                    </div>
                    <div className="card-body">

                        <div className=''>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStarHalfAlt}></FontAwesomeIcon>
                        </div>
                        <p>Amazing customer support and fantastic products to showcase your reviews on your website.Highly recommended</p>
                        <div className="card-actions justify-end">
                            <p className='font-bold'>Sakib Al Hasan</p>

                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <div className="avatar p-2 justify-center">

                        <div className="w-24 rounded">
                            <img src="https://api.lorem.space/image/face?hash=92048" />


                        </div>

                    </div>
                    <div className="card-body">

                        <div className=''>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStarHalfAlt}></FontAwesomeIcon>
                        </div>
                        <p>Amazing customer support and fantastic products to showcase your reviews on your website.Highly recommended</p>
                        <div className="card-actions justify-end">
                            <p className='font-bold'>Sakib Al Hasan</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;