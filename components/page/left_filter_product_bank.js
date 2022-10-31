import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
const leftfilter = ({ content, ProductByCat, searchProduct }) => {
  const router = useRouter()
  const [empType, setEmpType] = useState()
  const [searchData, setSearchData] = useState({
    "cat_id": '1',
    "product_id": '',
    "employemnt_type": 'Salaried',
    "salary": "",
    "turnover": "",
    "pincode": "",
  })

  // const signupSchema = Yup.object({
  //   pincode: Yup.string().min(6).max(6),
  // });

  // const { searchData, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialsearchData: searchData,
  //     validationSchema: signupSchema,
  //     onSubmit: (searchData, actions) => {
  //     }
  //   });


  const handleChange = (e) => {

    if (e.target.value == "Salaried") {
      setEmpType("Salary")
    } else if (e.target.value == "Self employed") {
      setEmpType("TurnOver")
    }
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }
  const searchBankProduct = async (e) => {
    e.preventDefault()
    try {
      const hit = searchData.product_id + '/salary/' + searchData.salary + '/pincode/' + searchData.pincode + '?ref=web';
      router.push(hit)
      searchProduct()
    }
    catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {

    setSearchData({ ...searchData, salary: content.salary, pincode: content.pincode, prodeuct_id: content.p_name, turnover: content.salary })
    setEmpType(content.label)
  }, [content])

  return (
    <>
      <form onSubmit={searchBankProduct}>
        <div className="filterArea">
          <div className="inputRow">
            <label>Choose Product</label>
            <select className="form-select" aria-label="Type of loan " name='product_id' onChange={handleChange}>

              {ProductByCat.map((item, key) => (
                <option defaultValue='' selected={content.p_name == item.name} key={key} value={item.slug}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="inputRow">
            <label>Profession Type</label>
            <select className="form-select" name="employemnt_type" aria-label="Type of loan " onChange={handleChange} required>
              <option defaultValue='' value=''>Profession Type </option>
              <option selected value="Salaried">Salaried</option>
              <option value="Self employed">Self employed</option>
            </select>
          </div>

          {
            empType === 'Salary' &&
            <div className="inputRow">
              <label>Salary</label>
              <input type="number"
                autoComplete="off"
                name="salary"
                id="salary"
                placeholder="Monthly income"
                defaultValue={searchData.salary}
                onChange={handleChange}

                required />
            </div>
          }
          {
            empType === 'TurnOver' &&
            <div className="inputRow">
              <label>Turn Over</label>
              <input type="number"
                autoComplete="off"
                name="tenure"
                id="tenure"
                placeholder="Turn Over"
                defaultValue={searchData.turnover}

                onChange={handleChange}

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
              defaultValue={searchData.pincode}
              onChange={handleChange}

              required />
            {/* {errors.pincode && <p style={{ color: 'red', fontSize: '12px' }}>{errors.pincode}</p>} */}
          </div>
          {/* <div className="inputRow">
              <label>Interest</label>
              <input type="text" placeholder="min" value="" onChange={handleChange} /> <input type="text" placeholder="max" value="" onChange={handleChange} />
            </div> */}


          <button className="applyBtn" id="myBtn" title="Apply Filter" type="submit">Apply Filter</button>
        </div>
      </form>
    </>

  )
}

export default leftfilter