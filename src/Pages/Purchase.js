import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { id } = useParams();
    console.log(id);
    const [details, setDetails] = useState({});
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={details.picture} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="card-title text-5xl font-bold">{details.name}</h1>
                        <p className="py-6">{details.des}</p>
                        <p className='font-bold'>Price: {details.price}tk/pcs</p>
                        <p className='font-bold'>Minimum Order:{details.minimumOrder}</p>
                        <p className='font-bold'>Available:{details.available}</p>
                        <div className="card-actions">

                            <label for="purchaseModal"
                                onClick={() => setPurchase(details)}
                                className="btn btn-primary">Purchase</label>
                        </div>

                    </div>
                </div>
                {
                    purchase && <PurchaseModal
                        purchase={purchase}
                        setPurchase={setPurchase}
                    ></PurchaseModal>
                }

            </div>
            <Footer></Footer>
        </div >
    );
};

export default Purchase;