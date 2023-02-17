import React, { useState,useContext } from "react";
import CartContext from "../../store/CartContext";
import './CartItem.css'

export const CartItem = (props) =>{
    const CartCtx = useContext(CartContext);
    // const [isActive,setIsActive] = useState(false);
    const [changeqty,setChangeQty] = useState(props.qty);
    const incHandler=()=>{
        setChangeQty(changeqty+1);
    }
    const decHandler=()=>{
        if(changeqty>0)
            setChangeQty(changeqty-1);
        else
            setChangeQty(0);
    }
    const removeHandler=()=>{
        let Cart = [...CartCtx.cartItems];
        Cart = Cart.filter(cartitem=>cartitem.product_name !== props.product_name);
        console.log(Cart);
        CartCtx.setCartItems(Cart);
    }
    return(
    <div className='row my-4'>
        <div className="col-md-4 px-4 py-4">{props.product_name}</div>
        <div className="col-md-4 px-4 py-4">
            <div className="row">
                {/* <button className="col-md-4 text-end" onClick={incHandler}>+</button>
                <div className="col-md-4">
                    <form>
                        <input type='text' value={changeqty} className='form-control'/>
                    </form>
                </div>
                <button className="col-md-4 text-left font-big" onClick={decHandler}>-</button> */}
                <button className="remove" onClick={removeHandler}>Remove</button>
        </div>
        </div>
        <div className="col-md-4 px-4 py-4">
            ${props.product_price*changeqty}
        </div>
    </div>
    );
}