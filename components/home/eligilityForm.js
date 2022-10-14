import React, { useState } from 'react'

const eligilityForm = () => {
  const [searchData, setSearchData] = useState({
    "product_id"  : '',
    "emp_type"    : 'salaried',
    "salary"      : "",
    "name"        :"",
    "turnover"    :"",
    "pincode"     : "",
    "mobile"      : "",
    "pancard"     : ""
  })

  const handleChange = (e) => {

    setSearchData({
      ...searchData,

      
      [e.target.name]: e.target.value.trim()
    });
  };

  const submitForm = async () => {

    console.log(searchData)
    router.push({
      pathname: `/filter-product`,
      // query: searchData
    })
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
              <div className="formContainer">
                <div className="inputRow">
                  <input type="text" placeholder="Enter Name" name='name' value={searchData.name}  onChange={handleChange} />
                </div>
                <div className="inputRow">
                  <input type="text" placeholder="Phone Number" name='mobile' value={searchData.mobile}  onChange={handleChange} />
                </div>
                <div className="inputRow">
                  <input type="text" placeholder="Pan Card" name="pancard" value={searchData.pancard}  onChange={handleChange} />
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
                  <button className="custom__btn" onClick={submitForm}>Generate OTP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default eligilityForm