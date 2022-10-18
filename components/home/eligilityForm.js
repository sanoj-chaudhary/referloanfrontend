import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from "formik";
const eligilityForm = ({ loanProduct, creditProduct }) => {
  const [otpStatus, setOtpStatus] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)
  const [token, setToken] = useState('')


  const [searchData, setSearchData] = useState({
    "employemnt_type":'',
    "product_id": '',
    "salary": "",
    "full_name": "",
    "turnover": "",
    "pincode": "",
    "phone_no": "",
    "pan_card": "",
    "otp": "",
  })

  const userSchema = Yup.object({
    pincode: Yup.string().min(6).required("Enter Pincode "),
    product_id: Yup.string().required("Select Loan Type"),
    full_name: Yup.string().required("Enter Fullname"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const generatOtp = async () => {
    try {
      let { name, phone_no, pan_card } = searchData;
      const data = {
        name, phone_no, pan_card
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

  const verifyOtp = async () => {
    try {
      let { phone_no, otp } = searchData;
      const data = {
        phone_no, otp
      }
      const veryfyres = await axios.post('https://testapi.referloan.in/api/verify-otp', data);
      if (veryfyres) {
        localStorage.setItem("token", veryfyres.data.token);
        setErrorStatus(false)
        if (typeof document !== "undefined") {
          document.getElementById('closeModal').click();
        }
      }
    } catch (error) {
      setErrorStatus(true)
      console.log("message:", error.message);
    }
  }
  const updateEligibility = async () => {
    let { phone_no, product_id, salary, full_name, turnover, pincode, pan_card } = searchData;
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
    try {
      const veryfyres = await axios.post('https://api.referloan.in/api/customers/', data);
      if (veryfyres) {
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
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        console.log(values)
        action.resetForm();
      },
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
            <form action="" onSubmit={handleSubmit}>
              <div className="loan-form-area">
                <div className="loanType">
                  <select name='product_id' onChange={handleChange}  value={values.product_id} >
                    <option selected disabled>Type of loan </option>
                    {loanProduct && loanProduct.map((item, key) => (
                      <option key={key} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="loanType" >
                  <select onChange={handleChange} name="employemnt_type" value={values.employemnt_type} >
                    <option selected disabled>Profession Type </option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self employed">Self employed</option>
                  </select>
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
                      />

                    }
                    {values.employemnt_type === 'Self employed' &&

                      <input
                        type="number"
                        autoComplete="off"
                        name="tenure"
                        id="pincode"
                        placeholder="Turn Over"
                        value={values.tenure}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                  />
                  {errors.pincode && touched.pincode ? (
                    <p className="form-error">{errors.pincode}</p>
                  ) : null}
                </div>
                <div className="search-button">

                  {token ? <button type="button" role="button" onClick={handleSubmit}>Submit</button> : <button type="button" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Continue</button>}

                </div>
              </div>
            </form>
          </div>

          {/* Credit card search form */}
          <div className="tab-pane fade" id="creditCard" role="tabpanel" aria-labelledby="profile-tab">
          <form action="" onSubmit={handleSubmit}>
              <div className="loan-form-area">
                <div className="loanType">

                  
                  <select name='product_id' onChange={handleChange}  value={values.product_id} >
                    <option selected disabled>Type of loan </option>
                    {creditProduct && creditProduct.map((item, key) => (
                      <option key={key} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="loanType" >
                  <select onChange={handleChange} name="employemnt_type" value={values.employemnt_type} >
                    <option selected disabled>Profession Type </option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self employed">Self employed</option>
                  </select>
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
                      />

                    }
                    {values.employemnt_type === 'Self employed' &&

                      <input
                        type="number"
                        autoComplete="off"
                        name="tenure"
                        id="pincode"
                        placeholder="Turn Over"
                        value={values.tenure}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                  />
                  {errors.pincode && touched.pincode ? (
                    <p className="form-error">{errors.pincode}</p>
                  ) : null}
                </div>
                <div className="search-button">

                  {token ? <button type="button" role="button" onClick={updateEligibility}>Submit</button> : <button type="button" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Continue</button>}

                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

      <div className='modal  panCard_Modal' id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1"  >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id='closeModal'></button>
            <div className="modal-body">

              <h1 id="exampleModalToggleLabel">Check Eligility</h1>
              {errorStatus && <p className='text-danger'>Something Went Wrong</p>}
              {!otpStatus ? <div className="formContainer">

                <div className="inputRow">
                  <input type="text" placeholder="Enter Full Name" name='full_name' value={searchData.full_name} onChange={handleChange} />
                </div>
                <div className="inputRow">
                  <input type="text" placeholder="Phone Number" name='phone_no' value={searchData.phone_no} onChange={handleChange} />
                </div>
                <div className="inputRow">
                  <input type="text" placeholder="Pan Card" name="pan_card" value={searchData.pan_card} onChange={handleChange} />
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
                  <button className="custom__btn" onClick={generatOtp}>Generate OTP</button>
                </div>
              </div>
                :
                <div className="formContainer">
                  <h1 id="exampleModalToggleLabel">Verify OTP</h1>
                  {!errorStatus ? <p className='text-success'>OTP successfully send on {searchData.phone_no}</p> : ''}
                  <div className="inputRow">
                    <input type="text" placeholder="Enter OTP" name='otp' value={searchData.otp} onChange={handleChange} />
                  </div>
                  <div style={{ marginTop: "40px" }}>
                    <button className="custom__btn" onClick={verifyOtp}>Verify OTP</button>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default eligilityForm