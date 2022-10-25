import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { useFormik } from 'formik'
import * as Yup from "yup";
const GenerateOtp = ({setToken}) => {

  const [otpStatus, setOtpStatus] = useState(false);
  const [otpfieldval, setOtpfieldval] = useState(true)
  const [errmsg, setErrmsg] = useState('')
  const [genOtpData, setGenOtpData] = useState({
    "full_name": '',
    "phone_no": '',
    "pan_card": '',
    "otp": '',
    "bank_product_id": 7
  })


  const verifyItp = async (e) => {
    e.preventDefault();

    try {

      const { phone_no, otp } = values;
      const data = {
        phone_no, otp, bank_product_id: 7
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
          if (typeof window !== 'undefined') {
            setToken(window.localStorage.getItem("token"))
          }

        }
      }

    } catch (error) {
      console.log("message", error.message);
    }
  }


  const handleInput = (e) => {
    setGenOtpData({
      ...genOtpData, [e.target.name]: e.target.value
    });
  }

  const OtpSchema = Yup.object({
    full_name: Yup.string().min(2).required("Please enter your name "),
    phone_no: Yup.string().min(10).max(10).required("Please enter your phone number"),
    pan_card: Yup.string().min(10).max(10).required("Please fill the pan card"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: genOtpData,
      validationSchema: OtpSchema,

      onSubmit: async (values) => {

      },
    });

  const generateOtp = async (e) => {
    e.preventDefault();
    try {
      handleSubmit()
      const res = await axios.post('https://api.referloan.in/api/generate-otp', values);
      if (res.data.success) {
        setOtpStatus(true)
      }
    } catch (error) {
      console.log("message", error.message);
    }
  }
  return (
    <>
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
            <p className="form-error">{errors.full_name}</p>
          ) : null}
          <Button variant="contained" className="mt-4" type="submit" onClick={generateOtp}>Generate OTP</Button></> : <>
          <TextField value={values.otp} required name="otp" fullWidth label="OTP" variant="standard" onChange={handleChange} onBlur={handleBlur} />
          {!otpfieldval ? (
            <p className="form-error">{errmsg}</p>
          ) : null}
          <Button variant="contained" className="mt-4" type="submit" onClick={verifyItp}>verify OTP</Button></>}

      </form>
    </>
  )
}

export default GenerateOtp