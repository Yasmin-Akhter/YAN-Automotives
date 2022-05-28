import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';

const AddReview = () => {
    const [addReviews, setAddReviews] = useState({});
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     const reviews = {
    //         faStar: <div class="rating rating-sm">
    //             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
    //             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
    //             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
    //             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
    //             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
    //         </div>,
    //         name: user.displayName,
    //     }

    //     fetch('http://localhost:5000/reviews', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(reviews)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setAddReviews(data);
    //         })

    // }, [])


    const handleReview = e => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const comment = e.target.comment.value;
        const review = { rating, comment };
        console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddReviews(data);
                toast('review added');
            })


    }

    return (
        <div>
            <h1 className='text-3xl my-12'>Add Reviews</h1>

            <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 w-1/2 mx-auto'>
                <div class="rating rating-md mx-auto">
                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                </div>
                <textarea class="textarea textarea-bordered" name='comment' placeholder="Your Comment"></textarea>
                <input type="text" disabled class="input input-bordered w-full " value={user.displayName} />
                <input type="submit" class="btn btn-primary" value="Submit" />
            </form >


        </div >
    );
};

export default AddReview;