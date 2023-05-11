import React from 'react';
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
const Product = () => {
    return (
        <div className="col-4 bg-light rounded">
            <div className="d-flex justify-content-between  align-items-center ">
                <img className="w-25" src="/public/images/1.png" alt="" />
                <div className="">
                    <p>Name:  Americano Coffee</p>
                    <p>Chef:  Mr. Matin Paul</p>
                    <p>Price:  890 Taka</p>
                </div>
                <div className="d-flex flex-column gap-2 fs-3">
                    <button className="btn btn-warning"><FaEye className="text-white" /></button>
                    <button className="btn btn-dark"><FaPencilAlt className="text-white" /></button>
                    <button className="btn btn-danger">
                        <FaTrashAlt className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;