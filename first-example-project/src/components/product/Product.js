import React from "react";
import './product.css';
export const Product =(props) =>{
    return(
       <div>
        <div className='product_cart'>
            <div className="product_name">{props.pname}</div>
            <div className="product_image">
                <img src={props.pimage}/>
            </div>
            <div className="product_price">{props.pprice}</div>
            <div className="clearfix"></div>
            <div className="product_description">{props.description}</div>
            <div className="button_div">
                <button className="buy_now">Buy Now</button>

            </div>
        </div>
       </div> 
    )
}





















    // const {product_name,product_image,product_price,product_description} = props;
