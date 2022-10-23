import axios from "axios";
// import { Form, TextField, SelectField, SubmitButton } from './../form/fromElement';
import { useFormik } from 'formik'
import { useState,useEffect } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as Yup from "yup";
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
const getToken = () => {

  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('token');

    if (items) {
      console.log(items)
      return JSON.parse(localStorage.getItem('token'));
    } else {
      return [];
    }
  }
}
const apply = (props) => {

  // const tokenkey = getToken();
  const [step, setStep] = useState(0)
  const [token, setToken] = useState('');
  const [otpStatus, setOtpStatus] = useState(false);
  const [genOtpData, setGenOtpData] = useState({
    "full_name" : '',
    "phone_no" : '',
    "pan_card" : '',
    "otp" : '',
    "bank_product_id":7
  })
  var initialValues = {};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: "",

      onSubmit: (values) => {
        setStep(step + 1)
        try {
          const headers = {
            'Authorization':`Bearer ${token}`
          }
          const res =  axios.post('https://api.referloan.in/api/customers/',values,{headers});
          if(res){
          alert('here')
         
          }
        } catch (error) {
          alert('failed')
        }
      },
    });

    const handleInput = (e) =>{
      setGenOtpData({...genOtpData, [e.target.name]: e.target.value
      });
    }

    const generateOtp = (e) =>{
      e.preventDefault();
      try {
        const res =  axios.post('https://api.referloan.in/api/generate-otp',genOtpData);
        if(res){
          setOtpStatus(true)
         alert('sdfsh')
        }
      } catch (error) {
        console.log("message",error.message);
      }
    }

    const verifyItp = async (e) =>{
      e.preventDefault();
      const {phone_no,otp} = genOtpData;
      const data = {
        phone_no,otp,bank_product_id:7
      }
      try {
        const res = await axios.post('https://api.referloan.in/api/verify-otp',data);
        if(res){

          alert('here')
          console.log('res',res.data)
          localStorage.setItem("token", JSON.stringify(res.data.token));
          if (typeof window !== 'undefined') {
            setToken(window.localStorage.getItem("token"))
          }
        }
      } catch (error) {
        console.log("message",error.message);
      }
    }

    useEffect(() => {

      if (typeof window !== 'undefined') {
        setToken(window.localStorage.getItem("token"))
      }
    }, [token])
  return (
    <>
      <div className="container">
        <section className="cardOffer_area">
          <h2 style={{ textTransform: 'capitalize' }}>{props.data[0].name}</h2>
          <div className="dealStep__wrapper">
            <div className="dealStep__Area">
              {(token == '' || token == null) && <form>

                {!otpStatus?<><TextField value={genOtpData.full_name} required name="full_name" fullWidth label="Full Name" variant="standard" onChange={(e) => handleInput(e)} />
                <TextField value={genOtpData.phone_no} required name="phone_no" fullWidth label="Phone Number" variant="standard" onChange={(e) => handleInput(e)} />
                <TextField value={genOtpData.pan_card} required name="pan_card" fullWidth label="Pan Card" variant="standard" onChange={(e) => handleInput(e)} />
                <Button variant="contained" className="mt-4" type="submit" onClick={generateOtp}>Generate OTP</Button></> : <>
                <TextField value={genOtpData.otp} required name="otp" fullWidth label="OTP" variant="standard" onChange={(e) => handleInput(e)} />
                <Button variant="contained" className="mt-4" type="submit" onClick={verifyItp}>verify OTP</Button></>}
                
              </form>
              }

              {token != null  && <form onSubmit={handleSubmit}>
                {props.form_schema && props.form_schema.slice(step, step + 1).map((item, index) =>

                  <>
                    <h3>{item.section_name}</h3>
                    {item.forms.map((elem, ind) => (
                      <div key={ind}>
                        {initialValues[`${elem.param_name}`] = ''}
                        {(elem.type == 'text' || elem.type == 'number' || elem.type == 'date') && <TextField
                          fullWidth
                          id="name"
                          name={elem.param_name}
                          label={elem.field_name}
                          value={values.fullName}
                          onChange={handleChange}
                          error={touched.fullName && Boolean(errors.fullName)}
                          helperText={touched.fullName && errors.fullName}
                        />}

                        {elem.type == 'select' && <SelectField {...elem} values={values} />}

                        {elem.type == 'checkbox' && <FormControlLabel control={<Checkbox defaultChecked />} label={elem.field_name} />}

                        {elem.type == 'radio' && <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                          </RadioGroup>
                        </FormControl>}
                      </div>
                    ))}
                  </>
                )}

                <Button variant="contained" className="mt-4" type="submit" >Save & Next</Button>
              </form>}
            </div>
          </div>
        </section>

        <div className="innerpage_bg">
          <section className="section_pad">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: props.data[0].description }}></div>
            </div>
          </section>
        </div>
      </div>
    </>
  )


}



export default apply

// export function TextField(props) {
//   console.log(props)
//   const { field_name, param_name, type, ...rest } = props

//   return (
//     <>
//       {field_name && <label >{field_name}</label>}
//       <Field
//         className="form-control"
//         type={type}
//         name={param_name}
//         id={param_name}
//         placeholder={field_name || ""}
//         {...rest}
//       />
//       <ErrorMessage name={param_name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
//     </>
//   )
// }


export function SelectField(props) {

  console.log("select", props)
  const { name, label, ParamOptions } = props
  return (
    <>
      {/* {label && <label for={name}>{label}</label>} */}
      <FormControl variant="standard" fullWidth>

        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name={props.param_name}
          label={props.field_name}
        >
          {ParamOptions.map((optn, ind) => (
            <MenuItem key={ind} value={optn.value
            }>
              <em>{optn.name}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} /> */}
    </>
  )
}