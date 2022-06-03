import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const ProfileModal = ({ updateProfile, setUpdateProfile, setUpdateInfo }) => {
    const [user, loading] = useAuthState(auth);

    console.log(user);

    const handleProfileModal = e => {
        e.preventDefault();
        const email = user.email;
        const update = {
            // id: _id,
            email,
            name: user.displayName,
            phone: e.target.phone.value,
            location: e.target.location.value,
            link: e.target.link.value
        }
        console.log(update);



        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.success) {
                    toast('Profile Updated');
                }

                setUpdateInfo(data.updatedUser);
                setUpdateProfile(null);

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }
    return (
        <div>

            <input type="checkbox" id="profileModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="profileModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleProfileModal} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='location' placeholder="Location" className="input input-bordered w-full max-w-xs" />
                        <input type="url" name='link' placeholder="Facebook link" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="UPDATE" className="btn btn-primary w-full max-w-xs" />

                    </form>

                </div>
            </div>

        </div >
    );
};

export default ProfileModal;