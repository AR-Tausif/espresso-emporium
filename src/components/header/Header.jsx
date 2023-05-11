import React from 'react';

import './header.css'
const Header = () => {
    return (
        <>
            <div className="header_hero">
                <div className="row row-cols-2 pt-5 align-items-center">
                    <div className="col"></div>
                    <div className="col" style={{ paddingTop: "150px" }}>
                        <p className="fs-1 text-white">Would you like a Cup of Delicious Coffee?</p>
                        <p className="text-secondary">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn btn-warning"> Learn More</button>
                    </div>
                </div>
            </div>
            <div className="font-rancho py-4" style={{ background: "#ECEAE3" }}>
                <div className="container">
                    <div className="container row justify-content-between">
                        <div className="col">
                            <img src="/public/images/icons/1.png" alt="" />
                            <h3>Awesome Aroma</h3>
                            <p>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div className="col">
                            <img src="/public/images/icons/2.png" alt="" />
                            <h3>High Quality</h3>
                            <p>We served the coffee to you maintaining the best quality</p>
                        </div>
                        <div className="col">
                            <img src="/public/images/icons/3.png" alt="" />
                            <h3>Pure Grades</h3>
                            <p>The coffee is made of the green coffee beans which you will love</p>
                        </div>
                        <div className="col">
                            <img src="/public/images/icons/4.png" alt="" />
                            <h3>Proper Roasting</h3>
                            <p>Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;