import axios from "axios";
// import { Form, TextField, SelectField, SubmitButton } from './../form/fromElement';
import { useFormik } from 'formik'
import { useState } from "react";
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
const getSearchData = () => {

  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('step');

    if (items) {
      console.log(items)
      return JSON.parse(localStorage.getItem('step'));
    } else {
      return [];
    }
  }
}
const apply = (props) => {

  let countStep = getSearchData();
  console.log(countStep)
  const [step, setStep] = useState(countStep != '' ? countStep : 0)
  var initialValues = {};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: "",

      onSubmit: (values) => {
        alert(values)
        setStep(step + 1)
        localStorage.setItem("step", step + 1);
      },
    });


  console.log(props)
  return (
    <>
      <div class="container">
        <section class="cardOffer_area">
          <h2 style={{ textTransform: 'capitalize' }}>{props.data[0].name}</h2>
          <div class="dealStep__wrapper">
            <div class="dealStep__Area">
              <form onSubmit={handleSubmit}>
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
              </form>
            </div>
          </div>
        </section>

        <div class="innerpage_bg">
          <section class="section_pad">
            <div class="container">
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
          {ParamOptions.map((optn) => (
            <MenuItem value={optn.value
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