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

import GenerateOtp from "./generateOtp";
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
  const [token, setToken] = useState(getToken());
  const [validationSchema, setValidationSchema] = useState({});
  
  var initialValues = {};
 

  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: '',

      onSubmit: async (values) => {
        try {
          const headers = {
            'Authorization':"Bearer "+token.slice(1, -1)+""
          }
          const res = await axios.post('https://api.referloan.in/api/customers/',values,{headers});
          if(res.data.status){
            setStep(step + 1)
          }
        } catch (error) {
          alert('Something Went Wrong')
        }
      },
    });
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
              {(token == '' || token == null) && <GenerateOtp token={token} setToken={setToken} />
              }

              {(token != null || token != undefined) && <form onSubmit={handleSubmit}>
                {props.form_schema && props.form_schema.slice(step, step + 1).map((item, index) =>

                  <div  key={index}>
                    <h3 >{item.section_name}</h3>
                    {item.forms.map((elem, ind) => (
                      <div key={ind}>
                        {initialValues[elem.param_name] = ''}
                      
                        {(elem.type == 'text' || elem.type == 'number' || elem.type == 'date') && <TextField
                          fullWidth
                          
                          required
                          className="mt-2"
                          name={elem.param_name}
                          label={elem.field_name}
                          value={values.fullName}
                          onChange={handleChange}
                          error={touched.fullName && Boolean(errors.fullName)}
                          helperText={touched.fullName && errors.fullName}
                        />
                    
                          
                        
                        
                        
                        }

                        {elem.type == 'select' && <SelectField {...elem} values={values} />}

                        {elem.type == 'checkbox' && <FormControlLabel className="mt-2" control={<Checkbox defaultChecked />} label={elem.field_name} required />}

                        {elem.type == 'radio' && <FormControl className="mt-2" >
                          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            required
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                          </RadioGroup>
                        </FormControl>}
                      </div>
                    ))}
                  </div>
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
      <FormControl variant="standard" className="mt-2" fullWidth>

        <InputLabel id="demo-simple-select-standard-label">Profession Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name={props.param_name}
          label={props.field_name}
          required
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