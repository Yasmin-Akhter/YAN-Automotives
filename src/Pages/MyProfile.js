import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useToken from '../Hooks/UseToken';
import Loading from './Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [token] = useToken(user);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>




            <div className="card w-100 bg-base-100 shadow-xl mx-auto mt-12">
                <div className="card-body">
                    <div className="avatar justify-center">
                        <div className="w-24 rounded">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81K2hJBAduL.png" alt='' />
                        </div>
                    </div>
                    <h1 className=' text-2xl font-bold'>{user.displayName}</h1>
                    <p>{user.email}</p>
                    <div className="card-actions justify-center">
                        {/* <button className="btn btn-primary"></button> */}
                        <label for="profileModal" className="btn btn-primary">Update Profile</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
