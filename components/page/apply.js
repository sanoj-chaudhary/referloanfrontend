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
const apply = (props) => {
  const [step, setStep] = useState({})
  var initialValues = {};
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: "",

    });

  console.log(props)
  return (
    <>
      <div class="container">
        <section class="cardOffer_area">

          <h2 style={{ textTransform: 'capitalize' }}>{props.data[0].name}</h2>






          <div class="dealStep__wrapper">
            <div class="dealStep__Area">

              <form>

                {props.form_schema && props.form_schema.map((item, index) =>

                  <>

                    <h3>{item.step_id == 1 && item.section_name}</h3>
                    {item.step_id == 1 && item.forms.map((elem, ind) => (
                      <div key={ind}>

                        {initialValues[`${elem.param_name}`] = ''}
                        {elem.type == 'text' && <TextField
                          fullWidth
                          id="name"
                          name={elem.param_name}
                          label={elem.field_name}
                          value={values.fullName}
                          onChange={handleChange}
                          error={touched.fullName && Boolean(errors.fullName)}
                          helperText={touched.fullName && errors.fullName}
                        />}

                        {elem.type == 'select' && <FormControl variant="standard" fullWidth>

                          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={values.age}
                            onChange={handleChange}
                            name='age'
                            errors={errors.age}
                            label="Age"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
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
