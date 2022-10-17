import React, { useState, useEffect } from 'react'
import axios from 'axios';

const eligilityForm = ({ loanProduct }) => {
  const [otpStatus, setOtpStatus] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)
  const [searchData, setSearchData] = useState({
    "product_id": '',
    "emp_type": 'Salaried',
    "salary": "",
    "full_name": "",
    "turnover": "",
    "pincode": "",
    "phone_no": "",
    "pan_card": "",
    "otp": "",
    "loan_amount": ""
  })

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const generatOtp = async () => {
    try {
      let { full_name, phone_no, pan_card } = searchData;
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
  return (
    <>
      <div className="header-form-area">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#loan"
              type="button" role="tab" aria-controls="home" aria-selected="true">Loan</button>
          </li>
          {/* <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#creditCard"
              type="button" role="tab" aria-controls="creditCard" aria-selected="false">Credit
              Card</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#investment"
              type="button" role="tab" aria-controls="investment"
              aria-selected="false">Investment</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#insurance"
              type="button" role="tab" aria-controls="insurance" aria-selected="false">Insurance</button>
          </li> */}
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="loan" role="tabpanel" aria-labelledby="home-tab">
            <form action="">
              <div className="loan-form-area">
                <div className="loanType">
                  <select onChange={handleChange}>
                    <option selected >Type of loan </option>

                    {loanProduct && loanProduct.map((item, key) => (
                      <option value={item.name}>{item.name}</option>
                    ))}

                  </select>
                </div>
                <div className="loanType">
                  <input type="number" max="9" min="4" name='loan_amount' placeholder="Loan Amount" value={searchData.loan_amount} onChange={handleChange} />
                </div>
                <div className="loanType" >
                  <select onChange={handleChange} name="emp_type">
                    <option selected >Profession Type </option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self employed - business owner">Self employed - business owner</option>
                    <option value="Self employed professional">Self employed professional</option>
                  </select>
                </div>
                <div className="loanType ">
                  {(searchData.emp_type === 'Salaried' || searchData.emp_type === 'Freelancer') && <input name='salary' type="number" placeholder="Salary" onChange={handleChange} value={searchData.salary} minLength={4} maxLength={11} />}
                  {(searchData.emp_type === 'Self employed - business owner' || searchData.emp_type === 'Self employed professional') && <input name='turnover' type="number" placeholder="Turn Over" onChange={handleChange} value={searchData.turnover} minLength={4} maxLength={18} />
                  }
                </div>

                <div className="search-button">
                  <button type="button" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Continue</button>
                </div>
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="creditCard" role="tabpanel" aria-labelledby="profile-tab">...
          </div>
          <div className="tab-pane fade" id="investment" role="tabpanel" aria-labelledby="contact-tab">...
          </div>
          <div className="tab-pane fade" id="insurance" role="tabpanel" aria-labelledby="contact-tab">...
          </div>
        </div>
      </div>

      <div className= 'modal  panCard_Modal' id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1"  >
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
                <div className="inputRow">
                  <input type="number" name='pincode' placeholder="Pincode" value={searchData.pincode} onChange={handleChange} minLength={6} maxLength={6} />
                </div>
                <div className="checkBoxRow">
                  <input type="checkbox" id="term" name="term" value="term" required />
                  <label for="vehicle1">
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
                    <button className="custom__btn" onClick={verifyOtp}>Generate OTP</button>
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