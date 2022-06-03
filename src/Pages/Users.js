import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import User from './User';

const Users = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://thawing-mountain-27595.herokuapp.com/user`)
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>


                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <User
                                    key={user._id}
                                    user={user}
                                    refetch={refetch}

                                ></User>
                                )
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;