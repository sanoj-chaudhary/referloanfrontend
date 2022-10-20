import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from 'next/router';
const eligilityForm = ({ loanProduct, creditProduct }) => {
const router = useRouter()
  const signupSchema = Yup.object({
    pincode: Yup.string().min(6).max(6),
  });

  const [searchData, setSearchData] = useState({
    "employemnt_type": 'Salaried',
    "product_id": '',
    "salary": "",
    "turnover": "",
    "pincode": "",
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: searchData,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {

      }
    });

    const searchProduct = async (e) =>{
      e.preventDefault()
      localStorage.setItem("searchData", JSON.stringify(values));
     
     //router.push(`product-bank?banklist=125`)
      router.push(values.product_id+'/'+values.salary+'/'+values.pincode+'?pid='+values.product_id)
    }

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
            <form onSubmit={searchProduct}>
              <div className="loan-form-area">
                <div className="loanType">
                  <select name='product_id' onChange={handleChange} value={values.product_id} required>
                    <option defaultValue value=''>Type of loan </option>
                    {loanProduct && loanProduct.map((item, key) => (
                      <option key={key} value={item.id} slug={item.name}>{item.name}</option>
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
                  {errors.employemnt_type && <p style={{ color: 'red', fontSize: '12px' }}>{errors.employemnt_type}</p>}
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
                        placeholder="Monthly income"
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
                    placeholder="Residential Pincode"
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.pincode && <p style={{ color: 'red', fontSize:'12px' }}>{errors.pincode}</p>}
                </div>
                <div className="search-button">
                  <button type="submit" >Continue</button>
                </div>
              </div>
            </form>
          </div>

          {/* Credit card search form */}
          <div className="tab-pane fade" id="creditCard" role="tabpanel" aria-labelledby="profile-tab">
            <form onSubmit={searchProduct}>
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
                        placeholder="Monthly income"
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
                    placeholder="Residential Pincode"
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.pincode && <p style={{ color: 'red', fontSize: "12px" }}>{errors.pincode}</p>}
                </div>
                <div className="search-button">
                  <button type="submit" >Continue</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default eligilityForm