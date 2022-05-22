import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white pl-4 py-4 my-12'>
            <h1 className='font-serif text-left text-4xl'>NEWSLETTER</h1>

            <h3 className='text-left text-xl'>Subscribe to our newsletter to receive the latest information.
                Get the latest CSR report as a PDF file for free.</h3>

            <form className='grid grid-cols-1 gap-3 w-1/2 mx-auto py-3'>
                <input type="text" placeholder="Your Name" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Your Email" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="submit" class="input bg-primary hover:bg-purple-900 input-primary font-bold w-full max-w-xs" value="Subscribe Now" />
                <p className='flex items-center '><span><input type="checkbox" name="accept" /></span><small className='pl-1'> I agree with terms and conditions</small></p>
            </form>
        </div >
    );
};

export default NewsLetter;