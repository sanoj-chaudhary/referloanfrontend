import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from 'formik'
import * as Yup from "yup";
import Loader from "./loader";
import { useRouter } from 'next/router';
const GenerateOtp = ({ setToken, setPancard, setUserValues, data, setServerSideMsg, setServerSideStatus, serversidemsg, serversideStatus, utmData }) => {
  const router = useRouter()
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query

  const [otpStatus, setOtpStatus] = useState(false);
  const [otpfieldval, setOtpfieldval] = useState(false)
  const [errmsg, setErrmsg] = useState('')
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
        phone_no, otp, bank_product_id: genOtpData.bank_product_id, utm_campaign, utm_id, utm_medium, utm_source, offer: ""
      }
      if (otp) {
        const res = await axios.post('https://api.referloan.in/api/verify-otp', data);
        if (res.data.status) {

          setServerSideStatus(true)

          setTimeout(() => {
            if (typeof window !== 'undefined') {
              window.localStorage.removeItem("token");
              window.localStorage.removeItem("full_name");
              window.localStorage.removeItem("pan");
              window.localStorage.removeItem("phone");
            }
          }, 1200000);
          if (utmData && utmData.param_name == 'redirect') {
            setTimeout(() => {
              router.push('/')
            }, 3000);
            const newWindow = window.open(utmData.live_default, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null

          } else {

            if (typeof window !== 'undefined') {
              localStorage.setItem("full_name", values.full_name);
              localStorage.setItem("pan", values.pan_card);
              localStorage.setItem("phone", values.phone_no);
              localStorage.setItem("token", JSON.stringify(res.data.token));

            }

            setToken(window.localStorage.getItem("token"))

          }

        } else {
          setServerSideStatus(false)
          setServerSideMsg(res.data.message)
        }
      }

    } catch (error) {
      setServerSideStatus(false)
      setServerSideMsg('Something Went Wrong')
      console.log("message", error.message);
    }
  }

  const OtpSchema = Yup.object({
    full_name: Yup.string().min(2,'Invalid name').required("Please enter your name "),
    phone_no: Yup.string().min(10,'Invalid phonenumber').max(10,'Invalid phone number').required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
    pan_card: Yup.string().min(10,'Invalid pancard').max(10,'Invalid pancard').required("Please fill the pan card").matches("[A-Z]{5}[0-9]{4}[A-Z]{1}", "Invalid Pancard"),
    otp: Yup.string().min(4,'Invalid Otp').max(4,'Invalid Otp').required('Enter OTP')
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: genOtpData,
      validationSchema: OtpSchema,
      onSubmit: async (values) => {
        // localStorage.setItem("full_name", values.full_name);
        // localStorage.setItem("pan", values.pan_card);
        // localStorage.setItem("phone", values.phone_no);
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
      } else {
        setServerSideStatus(false)
        setServerSideMsg(res.data.message)
      }
    } catch (error) {

      setServerSideStatus(false)
      setServerSideMsg('Fill the valid information')
      console.log("message", error.message);
    }
  }


  useEffect(() => {
    setLoading(false)
    setGenOtpData({ ...genOtpData, bank_product_id: data.bank_product_id })
 
  }, [data])
  return (
    <>
      {loading && <Loader />}
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
          <TextField value={values.pan_card.toUpperCase()} required name="pan_card" fullWidth label="Pan Card" variant="standard" onChange={handleChange} onBlur={handleBlur} />
          {errors.pan_card && touched.pan_card ? (
            <p className="form-error">{errors.pan_card}</p>
          ) : null}
          <div className="search-button">
            <button className="mt-4" type="submit" onClick={generateOtp}>Generate OTP</button>
          </div></> : <>
          <TextField value={values.otp} required name="otp" fullWidth label="OTP" variant="standard" onChange={handleChange} />
          {errors.otp && touched.otp ? (
            <p className="form-error">{errors.otp}</p>
          ) : null}

          <div className="search-button"><button className="mt-4" type="submit" onClick={verifyItp}>verify OTP</button></div></>}

      </form>

    </>
  )
}

export default GenerateOtp