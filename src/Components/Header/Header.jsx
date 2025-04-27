import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className='flex items-center justify-center h-[10vh] bg-[gray] text-[#fff]'>
            <ul className='flex items-center gap-[20px]'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;