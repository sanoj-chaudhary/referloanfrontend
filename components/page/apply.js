import axios from "axios";
// import { Form, TextField, SelectField, SubmitButton } from './../form/fromElement';
import { useFormik } from 'formik'
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Head from "next/head";
import GenerateOtp from "./generateOtp";
import Loader from "./loader";
import Thanks from "./thanks";
import { useRouter } from 'next/router';
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
  const router = useRouter()
  //console.log("length",props.form_schema.length)
  //console.log("form_schema",props.form_schema)
  // const tokenkey = getToken();
  const [step, setStep] = useState(0)
  const [token, setToken] = useState(getToken());
  const [validationSchema, setValidationSchema] = useState({});
  const [panCard, setPancard] = useState('');
  const [paramName, setParamName] = ('')
  const [loading, setLoading] = useState(true)
  //const [userValues, setUserValues] = useState({});
  const [serversidemsg, setServerSideMsg] = useState('')
  const [serversideStatus, setServerSideStatus] = useState(false)
  //var initialValues = {};
  
  /*if (typeof window !== 'undefined') {
    var full_name = window.localStorage.getItem("full_name");
    var pan = window.localStorage.getItem("pan");
    var phone = window.localStorage.getItem("phone");
    if (full_name != null) {
      var first_name = full_name.split(' ').slice(0, 1).join(' ');
      var last_name = full_name.split(' ').slice(1, full_name.length).join(' ');
    } else {
      var first_name = '';
      var last_name = '';
    }
  } else {
    var full_name = '';
    var pan = '';
    var phone = '';
    var first_name = '';
    var last_name = '';
  }

  const otpData = {
    full_name, first_name, last_name, pan, phone
  }*/

  //console.log('F: '+first_name);

  const { values, errors, touched, handleBlur,setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues:{},
      validationSchema: '',

      onSubmit: async (values) => {
        //submitForm();
        try {
          const headers = {
            'Authorization': "Bearer " + token.slice(1, -1) + ""
          }
          console.log(values)

          setLoading(false)
          const res = await axios.post('https://api.referloan.in/api/customers/', values, { headers });
          if (res.data.status) {

            setLoading(false)

            if (props.form_schema.length - 1 == step) {
              var bank_product_id = { "bank_product_id": props.data[0].bank_product_id }
              const resData = await axios.post('https://api.referloan.in/api/banks/process', bank_product_id, { headers });
              console.log('resData: ' + resData)
              if (resData.data.status) {
                setStep(step + 1)
                if (typeof window !== 'undefined') {
                  /*window.localStorage.removeItem("token");
                  window.localStorage.removeItem("full_name");
                  window.localStorage.removeItem("pan");
                  window.localStorage.removeItem("phone");*/
                }
              }
            } else {
              setStep(step + 1)
            }
             submitForm();
          }


        } catch (error) {
          setServerSideStatus(false)
          setServerSideMsg('Fill the valid information')
          console.log("message", error.message);
          setLoading(false)
        }
      },
    });

  useEffect(() => {
    //fillFormValues();
    setLoading(false)
    setServerSideStatus(false)
    setServerSideMsg('')
    if (typeof window !== 'undefined') {
      setToken(window.localStorage.getItem("token"))
    }
  }, [token,router])

  console.log('props', props)
  const mySentence = props.data[0].name.trim();
  const productName = mySentence.split(" ");

  const newProductName = productName.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join("_");

  
  console.log("formSchemaa", props.form_schema)
  console.log("schema length", props.form_schema.length)

  function submitForm() {
    document.getElementById("myForm").reset();
  }

  function fillFormValues() {
    alert('Val: '+pan);
    // setFieldValue(...values,pan=pan)
    // document.getElementById("pan").value = "pan";
    // document.getElementById("phone").value = phone;
    // document.getElementById("first_name").value = first_name;
    // document.getElementById("last_name").value = last_name;
  }

  return (
    <>

      <Head>
        <title>{props.data[0].meta_title}</title>
        <meta name={'description'} content={props.data[0].meta_description} />
        <meta name={'keywords'} content={props.data[0].meta_keyword} />
      </Head>
      {loading ? <Loader loading={loading} /> :
        <div className="container">
          <div className="applyHeaderCard">
            <h3>Start with <span style={{ textTransform: 'capitalize' }}>{props.data[0].name}</span> in few steps</h3>
            <p>Enter your mobile number,name and pancard and request for OTP to continue</p>
          </div>
          <section className="cardOffer_area">
            <div className="dealStep__leftArea">
              <div className="CardImg_box">
                <img
                  src={`/uploads/product_bank/${newProductName}.png`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = '/uploads/product_bank/' + props.data[0].categories_id + '.png';
                  }}
                />

              </div>
              <h2 style={{ textTransform: 'capitalize' }}>{props.data[0].name}</h2>
              <ul>
                {props.specification.map((item, key) => (
                  <li key={key}>
                    <div className="price_row">
                      <label >{item.title}</label>
                      <span>₹ {item.value}</span>
                    </div>
                    <p>{item.short_description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dealStep__wrapper">
              <div className="dealStep__Area">
                {!serversideStatus && <p className='form-error'>{serversidemsg}</p>}
                {(token == '' || token == null) && <GenerateOtp setServerSideStatus={setServerSideStatus} setServerSideMsg={setServerSideMsg} data={props.data[0]} setUserValues={setUserValues} setPancard={setPancard} setToken={setToken} />
                }

                {(token != null || token != undefined) && <form id="myForm" onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }} >
                  {props.form_schema && props.form_schema.slice(step, step + 1).map((item, index) =>
                    
                    <div key={index} >
                      {/* {fillFormValues()} */}
                      <h3>{item.section_name}</h3>
                      {item.forms.map((elem, ind) => (
                        <div key={ind}>

                          {(elem.type == 'text' || elem.type == 'number' || elem.type == 'file' || elem.type == 'email') && <TextField
                            fullWidth
                            inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Data!" } : {}}
                            required={elem.is_required}
                            className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                            name={elem.param_name}
                            label={elem.field_name}
                            id={elem.param_name}
                            //autoComplete="off"
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
                              //autoComplete="off"
                              onChange={handleChange}
                            />


                          }
                          {elem.type == 'select' && <SelectField {...elem} values={values} handleChange={handleChange} />}

                          {elem.type == 'checkbox' && <FormControlLabel className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`} control={<Checkbox />} label={elem.field_name} required />}

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
                      <div className="search-button"><button className="mt-4" type="submit" >Save & Next</button></div>

                    </div>

                  )}

                  {props.form_schema.length != 0 && props.form_schema.length == step ? <Thanks product={props.data[0].name} /> : ""}

                  {props.form_schema.length == 0 ? <img src="/images/coming-soon.png" width="100" /> : ''}
                </form>}
              </div>
            </div>
          </section>

          <div className="innerpage_bg">
            <section className="section_pad">
              <div className="container">
                <div dangerouslySetInnerHTML={{ __html: props.data[0].description }}></div>
              </div>

              {props.faq != '' ? <div className="faqSetion">
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
                <h2>Have a question? We've got answers!</h2>
                <div className="faq_row">
                  <div className="accordion accordion-flush faqAccordion " id="accordionFlushExample">

                    {props.faq.map((item, key) => (
                      <div key={key} className="accordion-item">
                        <h2 className="accordion-header" id={'flush-heading' + key}>
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse' + key} aria-expanded="false" aria-controls={'flush-collapse' + key}>
                            {item.question}
                          </button>
                        </h2>
                        <div id={'flush-collapse' + key} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="faqImg">
                    <img src="/images/faq.png" alt="faqImg" />
                  </div>
                </div>
              </div> : ''}
              

            </section>
          </div>
        </div>
      }
    </>
  )
}

export default apply

export function SelectField(props) {

  console.log("select", props)
  const { name, label, ParamOptions,handleChange  } = props
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