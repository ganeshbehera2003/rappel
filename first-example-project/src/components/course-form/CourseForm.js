import React,{useContext, useState} from "react";
import './course-form.css';
import axios from "axios";
import ProductContext from '../../store/ProductContext';
const ProductForm = (props) =>{
    const ProductCtx = useContext(ProductContext);
    const [remessage,setresMessage] = useState('');
    let [formInput,setFormInput] = useState({
        name:'',
        price:'',
        image:'',
        description:''
    })
    const productNameHandler = (event) =>{
        setFormInput({
            name:event.target.value
        })
    }
    const productPriceHandler = (event) =>{
        setFormInput({
            ...formInput,
            price:event.target.value
        })
    }
    const productImageHandler = (event) =>{
        setFormInput({
            ...formInput,
            image:event.target.value
        })
    }
    const productDescriptionHandler = (event) =>{
        setFormInput({
            ...formInput,
            description:event.target.value
        })
    }
    const formSubmitHandler = async(event) => {
        let error = '';
        if(formInput.name === '' && error ===''){
            error = 'Please enter product name';
            setresMessage(error);
        }
        if(error == '')
            saveProductData(formInput);
            // await saveProductData(formInput);

        // props.onProductAdded(true)
        event.preventDefault();
    }
    const saveProductData = async(formData) =>{
        try{
            const product = {
                product_name:formData.name,
                product_price:formData.price,
                product_image:formData.image,
                product_description:formData.description
            }
            const result = await axios.post("http://localhost:4001/product/add",product,{
                headers:{
                    'Content-Type':'application/json',
                    'x-auth-token':localStorage.getItem('token')
                }
            })
            console.log(result.data.message);
            setresMessage('');
            ProductCtx.setProducts(...ProductCtx.products,product);
        }catch(err){
            console.log('From Error',err.message);
        }    
    }
    return(
        <div className="form-container">
            <h1>Add New Product</h1>
            <div>{remessage}</div>
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
                <div className="form-input">
                    <button className="btn_add_course" >Add Product</button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    );
}

export default ProductForm;