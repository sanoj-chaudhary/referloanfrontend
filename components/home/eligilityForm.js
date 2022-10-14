import React, { useState } from 'react'
import axios from 'axios';
const eligilityForm = () => {
  const [otpStatus,setOtpStatus] = useState(false)
  const [searchData, setSearchData] = useState({
    "product_id"  : '',
    "emp_type"    : 'salaried',
    "salary"      : "",
    "full_name"   : "",
    "turnover"    : "",
    "pincode"     : "",
    "phone_no"    : "",
    "pan_card"    : "",
    "otp"         : ""
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
      full_name,phone_no,pan_card
    }
    const headers = { 
      'Authorization': 'Bearer my-token',
      'Content-Type': 'Application/json'
  };
    // console.log(data)
    const otpres = await axios.post('https://testapi.referloan.in/api/generate-otp',data);
    console.log(otpres);
   } catch (error) {
    console.log("message:", error.message );
   }
  }

  const verifyOtp = async () =>{
    console.log("first")
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
                  <select>
                    <option selected onChange={handleChange}>Type of loan </option>
                    <option>Normal</option>
                    <option>Hard</option>
                    <option>Expert</option>
                  </select>
                </div>

                <div className="loanType">
                  <select>
                    <option selected onChange={handleChange} name="emp_type">Type of loan </option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self employed - business owner">Self employed - business owner</option>
                    <option value="Self employed professional">Self employed professional</option>
                  </select>
                </div>
                <div className="loanType ">
                 
                  {(searchData.emp_type === 'salaried' || searchData.emp_type === 'Freelancer' ) && <input name='salary' type="text" placeholder="Salary" onChange={handleChange} value={searchData.salary}  />}
                  {(searchData.emp_type === 'Self employed - business owner' || searchData.emp_type === 'Self employed professional') && <input name='turnover' type="text" placeholder="Turn Over" onChange={handleChange} value={searchData.turnover} />
                  }
                </div>
                <div className="loanType">
                  <input type="number" name='pincode' placeholder="Pincode" value={searchData.pincode} onChange={handleChange} />
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

      <div className="modal fade panCard_Modal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h1 id="exampleModalToggleLabel">Credit Card</h1>
              <p>Get the best credit card suit your requirment</p>
              {!otpStatus ?  <div className="formContainer">
                <div className="inputRow">
                  <input type="text" placeholder="Enter Full Name" name='full_name' value={searchData.full_name}  onChange={handleChange} />
                </div>
                <div className="inputRow">
                  <input type="text" placeholder="Phone Number" name='phone_no' value={searchData.phone_no}  onChange={handleChange} />
                </div>
                <div className="inputRow">
                  <input type="text" placeholder="Pan Card" name="pan_card" value={searchData.pan_card}  onChange={handleChange} />
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
              </div> : <div className="formContainer">
                <div className="inputRow">
                  <input type="text" placeholder="Enter OTP" name='otp' value={searchData.otp}  onChange={handleChange} />
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