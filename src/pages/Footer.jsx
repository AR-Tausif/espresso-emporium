import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
const MyBackgroundImage = "/public/images/more/10.png"
const MyBackgroundImageTwo = "/public/images/more/24.jpg"
const Footer = () => {
    return (
        <>
            <div className="" style={{
                backgroundImage: `url(${MyBackgroundImage})`,
                // backgroundImage: `url(${externalImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '500px',
            }}>
                <div className='container'>
                    <div className="row align-items-center py-3">
                        <div className="col">
                            <img src="/public/images/more/logo1.png" className='' style={{ width: "90px" }} alt="" />
                            <h1 className='font-rancho fw-bold'>Espresso Emporium</h1>
                            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className="d-flex gap-3">
                                <div className="btn btn-dark text-white"><FaFacebookF /></div>
                                <div className="btn btn-dark text-white"><FaTwitter /></div>
                                <div className="btn btn-dark text-white"><FaInstagram /></div>
                                <div className="btn btn-dark text-white"><FaLinkedin /></div>
                            </div>
                            <div className="mt-4">
                                <h1 className='font-rancho fw-bold'>Get in Touch</h1>
                                <p> <span className="mr-5"> <FaPhoneAlt /> </span> +88 01533 333 333</p>
                                <p><span className="mr-5"> <FaEnvelope /> </span>info@gmail.com</p>
                                <p> <span className="mr-5"> <FaMapMarkerAlt /> </span> 72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                        <div className="col">
                            <h1 className='font-rancho fw-bold'>Connect with Us</h1>

                            <div className='mt-5'>
                                <div className="mb-3">
                                    <input type="text" className="form-control my-4" placeholder="Name" />
                                    <input type="email" className="form-control my-4" placeholder="Email" />
                                    <textarea className="form-control" placeholder='Massege' rows={3} defaultValue={""} />
                                    <button className="btn btn-outline-warning rounded rounded-5 mt-3">Send Massage</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="" style={{
                backgroundImage: `url(${MyBackgroundImageTwo})`,
                // backgroundImage: `url(${externalImage})`,
            }}>
                <h2 className='fs-3 py-2 text-white text-center'>Copyright Espresso Emporium ! All Rights Reserved</h2>
            </div>
        </>
    );
};

export default Footer;