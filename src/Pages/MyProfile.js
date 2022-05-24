import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useToken from '../Hooks/UseToken';
import Loading from './Loading';
import ProfileModal from './ProfileModal';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [token] = useToken(user);
    const [updateProfile, setUpdateProfile] = useState(null);
    const [updatedInfo, setUpdateInfo] = useState({});

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
                    <h1 className=' text-3xl font-bold'>{user.displayName}</h1>
                    <p className='text-xl'>email:{user.email}</p>
                    <p className='text-xl'>{updatedInfo.phone}</p>
                    <p className='text-xl'>{updatedInfo.location}</p>
                    <p className='text-xl'>{updatedInfo.link}</p>
                    <div className="card-actions justify-center">

                        <label for="profileModal" onClick={() => setUpdateProfile(user)} className="btn btn-primary">Update Profile</label>
                    </div>
                </div>
            </div>
            {
                updateProfile && <ProfileModal setUpdateProfile={setUpdateProfile} updateProfile={updateProfile} setUpdateInfo={setUpdateInfo}></ProfileModal>
            }
        </div >
    );
};

export default MyProfile;
