import React, { useState } from "react";
import './Newuser.css';
const UserForm=(props)=>{
    const [formInput,setFormInput]=useState({
        userName:"",
        userEmail:"",
        userPassword:"", 
    })
    const[error,setError]=useState('');
    const userNameHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                userName:event.target.value
            }
        })
    }
    const userEmailHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                userEmail:event.target.value
            }
        })
    }
    const userPasswordHandler=(event)=>{
        setFormInput((prevState)=>{
            return{
                ...prevState,
                userPassword:event.target.value
            }
        })
    } 
    const formSubmitHandler=(event)=>{
        let error='';
        if(formInput.userName=='' && error==''){
            setError('Please enter user name')
        }
        else if(formInput.userEmail=='' && error==''){
            setError('Please enter user email')
        }
        else if(formInput.userPassword=='' && error==''){
            setError('Please enter user password')
        }
        else{
            const usercart = () =>{
                
            }
            setError('');
            props.onUserAdded(formInput);
        }
        event.preventDefault();
    }
    return(
        <div className="form-container">
            <h1>Add new user</h1>
            <form onSubmit={formSubmitHandler}>
                <div className="error">{error}</div>
                <div className="form-input">
                    <input type="text" placeholder="Name" onChange={userNameHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Email" onChange={userEmailHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Password" onChange={userPasswordHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <button className="btn_add">Sign In</button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}
export default UserForm;