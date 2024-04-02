import React from 'react';
import Header1 from '../pages/Header1';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header1></Header1>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;