import React from 'react';
import notfound from '../images/notfound.png'

const NotFound = () => {
    return (
        <div className=''
            style={{
                backgroundImage: `url(${notfound})`
            }}>

            <h1>404</h1>
        </div >
    );
};

export default NotFound;