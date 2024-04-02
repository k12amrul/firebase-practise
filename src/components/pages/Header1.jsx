import React from 'react';
import { NavLink } from 'react-router-dom';

const Header1 = () => {
    return (

        <div className='flex justify-between container mx-auto px-10 '>
            <div className=' flex justify-evenly' >
                <li>

                    <NavLink to={'/register'}> Register</NavLink>
                </li>
                <li>
                <NavLink to={'/login'}> Login</NavLink>

                </li>
                <li>

                <NavLink to={'/logout'}> LogOut</NavLink>
                </li>

            </div>
            <div>
                <h1> name</h1>
            </div>

        </div>
    );
};

export default Header1;