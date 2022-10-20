import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Dialog } from '@mui/material'
const eligilityForm = ({ loanProduct, creditProduct }) => {
  const [otpStatus, setOtpStatus] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)
  const [error, setError] = useState({})
  const [flag, setFlag] = useState(true)
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState('')
console.log('token',token)
  const signupSchema = Yup.object({
    pincode: Yup.string().min(6).max(6),
  });

  const [pincode, setPincode] = useState()
  const [product_id, setProductId] = useState()
  const [employemntType, setEmployemntType] = useState()
  const [turnover, setTurnover] = useState()
  const [salary, setSalary] = useState()
 
  const generatOtp = async (e) => {
    e.preventDefault()
    try {
      console.log(values)
      let { full_name, phone_no, pan_card } = values;
      const data = {
        full_name, phone_no, pan_card
      }

      const otpres = await axios.post('https://testapi.referloan.in/api/generate-otp', data);
      if (otpres.data.success) {
        setOtpStatus(true)
        setErrorStatus(false)
      }
    } catch (error) {
      setErrorStatus(true)
      console.log("message:", error.message);
    }
  }

  const verifyOtp = async (e) => {
    e.preventDefault()
    try {
      let { phone_no, otp } = values;
      const data = {
        phone_no, otp
      }
      const veryfyres = await axios.post('https://testapi.referloan.in/api/verify-otp', data);
      if (veryfyres) {
        localStorage.setItem("token", veryfyres.data.token);
        setErrorStatus(false)
        setOpen(false)
        if (typeof window !== 'undefined') {
          setToken(window.localStorage.getItem("token"))
        }
        alert('Verify OTP successfully')
      }
    } catch (error) {
      setErrorStatus(true)
      console.log("message:", error.message);
    }
  }


  const updateEligibility = async (e) => {
    e.preventDefault()
   
    try {

      let { phone_no, product_id, salary, full_name, turnover, pincode, pan_card } = values;
      const data = {
        product_id,
        salary,
        full_name,
        turnover,
        pincode,
        phone_no,
        pan_card,
      }
 
      const headers = {
        'Authorization': `Bearer ${token} `,
        'Content-Type': 'application/json',
      }
      const updatefyres = await axios.post('https://api.referloan.in/api/customers/', data,{headers});
      if (updatefyres) {
        alert('hello')
      }
    } catch (error) {
      console.log("message:", error.message);
    }

  }
  useEffect(() => {

    if (typeof window !== 'undefined') {
      setToken(window.localStorage.getItem("token"))
    }
  }, [token])

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: searchData,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        console.log(values)
        if (values.employemnt_type != '' && values.product_id != '' && values.pincode != '' && (values.salary != '' || values.tenure != '')) {
          setOpen(true)
        }
      }
    });


  return (
    <>
      <div className="header-form-area">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#loan"
              type="button" role="tab" aria-controls="home" aria-selected="true">Loan</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#creditCard"
              type="button" role="tab" aria-controls="creditCard" aria-selected="false">Credit
              Card</button>
          </li>

        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="loan" role="tabpanel" aria-labelledby="home-tab">
            <form onSubmit={token == null ? handleSubmit : updateEligibility }>
              <div className="loan-form-area">
                <div className="loanType">
                  <select name='product_id' onChange={handleChange} value={values.product_id} required>
                    <option defaultValue value=''>Type of loan </option>
                    {loanProduct && loanProduct.map((item, key) => (
                      <option key={key} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                  {errors.product_id && <p style={{ color: 'red' }}>{errors.product_id}</p>}
                </div>
                <div className="loanType" >
                  <select onChange={handleChange} name="employemnt_type" value={values.employemnt_type} required>
                    <option defaultValue value=''>Profession Type </option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self employed">Self employed</option>
                  </select>
                  {errors.employemnt_type && <p style={{ color: 'red',fontSize:'10px' }}>{errors.employemnt_type}</p>}
                </div>

                {values.employemnt_type &&


                  <div className="loanType ">


                    {
                      values.employemnt_type === 'Salaried' &&
                      <input
                        type="number"
                        autoComplete="off"
                        name="salary"
                        id="salary"
                        placeholder="Salary"
                        value={values.salary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />

                    }
                    {values.employemnt_type === 'Self employed' &&

                      <input
                        type="number"
                        autoComplete="off"
                        name="tenure"
                        id="tenure"
                        placeholder="Turn Over"
                        value={values.tenure}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />

                    }

                  </div>}

                <div className="loanType">

                  <input
                    type="number"
                    autoComplete="off"
                    name="pincode"
                    id="pincode"
                    placeholder="Pincode"
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.pincode && <p style={{ color: 'red' }}>{errors.pincode}</p>}
                </div>
                <div className="search-button">

                  {token != null ? <button type="submit" >Submit</button> : <button type="submit" >Continue</button>}

                </div>
              </div>
            </form>
          </div>

          {/* Credit card search form */}
          <div className="tab-pane fade" id="creditCard" role="tabpanel" aria-labelledby="profile-tab">
            <form onSubmit={handleSubmit}>
              <div className="loan-form-area">
                <div className="loanType">
                  <select name='product_id' onChange={handleChange} value={values.product_id} required>
                    <option defaultValue value=''>Type of Card </option>
                    {creditProduct && creditProduct.map((item, key) => (
                      <option key={key} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                  {errors.product_id && <p style={{ color: 'red' }}>{errors.product_id}</p>}
                </div>
                <div className="loanType" >
                  <select onChange={handleChange} name="employemnt_type" value={values.employemnt_type} required>
                    <option defaultValue value=''>Profession Type </option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self employed">Self employed</option>
                  </select>
                  {errors.employemnt_type && <p style={{ color: 'red' }}>{errors.employemnt_type}</p>}
                </div>

                {values.employemnt_type &&


                  <div className="loanType ">


                    {
                      values.employemnt_type === 'Salaried' &&
                      <input
                        type="number"
                        autoComplete="off"
                        name="salary"
                        id="salary"
                        placeholder="Salary"
                        value={values.salary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />

                    }
                    {values.employemnt_type === 'Self employed' &&

                      <input
                        type="number"
                        autoComplete="off"
                        name="tenure"
                        id="tenure"
                        placeholder="Turn Over"
                        value={values.tenure}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />

                    }

                  </div>}

                <div className="loanType">

                  <input
                    type="number"
                    autoComplete="off"
                    name="pincode"
                    id="pincode"
                    placeholder="Pincode"
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.pincode && <p style={{ color: 'red',fontSize:"10px" }}>{errors.pincode}</p>}
                </div>
                <div className="search-button">

                  {token ? <button type="submit" >Submit</button> : <button type="submit" >Continue</button>}

                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
      <Dialog onClose={() => setOpen(false)} open={open} sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "800px",  // Set your width here
            padding: "20px",
          },
        },
      }} className="panCard_Modal">
        <h1 id="exampleModalToggleLabel">Check Eligility</h1>
        {errorStatus && <p className='text-danger'>Something Went Wrong</p>}
        {!otpStatus ? <div className="formContainer">
          <form onSubmit={generatOtp}>
            <div className="inputRow">

              <input
                type="text"
                autoComplete="off"
                name='full_name'
                id="full_name"
                placeholder="Enter Full Name"
                value={values.full_name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

            </div>
            <div className="inputRow">
              <input
                type="text"
                autoComplete="off"
                name="phone_no"
                id="phone_no"
                placeholder="Phone Number"
                value={values.phone_no}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </div>
            <div className="inputRow">
              <input
                type="text"
                autoComplete="off"
                name="pan_card"
                id="pan_card"
                placeholder="Pan Card"
                value={values.pan_card}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

            </div>

            <div className="checkBoxRow">
              <input type="checkbox" id="term" name="term" value="term" required />
              <label htmlFor="vehicle1">
                <div className="termBox">
                  Terms and conditions, By entering your personal details, you hereby authorize Refer Laon and or its service provider(s) to contact you and you agree to the <a href="#">Read More</a>
                </div>

              </label>
            </div>
            <div style={{ marginTop: "40px" }}>
              <button className="custom__btn" type='submit'>Generate OTP</button>
            </div>
          </form>
        </div>
          :
          <div className="formContainer">
            <h1 id="exampleModalToggleLabel">Verify OTP</h1>
            {!errorStatus ? <p className='text-success'>OTP successfully send on {searchData.phone_no}</p> : ''}
            <form action='' onSubmit={verifyOtp}>
              <div className="inputRow">
                <input type="text" placeholder="Enter OTP" name='otp' value={values.otp} onChange={handleChange} />
              </div>
              <div style={{ marginTop: "40px" }}>
                <button className="custom__btn" type="submit">Verify OTP</button>
              </div>
            </form>

          </div>
        }
      </Dialog>
      {/* <div className='modal  panCard_Modal' id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1"  >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id='closeModal'></button>
            <div className="modal-body">

             

            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default eligilityForm