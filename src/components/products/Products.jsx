import React from 'react';
import TitleHead from '../../shared/TitleHead';
import Product from '../../shared/product/Product';

import "./product.css"
const Products = () => {
    return (
        <div className="bg_product_image mt-4">
            <div className="container py-4">
                <TitleHead name="--- Sip & Savor ---" tagLIne="Our Popular Products" />

                <div className="row row-cols-2 gap-4 justify-content-center mt-5">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default Products;