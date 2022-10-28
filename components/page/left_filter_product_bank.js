import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
const leftfilter = ({ content, ProductByCat }) => {
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
            <label>Choose Product</label>
            <select className="form-select" aria-label="Type of loan " name='product_id'  onChange={handleChange}>

              {ProductByCat.map((item, key) => (
                <option selected={content.p_name == item.name} key={key} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="inputRow">
            <label>Profession Type</label>
            <select className="form-select" name="employemnt_type" aria-label="Type of loan " defaultValue={values.employemnt_type} onChange={handleChange} required>
              <option  value=''>Profession Type </option>
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
                defaultValue={content.salary}
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
                defaultValue={content.tenure}
                
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
              defaultValue={content.pincode}
              
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