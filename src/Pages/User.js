import React from 'react';
// import { useQuery } from 'react-query';

const User = ({ user, refetch, role }) => {


    const handleAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            }
            )

    }
    return (

        <tr>


            <td>{user.email}</td>
            <td>
                {user.role !== 'admin' && <button onClick={() => handleAdmin(user.email)} className="btn btn-xs">Make admin</button>}</td>
        </tr>


    );
};

export default User;