import React, { useState , useEffect } from "react";

export const EffectExample = () =>{
    const [message,setMessage] = useState('Welcome to React');

    useEffect(()=>{
        console.log('Triggered useEffect');
        setTimeout(()=>{
            setMessage('Learing React');
        },2000)
    })
    // setTimeout(()=>{
    //     setMessage('Learing React');
    // },2000)

    return(
        <div>
            <h1>{message}</h1>
        </div>
    );
}