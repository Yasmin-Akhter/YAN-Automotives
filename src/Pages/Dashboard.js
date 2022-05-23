import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-3xl text-purple-500 text-center'>Welcome to your DashBoard</h2>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard">My profile</Link></li>
                        <li><Link to="/dashboard/my-order">My Order</Link></li>
                        <li><Link to="/dashboard/add-review">Add review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;