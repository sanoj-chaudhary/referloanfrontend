import axios from "axios";
import { useFormik } from 'formik'
import { useState } from "react";
import * as Yup from "yup";

const callbackForm = () => {
  const [active, setActive] = useState(false)
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

  const { values, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: callbackSchema,
      onSubmit: async (values, action) => {
        try {
          setActive(true)
          const res = await axios.post(`${process.env.APIHOST}/api/franchise_enquiry`, values);
          if (res.data.status) {
            setError(false)
            setActive(false)
            setMessage('Thank you for enquiry')
          } else {
            setError(false)
            setActive(false)
          }
        } catch (error) {
          setError(true)
          setActive(false)
          console.log("Message : ", error.message)
        }
      }
    });

  return (
    <>
      
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

        <div className="search-button">
        <div className="search-button"><button className="mt-4" disabled={active} type="submit" >{active ?<> Processing <i className="fa fa-spinner fa-spin"></i> </> : "Let’s Go!"}</button></div>
          
          </div>

      </form>
    </>
  )
}

export default callbackForm