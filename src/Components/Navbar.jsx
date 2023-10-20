import React from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import useAuth from '../Provider/useAuth';
import logo from '/logo.png'
import './nav.css'

const Navbar = () => {
    const { user, logOut, } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('logged out successfully, see you again')
            })
    }

    const navLinks = <>
        <li className="text-black"><NavLink to='/'>Home</NavLink></li>
        <li className="text-black"><NavLink to='/addproduct'>Add Product</NavLink></li>
        <li className="text-black"><NavLink className='flex items-center gap-1' to='/mycart'>My Cart<AiOutlineShoppingCart className='text-xl'></AiOutlineShoppingCart></NavLink></li>
        {/* <li><NavLink to='/offer'>Special Offer</NavLink></li> */}
        {user ? <li className="text-yellow-100"><NavLink className='hidden' to='/signup'>Register</NavLink></li> : <li><NavLink to='/signup'>Register</NavLink></li>}
        {user ? <li className="bg-base-200 rounded-xl">
            <li className="flex gap-2 items-center p-3">
                {user?.photoURL? <li className="w-[100px] lg:w-[40px]"><img className="w-full rounded-full" src={user.photoURL} alt="" /></li> : <FaUserCircle className="text-3xl"></FaUserCircle>}
                <li className="bg-slate-200 rounded-md px-2">{user.displayName}</li>
                <li className=""><button className="bg-slate-500 flex items-center gap-1 text-white p-2 rounded-lg" onClick={handleLogOut}><span><FaSignOutAlt></FaSignOutAlt></span>Logout</button></li>
            </li>
        </li> : <li className="mr-4"><NavLink to='/login'>Login</NavLink></li>}


    </>
    return (
        <>
            <div className="navbar bg-purple-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'}><img className='w-32 ml-44 md:ml-[570px] lg:ml-0 h-16' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden text-black lg:flex">
                    <ul className="flex font-semibold items-center gap-7">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;