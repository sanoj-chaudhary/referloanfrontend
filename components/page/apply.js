import axios from "axios";
// import { Form, TextField, SelectField, SubmitButton } from './../form/fromElement';
import { useFormik } from 'formik'
import { useState, useEffect } from "react";
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
const [panCard, setPancard] = useState('');
const [paramName, setParamName] = ('')
  var initialValues = {};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: '',

      onSubmit: async (values) => {
        try {
          const headers = {
            'Authorization': "Bearer " + token.slice(1, -1) + ""
          }
          const res = await axios.post('https://api.referloan.in/api/customers/', values, { headers });
          if (res.data.status) {
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
          
          <div className="dealStep__leftArea">
                <div className="CardImg_box">
                    <img src={`/uploads/product_bank/${props.data[0].name}.png `} alt="" />
                </div>
                <h2 style={{ textTransform: 'capitalize' }}>{props.data[0].name}</h2>
                <ul>
                    <li>
                        <div className="price_row">
                           <label for=""> 1st Year fee</label>
                           <span>₹ 500</span>
                        </div>
                        <p>
                            Annual Fee waiver on annual spends of ₹ 2,00,000
                        </p>
                    </li> 
                    <li>
                        <div className="price_row">
                           <label for="">Reward Values</label>
                           <span>₹ 500</span>
                        </div>
                        <p>
                            On Spending exceeding ₹ 2,00,000
                        </p>
                    </li> 
                    <li>
                        <div className="price_row">
                           <label for=""> 1st Year fee</label>
                           <span>₹ 500</span>
                        </div>
                        <p>
                            Annual Fee waiver on annual spends of ₹ 2,00,000
                        </p>
                    </li>
                </ul>
            </div>
          <div className="dealStep__wrapper">
            <div className="dealStep__Area">
              {(token == '' || token == null) && <GenerateOtp setPancard={setPancard} setToken={setToken} />
              }

              {(token != null || token != undefined) && <form onSubmit={handleSubmit}>
                {props.form_schema && props.form_schema.slice(step, step + 1).map((item, index) =>

                  <div key={index}>
                    <h3>{item.section_name}</h3>
                    {item.forms.map((elem, ind) => (
                      <div key={ind}>
                        {elem.param_name == 'pan_card'?initialValues[elem.param_name] = panCard: initialValues[elem.param_name] = ''}

                        {(elem.type == 'text' || elem.type == 'number' || elem.type == 'file' || elem.type == 'date') && <TextField
                          fullWidth
                          pattern={elem.patterns}
                          required={elem.is_required}
                          className={`"mt-2" ${elem.is_visible? '':'d-none'}`}
                          name={elem.param_name}
                          label={elem.field_name}
                         autoComplete="off"
                          onChange={handleChange}
                        />

                        }

                        {elem.type == 'select' && <SelectField {...elem} values={values} />}

                        {elem.type == 'checkbox' && <FormControlLabel className={`"mt-2" ${elem.is_visible? '':'d-none'}`} control={<Checkbox  />} label={elem.field_name} required />}

                        {elem.type == 'radio' && <FormControl className="mt-2" >
                          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                           
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