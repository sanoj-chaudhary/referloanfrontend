import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { useFormik } from 'formik'
import * as Yup from "yup";
import Loader from "./loader";
const GenerateOtp = ({ setToken, setPancard, setUserValues,data,setServerSideMsg,setServerSideStatus }) => {
  const [otpStatus, setOtpStatus] = useState(false);
  const [otpfieldval, setOtpfieldval] = useState(true)
  const [errmsg, setErrmsg] = useState('')
  // const [serversidemsg,setServerSideMsg] = useState('')
  // const [serversideStatus,setServerSideStatus] = useState(true)
  const [loading, setLoading] = useState(true)
  const [genOtpData, setGenOtpData] = useState({
    "full_name": '',
    "phone_no": '',
    "pan_card": '',
    "otp": '',
    "bank_product_id": ""
  })

  const verifyItp = async (e) => {
    e.preventDefault();
    setServerSideStatus(true)
    try {

      const { phone_no, otp } = values;
      const data = {
        phone_no, otp, bank_product_id:genOtpData.bank_product_id
      }
      setOtpfieldval(true)
      if (otp == '') {
        setOtpfieldval(false)
        setErrmsg('This field is required')
      } else if (otp.length != 4) {
        setOtpfieldval(false)
        setErrmsg('Invalid OTP')
      }

      if (otpfieldval) {
        const res = await axios.post('https://api.referloan.in/api/verify-otp', data);
        if (res) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          setServerSideStatus(true)
          if (typeof window !== 'undefined') {
            setToken(window.localStorage.getItem("token"))
          }

          setTimeout(() => {
            if (typeof window !== 'undefined') {
              window.localStorage.removeItem("token"); 
            }
          }, 360000);
        }
      }
    } catch (error) {
      setServerSideStatus(false)
      setServerSideMsg('Something Went Wrong')
      console.log("message", error.message);
    }
  }
  
  const OtpSchema = Yup.object({
    full_name: Yup.string().min(2).required("Please enter your name "),
    phone_no: Yup.string().min(10).max(10).required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/,"Invalid phone number"),
    pan_card: Yup.string().min(10).max(10).required("Please fill the pan card").matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/,"Invalid Pancard"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: genOtpData,
      validationSchema: OtpSchema,
      onSubmit: async (values) => {
        localStorage.setItem("full_name", values.full_name);
        localStorage.setItem("pan", values.pan_card);
        localStorage.setItem("phone", values.phone_no);
      },
    });

  const generateOtp = async (e) => {
    e.preventDefault();
    setServerSideStatus(true)
    try {
      handleSubmit()
      setUserValues(values)
      const res = await axios.post('https://api.referloan.in/api/generate-otp', values);
      if (res.data.success) {
        setOtpStatus(true)
        setPancard(values.pan_card)
      }
    } catch (error) {
      
      setServerSideStatus(false)
      setServerSideMsg('Fill the valid information')
      console.log("message", error.message);
    }
  }

 
     useEffect(() => {
      setLoading(false)
      setGenOtpData({...genOtpData,bank_product_id:data.bank_product_id})
      
    }, [data])
  return (
    <>
       {loading && <Loader/>}
      <form>
 
        {!otpStatus ? <>

          <TextField value={values.full_name} required name="full_name" fullWidth label="Full Name" variant="standard" onChange={handleChange} onBlur={handleBlur} />
          {errors.full_name && touched.full_name ? (
            <p className="form-error">{errors.full_name}</p>
          ) : null}

          <TextField value={values.phone_no} required name="phone_no" fullWidth label="Phone Number" variant="standard" onChange={handleChange} onBlur={handleBlur} />
          {errors.phone_no && touched.phone_no ? (
            <p className="form-error">{errors.phone_no}</p>
          ) : null}
          <TextField value={values.pan_card} required name="pan_card" fullWidth label="Pan Card" variant="standard" onChange={handleChange} onBlur={handleBlur} />
          {errors.pan_card && touched.pan_card ? (
            <p className="form-error">{errors.pan_card}</p>
          ) : null}
          <div className="search-button">
            <button className="mt-4" type="submit" onClick={generateOtp}>Generate OTP</button>
            </div></> : <>
          <TextField value={values.otp} required name="otp" fullWidth label="OTP" variant="standard" onChange={handleChange} onBlur={handleBlur} />
          {!otpfieldval ? (
            <p className="form-error">{errmsg}</p>
          ) : null}
          <div className="search-button"><button className="mt-4" type="submit" onClick={verifyItp}>verify OTP</button></div></>}

      </form>
    
    </>
  )
}

export default GenerateOtp