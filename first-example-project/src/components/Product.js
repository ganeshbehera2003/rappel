import React from "react";
import './product.css';
export const Product = (props) => {
    return(
        <div>
            <div className="product_container">
                <div className="product_name">{props.Name}</div>
                <div className="product_image">
                    <img src={props.image} alt="Product Image"/>
                </div>
                <div className="product_price">{props.price}</div>
                <div className="button_container">
                    <button className="buy_now">Buy Now</button>
                </div>
            </div>
        </div>
    );
}