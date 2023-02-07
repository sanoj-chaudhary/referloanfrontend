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
import * as Yup from 'yup';
import GenerateOtp from "./generateOtp";
import Loader from "./loader";
import Thanks from "./thanks";
import { useRouter } from 'next/router';
import CustomApply from './customApply';
import DialogBox from "./dialogBox";
//import $ from 'jQuery';
import FormData from 'form-data'
import StarRating from './rating';
import UtmForm from "./utmForm";
export const config = { amp: 'hybrid' };
import LeaveQuestion from "./leaveQuestion";
import Faq from "./faq";
import { toast } from "react-toastify";
import { makeUpperCase, getAccessToken, setAccessToken } from './../../utils'
const getToken = () => {

  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('token');

    if (items && items !== undefined) {
      return JSON.parse(localStorage.getItem('token'));
    } else {
      return null;
    }
  }
}
const apply = (props) => {
  const [fileList, setFileList] = useState([]);
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [token, setToken] = useState(getToken());
  const [validationSchema, setValidationSchema] = useState({});
  const [utmForms, setUtmForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userValues, setUserValues] = useState({});
  const [serversidemsg, setServerSideMsg] = useState('')
  const [serversideStatus, setServerSideStatus] = useState(false)
  const [active, setActive] = useState(false)
  const [apiResponse, setApiResponse] = useState('')
  const [files, setFiles] = useState([]);
  const [redirectUrl, setRedirectUrl] = useState('');

  let preassignValue = {}
  let initialValues = {}
  let _validationSchema = {};
  let paramName;
  let flag = false;
  let dependency = []
  let dependency_value = []
  if (typeof window !== 'undefined') {
    var full_name = window.localStorage.getItem("full_name");
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
    var phone = '';
    var first_name = '';
    var last_name = '';
  }

  const otpData = {
    full_name, first_name, last_name, phone
  }
  
  const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
    useFormik({
      initialValues,
      validationSchema: '',
      onSubmit: async (values, actions) => {
        try {
          const data = new FormData();
          for (const property in values) {
            data.append(property, values[property])
          }
          for (const property in preassignValue) {
            data.append(property, preassignValue[property])
          }


          const headers = {
            'Authorization': "Bearer " + token.slice(1, -1) + ""
          }
          setLoading(false)
          setActive(true)
          const res = await axios.post(`${process.env.APIHOST}/api/customers/`, data, { headers });
          if (res.data.status) {

            setLoading(false)

            if (props.form_schema.length - 1 == step) {
              try {
                var bank_product_id = { "bank_product_id": props.data[0].bank_product_id }
                const resData = await axios.post(`${process.env.APIHOST}/api/banks/process`, bank_product_id, { headers });

                if (resData.data.status) {
                  if (typeof resData.data.data.reference_key !== 'undefined') {
                    setApiResponse(resData.data.data.reference_key);
                  }
                  if (typeof resData.data.data.redirectionUrl !== 'undefined') {
                    setRedirectUrl(resData.data.data.redirectionUrl);

                  }
                  setStep(step + 1)
                  if (typeof window !== 'undefined') {
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("full_name");
                    window.localStorage.removeItem("phone");
                  }
                }
              } catch (error) {
                setStep(step + 1)
                if (typeof window !== 'undefined') {
                  window.localStorage.removeItem("token");
                  window.localStorage.removeItem("full_name");
                  window.localStorage.removeItem("phone");
                }
              }
            } else {
              setStep(step + 1)
            }
            submitForm(values.pan);
            setActive(false)
          }
        } catch (error) {
          toast.error('Something Went Wrong!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          console.log("message", error.message);
          setLoading(false)
          setActive(false)
        }
      },
    });

  useEffect(() => {
    setLoading(false)
    setServerSideStatus(false)
    setServerSideMsg('')
    if (typeof window !== 'undefined') {
      setToken(window.localStorage.getItem("token"))
    }
    for (const property in initialValues) {
      _validationSchema[property] = Yup.string().required('This is required field');
    }
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
  }, [token, router, step])
  const newProductName  = makeUpperCase(props.data[0].name.trim(),"_")
 

  function submitForm(e) {
    document.getElementById("dynamicMyForm").reset();
  }
  return (
    <>
      {loading && <Loader loading={loading} />}
      <div className="main-container">

        {/* <div className="applyHeaderCard text-center p-4">
          <h3>Start with <span style={{ textTransform: 'capitalize' }}>{props.data[0].name}</span> in few steps</h3>
          <p>Please Enter your mobile number and name to generate OTP</p>
        </div> */}

        {/* <div className="text-center" id="apply-banner">
          <img className="p-4" src={`/uploads/product_bank/${newProductName}_banner.webp`}

            alt=""
          />
        </div> */}

        <section className="inner-hero-banner hdfc_cr">
          <div className="main-container">
            <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="in-hero-content-box">
                      <div className="inner-text">
                        <div className ="hero-anime">
                        <img src="/images/debit-card.png" height="20" />
                        <p><span className="circle-h"></span> Explore Your Self</p>
                      </div>
                      <h2 className="in-banner-heading">
                        Get a Instant loan with <br /><b> {props.data[0].name}</b>
                      </h2>
                      <div className="pro-rating">
                        <div className="pro-rating-in"><StarRating data={props.data[0]} ratinginfo1={props.ratingg} /></div>
                      </div>

                      <div className="CardImg_box">
                        <img
                          src={`/uploads/prod_banimage/${newProductName}_img.webp`} alt=''
                          
                        />
                    </div>

                      <div className="play-btn inner-play-btn">
                        <a id="play-video" className="video-play-button" href="#" data-bs-toggle="modal"
                          data-bs-target="#how-to-play">
                          <span></span>
                        </a>
                        <span className="htp">How To Apply</span>
                      </div>
                    </div> 
                    </div>
                  </div>

                  {/* Otp Form section */}

                  <div className="col-md-6 col-sm-12">
                    <div className="hyno-forms">
                      <div className="form-wraps">
                        <div className="form-wraps-heading">
                              {(token == null) ?  
                              <>
                            <h5>Start with <b><span style={{ textTransform: 'capitalize' }}>{props.data[0].name}</span></b> in few steps</h5>
                            <p>Please Enter your mobile number and name to generate OTP</p></> : ''} 
                        </div>
                        

                        <div className="">
                          <div className="input-wrappers mb-3">
                            {!serversideStatus && <p className='form-error'>{serversidemsg}</p>}
                            {(token == '' || token == null) && <GenerateOtp setUtmForm={setUtmForm} utmData={props.form_schema.length != 0 ? props.form_schema[0].forms : ''} serversideStatus={serversideStatus} serversidemsg={serversidemsg} setServerSideStatus={setServerSideStatus} setServerSideMsg={setServerSideMsg} data={props.data[0]} setUserValues={setUserValues} setToken={setToken} />
                            }

                            {(token != null || token != undefined) && !utmForms && <form id="dynamicMyForm" onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }} >
                              {props.form_schema && props.form_schema.slice(step, step + 1).map((item, index) =>
                                <div key={index} className=" container">
                                  <h3>{item.section_name}</h3>
                                  <div className="row">
                                    {item.forms.map((elem, ind) => {
                                      <p key={ind}></p>
                                      paramName = elem.param_name.trim();
                                      (otpData[elem.global_name] !== undefined || elem.is_visible == false) ? '' : initialValues[elem.param_name] = '';
                                      dependency = elem.dependency.split(',').filter((a) => a);
                                      dependency_value = elem.dependency_value.split(',').filter((a) => a);
                                      flag = false;
                                      dependency.forEach((dependency_name, key) => {
                                        const dependency_exists_values = dependency_value[key].split('|').filter((a) => a == values[dependency_name]);
                                        if (dependency_exists_values.length === 0) {
                                          flag = true;
                                        }
                                      });
                                      return (
                                        <>
                                          <div key={ind} className={`col-lg-6 col-md-6 col-12 mt-2 ${flag ? 'd-none' : ''}`}>

                                            {(elem.type === 'text' || elem.type === 'number') && (elem.global_name === 'phone' || elem.global_name === 'first_name' || elem.global_name === 'last_name' || elem.global_name === 'full_name')
                                              ? <>
                                                <div className="d-none">{otpData[elem.global_name] != '' ? preassignValue[elem.param_name] = otpData[elem.global_name] : ''}</div>
                                                <TextField
                                                  fullWidth
                                                  inputProps={(elem.patterns != '') ? otpData[elem.global_name] != '' ? { value: otpData[elem.global_name], readOnly: true, } : { pattern: elem.patterns, title: "Please Fill Valid Data!" } : { value: otpData[elem.global_name] }}
                                                  required={elem.is_required}
                                                  className={`${elem.is_visible ? '' : 'd-none'}`}
                                                  name={elem.param_name}
                                                  label={elem.field_name}
                                                  type={elem.type}

                                                  onBlur={handleBlur}
                                                  error={touched[elem.param_name] && errors[elem.param_name] && true}
                                                  onChange={handleChange}
                                                />
                                                {errors[elem.param_name] && touched[elem.param_name] ? (
                                                  <p className="form-error">{errors[elem.param_name]}</p>
                                                ) : null}
                                              </>
                                              : ''
                                            }
                                            {elem.type === 'text' && elem.global_name === 'pan' &&
                                              <>
                                                <TextField
                                                  fullWidth
                                                  inputProps={elem.patterns != '' ? { pattern: "[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}", value: values.paramName, title: "Please Fill Valid Pan Card", style: { textTransform: "uppercase" } } : {}}
                                                  required={elem.is_required}
                                                  className={`${elem.is_visible ? '' : 'd-none'}`}
                                                  name={elem.param_name}
                                                  label={elem.field_name}
                                                  type={elem.type}
                                                  onChange={(e) => {
                                                    setFieldTouched(elem.param_name);
                                                    setFieldValue([e.target.name], e.target.value.toUpperCase())
                                                  }}
                                                  error={touched[elem.param_name] && errors[elem.param_name] && true}
                                                />
                                                {errors[elem.param_name] && touched[elem.param_name] ? (
                                                  <p className="form-error">{errors[elem.param_name]}</p>
                                                ) : null}
                                              </>
                                            }

                                            {elem.type == 'file' && <>
                                              <label className="form-label fw-bold">{elem.field_name}</label>
                                              <input
                                                accept={props.data && props.data[0].bank_product_id === 41 ? "image/png, image/jpeg, .pdf" : 'image/*,.pdf,.doc,.docx'}
                                                type="file"
                                                required={elem.is_required}
                                                name={elem.param_name}
                                                className={`mt-2 form-control shadow-none  ${elem.is_visible ? '' : 'd-none'}`}
                                                onChange={(event) => {
                                                  setFieldValue(elem.param_name, event.currentTarget.files[0]);
                                                }}
                                              />
                                            </>
                                            }

                                            {(elem.type === 'text' || elem.type === 'number' || elem.type === 'email') && elem.global_name != 'phone' && elem.global_name != 'first_name' && elem.global_name != 'last_name' && elem.global_name != 'full_name' && elem.global_name != 'pan'
                                              ? <><TextField
                                                fullWidth
                                                inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Data!" } : {}}
                                                required={elem.is_required}
                                                className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                                                name={elem.param_name}
                                                label={elem.field_name}
                                                id={elem.param_name}
                                                type={elem.type}
                                                error={touched[elem.param_name] && errors[elem.param_name] && true}
                                                onWheel={(e) => e.target.blur()}

                                                onChange={(e) => {
                                                  setFieldTouched(elem.param_name);
                                                  handleChange(e)
                                                }}
                                              />

                                              </>
                                              : ''
                                            }

                                            {elem.type == 'date' &&
                                              <>  <TextField
                                                fullWidth
                                                inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Data!" } : {}}
                                                required={elem.is_required}
                                                className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                                                name={elem.param_name}
                                                label={elem.field_name}
                                                id={elem.param_name}
                                                onFocus={(e) => (e.target.type = "date")}
                                                onBlur={(e) => (e.target.type = "text")}
                                                error={touched[elem.param_name] && errors[elem.param_name] && true}
                                                onChange={(e) => {
                                                  setFieldTouched(elem.param_name);
                                                  handleChange(e)
                                                }}
                                              />
                                              </>
                                            }
                                            {elem.type == 'select' && <SelectField {...elem} values={values} handleChange={handleChange} />}

                                            {elem.type == 'checkbox' && <FormControlLabel className={` ${elem.is_visible ? '' : 'd-none'}`} control={<Checkbox />} label={elem.field_name} required />}
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                  <div className="feature-four__top-btn-box">
                                    <button className="thm-btn feature-four__top-btn" type="submit" disabled={active} >Save & Next {active ? <i className="fa fa-spinner fa-spin"></i> : ''}</button>
                                  </div>
                                </div>
                              )}
                              {props.form_schema.length != 0 && props.form_schema.length == step ? <Thanks product={props.data[0].name} result={apiResponse} redirectUrl={redirectUrl} /> : ""}
                            </form>}
                            {(token != null || token != undefined) && props.form_schema.length == 0 ? <CustomApply product={props.data[0].name} /> : ''}

                            {(token != null || token != undefined) && props.form_schema.length != 0 && utmForms == true ? <UtmForm data={props.data[0]} token={token} utmData={props.form_schema.length != 0 ? props.form_schema[0].forms[0] : ''} /> : ''}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </section>



        <div className="fact-sectoin">
          <div className="container">
            <div className="what-heading">
              <img src="/images/icon/Cards-feature/Artboard 1 copy 23.png" />
              <span className="sub-heaidng" style={{ textTransform: 'capitalize' }}>{props.data[0].name}</span>
              <h2 className="">Here are a few <b>factors</b> about {props.data[0].name}</h2>
              <div className="wdr"></div>
              </div>
              <div className="table-responsive">
                <div className="loanStep__wrapper">
                  <div className="loanForm__Container">
                    {props.specification[0] &&
                      <div className="table-responsive" dangerouslySetInnerHTML={{ __html: props.specification[0].description }}></div>
                    }
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>




      <div className="fact-sectoin">
        <div className="main-description">
        
          <div dangerouslySetInnerHTML={{ __html: props.data[0].description }}></div>
         
        </div>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <LeaveQuestion />
            </div>
            <div className="col-md-6">

              {props.faq != '' ? <Faq faq={props.faq} /> : null}

            </div>


          </div>
        </div>
      </section>

      <section>
      <div className="modal video-model show" id="how-to-play">
            <div className="modal-dialog video-model-dialog">
              <div className="modal-content video-model-content">
          
                <div className="modal-header video-model-header">
                  <button type="button" className="btn-close thm-btn feature-four__top-btn" data-bs-dismiss="modal">X</button>
                </div>
          
                <div className="modal-body video-model-body">
                    <div className="box">
                         
                          <video id="testVideo" className="bg_video" controls playsinline>
                          <source src="https://ak8.picdn.net/shutterstock/videos/1023566578/preview/stock-footage-beautiful-sunrise-world-skyline-planet-earth-from-space-planet-earth-rotating-animation-clip.mp4" type="video/mp4" />
                          <div className="video_controls paused">
                            <button type="button" className="btn_play"  ></button>
                            <button type="button" className="btn_pause"  ></button>
                          </div>
                        </video>
                      </div>
                </div>
          
                 
          
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default apply

export function SelectField(props) {

  const { values, name, label, ParamOptions, handleChange, param_name, dependency, dependency_value, is_required } = props


  return (
    <>
      {/* {label && <label for={name}>{label}</label>} */}
      <FormControl variant="standard" className="" fullWidth>

        <InputLabel id="demo-simple-select-standard-label">{props.field_name}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          name={props.param_name}
          label={props.field_name}
          required={is_required}
          placeholder={props.field_name}
          value={values.param_name}
          onChange={(e) => {
            handleChange(e)
          }}
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

