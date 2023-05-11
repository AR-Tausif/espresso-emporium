import React from 'react';
import Navbar from '../shared/navbar/NavigationBar'
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;