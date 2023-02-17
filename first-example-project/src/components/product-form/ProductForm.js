import React, { useState } from 'react';
import './product-form.css';
const ProductForm =(props) =>{
    const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productDescription:'',
    })
    const[error,setError] = useState('');
    const productNameHandler = (event) =>{
       setFormInput((prevState)=>{
       return{
        ...prevState,
        productName:event.target.value
       }
       })
    }

    const productPriceHandler = (event) =>{
        setFormInput({
            ...formInput,
            productPrice:event.target.value
        });
    }

    const productImageHandler = (event) =>{
        setFormInput({
            ...formInput,
            productImage:event.target.value
        });
    }

    const productDescriptionHandler = (event) =>{
        setFormInput({
            ...formInput,
            productDescription:event.target.value
        });
    }

    const formSubmitHandler = (event) =>{

        let error ='';
        if(formInput.productName === '' &&  error === ''){
            setError('Please Enter Product Name');
        }
        else if(formInput.productPrice === '' &&  error === ''){
            setError('Please Enter Product Price');
        }
        else if(formInput.productImage === '' &&  error === ''){
            setError('Please Enter Product image url');
        }
        else if(formInput.productDescription === '' &&  error === ''){
            setError('Please Enter Product Description');
        }
        else{
            setError('');
            props.onProductAdded(formInput);
        }
        event.preventDefault();
    }

    return(
        <div className ="form-container">
            <h1>Add New Product</h1>
            <form onSubmit={formSubmitHandler}>
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
                <div className="error">{error}</div>
                <div className="form-input">
                    <button className='button'>Add Product</button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}

export default ProductForm;