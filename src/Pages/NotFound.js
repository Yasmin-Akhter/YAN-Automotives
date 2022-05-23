import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../images/notfound.png'

const NotFound = () => {
    return (
        <div className=' h-[600px]'
            style={{
                backgroundImage: `url("https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/error-404.jpg")`,
                backgroundSize: 'cover'

            }}>
            <Link to="/"> <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-2 font-extrabold">HOME</button></Link>

        </div >
    );
};

export default NotFound;