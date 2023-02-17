import axios from 'axios';
import React, { useContext } from 'react';
import ProductContext from '../store/ProductContext';
import './Userproduct.css'; 

export const Userproduct = (props)=>{
    const ProductCtx = useContext(ProductContext);
    const deleteHandler=()=>{
        deleteData();
    }
    const deleteData = async() =>{
        const message = await axios.delete(`http://localhost:4001/delete/${props.product_name}`,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log('deleted data',message);
        let cartItem = [...ProductCtx.products];
        cartItem = cartItem.filter((item)=>item.products_name !== props.product_name);
        ProductCtx.setItems([...ProductCtx.products,cartItem]);
    }
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
                    <button className='delete' onClick={deleteHandler}>Delete</button>
                    {/* <button className='edit'onClick={editHandler}>Edit</button> */}
                </div>
            </div>
        </div>
    );
}