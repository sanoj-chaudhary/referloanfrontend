import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
const leftfilter = ({ content }) => {
  const router = useRouter()
  const [searchData, setSearchData] = useState({
    "cat_id": '1',
    "product_id": '',
    "employemnt_type": 'Salaried',
    "salary": "",
    "turnover": "",
    "pincode": "",
  })

  const signupSchema = Yup.object({
    pincode: Yup.string().min(6).max(6),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: searchData,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {

      }
    });
  const searchProduct = async (e) => {
    e.preventDefault()
    alert('here')
    try {
      const hit = values.product_id + '/salary/' + values.salary + '/pincode/' + values.pincode + '?ref=web';
      router.push(hit)

    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <form onSubmit={searchProduct}>
        <div className="filterArea">
          <div className="inputRow">
            <label>Type of Loan</label>
            <select className="form-select" aria-label="Type of loan " name='product_id' onChange={handleChange}>
              <option defaultValue>Type of loan</option>
              <option value="">Type of loan </option>
              <option value="loans/home-loan">Home Loan</option>
              <option value="loans/personal-loan">Personal Loan</option>
              <option value="loans/business-loan">Business Loan</option>
              <option value="loans/gold-loan">Gold Loan</option>
              <option value="loans/loan-against-property">Loan Against Property</option>
              <option value="loans/builder-loan">Builder Loan</option>
              <option value="loans/hospital-loan">Hospital Loan</option>
              <option value="loans/school-loan">School Loan</option>
            </select>
          </div>
          <div className="inputRow">
            <label>Profession Type</label>
            <select className="form-select" name="employemnt_type" aria-label="Type of loan " onChange={handleChange} required>
              <option defaultValue value=''>Profession Type </option>
              <option value="Salaried">Salaried</option>
              <option value="Self employed">Self employed</option>
            </select>
          </div>

          {
            values.employemnt_type === 'Salaried' &&
            <div className="inputRow">
              <label>Salary</label>
              <input type="number"
                autoComplete="off"
                name="salary"
                id="salary"
                placeholder="Monthly income"
                value={values.salary}
                onChange={handleChange}
                onBlur={handleBlur}
                required />
            </div>
          }
          {
            values.employemnt_type === 'Self employed' &&
            <div className="inputRow">
              <label>Turn Over</label>
              <input type="number"
                autoComplete="off"
                name="tenure"
                id="tenure"
                placeholder="Turn Over"
                value={values.tenure}
                onChange={handleChange}
                onBlur={handleBlur}
                required />
            </div>
          }


          <div className="inputRow">
            <label>Pincode</label>
            <input type="number"
              autoComplete="off"
              name="pincode"
              id="pincode"
              placeholder="Residential Pincode"
              value={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
              required />
            {errors.pincode && <p style={{ color: 'red', fontSize: '12px' }}>{errors.pincode}</p>}
          </div>
          {/* <div className="inputRow">
              <label>Interest</label>
              <input type="text" placeholder="min" value="" onChange={handleChange} /> <input type="text" placeholder="max" value="" onChange={handleChange} />
            </div> */}
          <button className="applyBtn" title="Apply Filter" type="submit">Apply Filter</button>
        </div>
      </form>
    </>

  )
}

export default leftfilter