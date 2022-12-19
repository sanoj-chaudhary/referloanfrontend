import axios from "axios";
import { useFormik } from 'formik'
import { useState } from "react";
import * as Yup from "yup";

const callbackForm = () => {
  const [error, setError] = useState(false)
  const [message, setMessage] = useState()
  const initialValues = {
    name: '',
    email: '',
    phone_no: ''
  }

  const callbackSchema = Yup.object({
    name: Yup.string().min(2, 'Invalid name').required("Please enter your name "),
    email: Yup.string().email(),
    phone_no: Yup.string().min(10, 'Invalid phone number').max(10, 'Invalid phone number').required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
  });

  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: callbackSchema,
      onSubmit: async (values, action) => {
        try {
          const res = await axios.post(`${process.env.APIHOST}/api/franchise_enquiry`, values);
          if (res.data.status) {
            setError(false)
            setMessage('Thank you for enquiry')
          } else {
            setError(false)
          }
        } catch (error) {
          setError(true)
          console.log("Message : ", error.message)
        }
      }
    });

  return (
    <>
      <div className="heading">Let's start something big together.</div>
      <p>ReferLoan introduced a franchise model which allows you to grow your business at zero investment and
        risk-free life.</p>
      <div className="feature_area">
        <h3>ReferLoan - A leading fintech company</h3>
        <ul>
          <li>
            <span className="icon_box">345+</span>
            <h2>Financial Products</h2>
          </li>
          <li>
            <span className="icon_box">175+</span>
            <h2>Banks/NBFCs tie-ups</h2>
          </li>
          <li>
            <span className="icon_box">40+</span>
            <h2>Franchise Openings</h2>
          </li>
        </ul>
      </div>
      <form onSubmit={(e) => { e.preventDefault(), handleSubmit() }}>
        <div className="form-floating mb-3">
          <input type="text" name="name" autoComplete="off" className="form-control shadow-none" required onChange={handleChange} value={values.name} />

          <label htmlFor="floatingInput">Name</label>
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div className="form-floating mb-3">
          <input type="email" name="email" autoComplete="off" className="form-control shadow-none" required onChange={handleChange} value={values.email} />
          <label htmlFor="floatingInput">Email</label>
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="form-floating mb-3">
          <input type="number" name="phone_no" autoComplete="off" className="form-control shadow-none" maxLength="10" required onChange={handleChange} value={values.phone_no} />
          <label htmlFor="floatingInput">Mobile No</label>
          {errors.phone_no && touched.phone_no ? (
            <p className="form-error">{errors.phone_no}</p>
          ) : null}
        </div>
        <span className="text-success">{message}</span>
        {error && <span className="text-danger">Something went wrong!</span>}

        <div className="search-button"><button className="my-2" type="submit">Let’s Go!</button></div>

      </form>
    </>
  )
}

export default callbackForm