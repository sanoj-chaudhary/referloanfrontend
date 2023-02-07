import React,{useState} from 'react'
import Link from 'next/link';
import { toast } from "react-toastify";
import { generateOtpSchema, setCustomerAccessToken, setUserProfile } from '../../utils'
import { Formik, Form, useFormik } from 'formik';
import axios from 'axios';
import VerifyOtp from './verifyOtp'
const loginForm = () => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false)
  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        full_name: '',
        phone_no: '',
    
      },
      validationSchema: generateOtpSchema,
      onSubmit: async (values, action) => {
try {
  setActive(true)
  const res = await axios.post(`${process.env.APIHOST}/api/customer-login`, values);
  if (res.data.success) {
    setActive(false)
    setModal(true)
    if (typeof window !== 'undefined') {
      localStorage.setItem("full_name", values.full_name);
      localStorage.setItem("phone", values.phone_no);           
    }

    setUserProfile(values)

   
  }
  
} catch (error) {
  toast.error('Something Went Wrong!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    setActive(false)
    console.log("Message:", error.message)
}
      
      },
    });
  return (

    <form onSubmit={handleSubmit} >
      <VerifyOtp phone={values.phone_no} modal={modal} setModal={setModal} />
      <div className="login-img">
        <img src="/images/login-img.png" />
      </div>
      <div className=" loginlooing-box form-input-box">
        <div className="login-title form-title">
          <h2>Login Here</h2>
        </div>
        <div className="group">
          <input type="text" name="full_name"  placeholder="Fullname" required onChange={handleChange} value={values.full_name} />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
          {errors.full_name && touched.full_name ? (
            <div className='form-error'>{errors.full_name}</div>
          ) : null}
        </div>
        <div className="group">
          <input type="number" name='phone_no' placeholder="Phone Number" onChange={handleChange} value={values.phone_no} required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Phone Number</label>
          {errors.phone_no && touched.phone_no ? (
            <div className='form-error'>{errors.phone_no}</div>
          ) : null}
        </div>
        <div className="chkbox-area">
          <input  id="otpCheckbox" name='policy' type="checkbox"  required /> By submitting this form, you have read and agree to the Credit Report
          Terms of Use,<Link href="terms-and-conditions"><a target="_blank"> Terms of Use  </a></Link>&amp; <Link href="privacy-policy"><a target="_blank"> Privacy Policy </a></Link>
        </div>

        <button type='submit' className="button button--aylen button--round-l button--text-thick" disabled={active} >Proceed {active ? <i className="fa fa-spinner fa-spin text-white"></i> : ''}</button>
      </div>
    </form>



  )
}

export default loginForm