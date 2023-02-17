import React, { useState } from "react";
import './Addproduct.css';
import axios from 'axios';
const ProductForm=(props)=>{
    const [formInput,setFormInput]=useState({
        productName:"",
        productPrice:"",
        productImage:"",
        productDescription:"" 
    })
    const[error,setError]=useState('');
    const productNameHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productName:event.target.value
            }
        })
    }
    const productPriceHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productPrice:event.target.value
            }
        })
    }
    const productImageHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productImage:event.target.value
            }
        })
    }
    const productDescriptionHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                productDescription:event.target.value
            }
        })
    } 
    const formSubmitHandler=async(event)=>{
        let error='';
        if(formInput.productName=='' && error==''){
            setError('Please enter product name')
        }
        else if(formInput.productPrice=='' && error==''){
            setError('Please enter product price')
        }
        else{
            setError('');
            await saveProductData(formInput);
            props.onProductAdded(true);
            //props.onProductAdded(formInput);
        }
        event.preventDefault();
    }
    const saveProductData=async(formData)=>{
        const product={
            product_name:formData.productName,
            product_price:formData.productPrice,
            product_description:formData.productDescription,
            product_image:formData.productImage
        }
        const message = await axios.post("http://localhost:3001/product/add",product,{
            headers:{
                'Content-Type':'application/json',
                
            }
        })
    }
    return(
        <div className="form-container">
            <h1>Add new products</h1>
            <form onSubmit={formSubmitHandler}>
                <div className="error">{error}</div>
                <div className="form-input">
                    <input type="text" placeholder="Product Name" onChange={productNameHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Price" onChange={productPriceHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Product Image" onChange={productImageHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Description" onChange={productDescriptionHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <button className="btn_add">Add Product</button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}
export default ProductForm;