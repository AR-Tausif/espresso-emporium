import React from 'react';


import "./navbar.css"

const NavigationBar = () => {
    return (
        <div className="bg-image-setup">
            <div className="d-flex justify-content-center align-items-center gap-3">
                <img src="/public/logo1.png" style={{ height: "100px" }} className="text-center" alt="" />
                <h2 className="text-white">Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default NavigationBar;