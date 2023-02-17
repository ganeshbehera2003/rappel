import React,{useContext} from "react";
import './Course.css';
import CartContext from "../../store/CartContext";
export const Product = (props) => {
    const CartCtx = useContext(CartContext);
    const buyNowHandler = () =>{
        const cartObject = {
            product_name:props.name,
            qty:1,
            product_price:props.price,
        }
        let CartItems = [...CartCtx.cartItems];
        CartItems = CartItems.filter(cartitem=>cartitem.product_name === props.name);
        if(CartItems.length > 0){
            CartItems[0].qty = CartItems[0].qty + 1;
        }
        else{
            CartCtx.setCartItems([...CartCtx.cartItems,cartObject])
        }
        console.log(CartCtx.cartItems);
    }
    return(
        <div>
            <div className="product_container">
                <div className="product_title">{props.name}</div>
                <div className="product_image">
                    <img src={props.image}/>
                </div>
                <div className="product_price">{props.price}</div>
                <div className="product_description">{props.desc}</div>
                <div className="button_container">
                    <button className="buy_now" onClick={buyNowHandler}>Enroll</button>
                </div>
            </div>
        </div>
    );
}
