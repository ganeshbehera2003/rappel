import React, { useContext, useEffect } from 'react'
import ProductContext from '../../store/ProductContext'
import { Product } from '../course/Course'
export const ProductList = (props) => {
    const ProductCtx = useContext(ProductContext);
    // console.log(ProductCtx);
    useEffect(()=>{
        getProducts();
    },[ProductCtx.products])
    const getProducts = async() =>{
        const data = await fetch("http://localhost:4001/product/");
        const products_data = await data.json();
        console.log(products_data);
        ProductCtx.setProducts(products_data.products); 
    }
  return (
    <div>
        {props.children};
        {ProductCtx.products.map((product,index)=>
        <Product key={index} name={product.product_name} 
        image={product.product_image}
        price={product.product_price} 
        desc={product.product_description}/>
      )}
    </div>
  )
}
