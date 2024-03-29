import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');

    }
    const menuItems = <>
        <li className=' hover:bg-purple-500 rounded-lg '><Link to="/">Home</Link></li>

        <li className=' hover:bg-purple-500 rounded-lg '><Link to="/blogs">Blogs</Link></li>
        <li className=' hover:bg-purple-500 rounded-lg '><Link to="/reviews">Reviews</Link></li>
        { }
        {
            user && <>
                <li className=' hover:bg-purple-500 rounded-lg '><Link to="/dashboard">Dashboard</Link></li>
                <li className='mt-3 font-serif text-purple-700'>{user.displayName}</li>
            </>

        }
        {
            user ?
                <button onClick={logout} className="btn btn-ghost text-purple-700">Sign Out</button> :
                <li className=' hover:bg-purple-500 rounded-lg '><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar z-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                        </ul>
                    </div>

                    <button className="btn btn-ghost normal-case text-xl font-serif text-purple-700"> YAN Automotives</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ml-48">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;