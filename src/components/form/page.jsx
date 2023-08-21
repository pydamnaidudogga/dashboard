import React from 'react';
import "../../styles/form.css";
import { signIn } from 'next-auth/react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const Form = () => {
  const toastNotification = ()=>{
    toast.success('Please Sign in with Google', {
      position: toast.POSITION.TOP_RIGHT
    })
  }


  return (
    <div id="main-div">
      < ToastContainer autoClose={1000} />
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
        <div id="login-buttons">
        <button id="google-login-button" onClick={()=>signIn('google')} >
          <img src="https://i.ibb.co/cgTYRDJ/google-logo-png-29546.png" alt="Google" width={24} height={24} style={{marginRight:"2px"}} />
        <span>Sign in with Google</span>
        </button>
        <button id="google-login-button">
          <img src="https://i.ibb.co/ykw4txp/apple-1-3x.png" alt="Apple" width={18} height={20} style={{marginRight:"5px"}} />
        <span>Sign in with Apple</span>
        </button>
        </div>
        <div id="form">
          <label htmlFor="">Email address</label>
          <input type="email" className='input' id="inputEmali" />
          <br/>
          <label htmlFor="">Password</label>
          <input type="password" className='input' id="inputPassword" />
          <p id="forget">Forgot Password?</p>
          <button onClick={()=>toastNotification()} >Sign In</button>
        </div>
        <p id="no-account">Don't have an account?<span id="forget"> Register here</span></p>
    </div>
  )
}

export default Form