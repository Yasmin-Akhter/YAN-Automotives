import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/UseAdmin';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <h2 className='text-3xl text-purple-500 text-center'>DashBoard</h2> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard">My profile</Link></li>



                        {admin ?
                            <>
                                <li><Link to="/dashboard/users">Users</Link></li>
                                <li><Link to="/dashboard/manage-order">Manage Orders</Link></li>
                                <li><Link to="/dashboard/add-product">Add Product</Link></li>
                                <li><Link to="/dashboard/manage-products">Manage Products</Link></li>

                            </>
                            :
                            <>
                                <li><Link to="/dashboard/my-order">My Order</Link></li>
                                <li><Link to="/dashboard/add-review">Add review</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;