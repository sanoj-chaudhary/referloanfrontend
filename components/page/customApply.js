import { data } from './../constant/data'
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { useFormik } from 'formik'
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRouter } from 'next/router';
import * as Yup from "yup";
import Thanks from "./thanks";

const CustomApply = (props) => {
  console.log("Custom", props)
  const [step, setStep] = useState(0)
  const [token, setToken] = useState();
  const router = useRouter()
  const [serversideStatus, setServerSideStatus] = useState(false)
  const [serversidemsg, setServerSideMsg] = useState('')
  const [loading, setLoading] = useState(true)
  var initialValues = {};

console.log(initialValues,"initialValues")
  const CustomApplyForm = Yup.object({
    title: Yup.string().min(2).required("Please select title"),
    full_name: Yup.string().min(2).required("Please enter your name "),
    phone_number: Yup.string().min(10).max(10).required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
    email:Yup.string().email().required('Please enter email'),
    gender:Yup.string().required('Please select gender'),
    marital_status:Yup.string().required('Please select marital status'),
    pan: Yup.string().min(10).max(10).required("Please fill the pan card").matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid Pancard"),
    residence_type:Yup.string().required('Please select residence type'),
    residence_pincode:Yup.string().min(6).max(6).required('Please enter pincode'),
    qualification:Yup.string().required('Please select residence type'),
    occupation:Yup.string().required('Please select occupation'),
  });


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: CustomApplyForm,

      onSubmit: async (values) => {
        alert('jhsdjhhjhjdfsjhjhhbjdsfjhhdsfhjasdfjhbfsdkhjsfdhjdshfdsjkdfshjdffdshj')
        try {
          const headers = {
            'Authorization': "Bearer " + token.slice(1, -1) + ""
          }
          setLoading(false)
          const res = await axios.post('https://api.referloan.in/api/customers/', values, { headers });
          if (res.data.status) {
            setLoading(false)
            setStep(step + 1)
          }
        } catch (error) {
          setServerSideStatus(false)
          setServerSideMsg('Fill the valid information')
          console.log("message", error.message);
        }
      },
    });

  const applyForm = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        'Authorization': "Bearer " + token.slice(1, -1) + ""
      }
      setLoading(false)
      const res = await axios.post('https://api.referloan.in/api/customers/', values, { headers });
      if (res.data.status) {
        setLoading(false)
        setStep(step + 1)
      }
    } catch (error) {
      setServerSideStatus(false)
      setServerSideMsg('Fill the valid information')
      console.log("message", error.message);
    }
  }

  useEffect(() => {
    setLoading(false)
    setServerSideStatus(false)
    setServerSideMsg('')
    if (typeof window !== 'undefined') {
      setToken(window.localStorage.getItem("token"))
    }
  }, [token, router])
  return (
    <>
      {!serversideStatus && <p className='form-error'>{serversidemsg}</p>}
      <form onSubmit={(e)=>{applyForm(e)}} >
        {data && data.slice(step, step + 1).map((item, index) =>

          <div key={index}>
            <h3>{item.section_name}</h3>
            {item.forms.map((elem, ind) => (
              <div key={ind}>

                {elem.param_name == 'pan_card' ? initialValues[elem.param_name] = panCard : initialValues[elem.param_name] = ''}

                {(elem.type == 'text' || elem.type == 'number' || elem.type == 'file' || elem.type == 'email') && <TextField
                  fullWidth
                 
                  inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Data!" } : {}}
                  required={elem.is_required}
                  className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                  name={elem.param_name}

                  label={elem.field_name}
                  id={elem.param_name}
                  autoComplete="off"
                  defaultValue=''
                  onChange={handleChange}
                />
               
                }
                {elem.type == 'date' &&
                  <TextField
                    fullWidth
                    inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Data!" } : {}}
                    required={elem.is_required}
                    className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                    name={elem.param_name}
                    label={elem.field_name}
                    id={elem.param_name}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    autoComplete="off"
                    onChange={handleChange}
                  />
                }
                {elem.type == 'select' && <SelectField {...elem} values={values} handleChange={handleChange} />}

                {elem.type == 'checkbox' && <FormControlLabel className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`} control={<Checkbox />} label={elem.field_name} required />}
              </div>
            ))}
            <div className="search-button"><button className="mt-4" type="submit" >Save & Next</button></div>
          </div>

        )}
  {data.length != 0 && data.length == step ? <Thanks product={props.product} /> : ""}


      </form>
    </>
  )
}

export default CustomApply

export function SelectField(props) {


  const { name, label, ParamOptions, handleChange } = props
  return (
    <>
      {/* {label && <label for={name}>{label}</label>} */}
      <FormControl variant="standard" className="mt-2" fullWidth>

        <InputLabel id="demo-simple-select-standard-label">{props.field_name}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name={props.param_name}
          label={props.field_name}
          required
          onChange={handleChange}
          defaultValue=""
        >
          {ParamOptions.map((optn, ind) => (
            <MenuItem key={ind} value={optn.value
            }>
              <em>{optn.name}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}