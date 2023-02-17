import React from 'react';
import './ProductList.css'; 
export const Product = (props)=>{
    return(
        <div>
            <div className='product_container'>
                <div className='product_name'>{props.name}</div>
                <div className='product_image'>
                    <img src={props.image}/>
                </div>
                <div className='product_price'>{props.price}</div>
                <div className='product_description'>{props.desc}</div>
                <div className='button'>
                    <button className='buy_now'>BUY NOW</button>
                </div>
            </div>
        </div>
    );
}