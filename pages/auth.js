import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import SignupForm from '../components/auth/signupForm';
import SigninForm from '../components/auth/signinForm'
import VerifyOtp from './../components/auth/verifyOtp'
import { getAccessToken, getCustomerAccessToken } from '../utils';
import Router from 'next/router';
const login = () => {

 

  const showRegister = ()=>{
    
    if (typeof window !== 'undefined') {
      const loginForm = document.querySelector("div.login");
      loginForm.style.marginLeft = "-50%";
    }
  }
  const showLogin = ()=>{
 
    if (typeof window !== 'undefined') {
      const loginForm = document.querySelector("div.login");
      loginForm.style.marginLeft = "0%";
    }
  }

  useEffect(() => {

    
    if (getCustomerAccessToken()) {
      Router.push('/');
    }
  }, [])
  

  return (
    <>
      <Head>
        <link href={'/css/login.css'} rel={'stylesheet'} />

      </Head>
      <VerifyOtp />
      <div className="wrapper">
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" defaultChecked />
            <input type="radio" name="slide" id="signup" />
            <label htmlFor="login" className="slide login" onClick={showLogin}>Login</label>
            <label htmlFor="signup" className="slide signup" onClick={showRegister}>Signup</label>
            <div className="slider-tab">
            </div>
          </div>
          <div className="form-inner ">
            <div className="login form-outer">
              <SigninForm />
            </div>
            <div className="signup form-outer">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default login