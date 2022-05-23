import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`products.json/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div>
            <h1>Purchase:{details.id}</h1>
        </div>
    );
};

export default Purchase;