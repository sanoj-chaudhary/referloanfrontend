import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import { useFormik } from "formik";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import * as Yup from "yup";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormElement from '../home/formElement';
import axios from 'axios';
import { useRouter } from 'next/router';
export default function ResponsiveDialog({ open, setOpen, data, response }) {
  const router = useRouter()
  const [product, setProduct] = useState([])
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const signupSchema = Yup.object({
    pincode: Yup.string().min(6,'Invalid pincode').max(6,'Invalid pincode'),
  });

  let initialValues = {}

  if (!response) {
    initialValues.product_id = '',
      initialValues.employed_type = '',
      initialValues.salary = '',
      initialValues.pincode = ''
  }


  const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: async (values, actions) => {
        searchProduct(e)
      },
    });

  const getprodcutName = async () => {
    try {
      const res = await axios.get(`${process.env.APP_URL}/get_product_bycatid/`+data.categories_id);
      
      setProduct(res.data)
    } catch (error) {

      console.log("message", error.message);
    }
  }

  const searchProduct = async (e) => {
    e.preventDefault()
 
    let hit;
    try {
      if (values.employed_type == 'Salaried') {
        hit = values.product_id + '/salary/' + values.salary + '/pincode/' + values.pincode + '?ref=web';
       
      }
      else {
        hit = values.product_id + '/turnover/' + values.tenure + '/pincode/' + values.pincode + '?ref=web';
      }
      router.push(hit)
    }

    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getprodcutName()
  }, [])


  return (
    <Dialog onClose={() => setOpen(false)} open={open}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      hideBackdrop
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "80%",
            maxWidth: "500px",  // Set your width here
          },
        },
      }}>
      <Box className="dialogwrapper"  >

        <div className='rightContent' >
          <div className='register'>

            <DialogTitle id="responsive-dialog-title" className='px-0'>
              Fill  Basic Information Form
            </DialogTitle>

            {!response &&
              <form onSubmit={searchProduct}>

                <FormControl variant="standard" className="loanType" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Product name</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    name='product_id'
                    label="Type of Loan"
                    required
                    value={values.product_id}
                    onChange={(e) => { 
                      handleChange(e)
                    }}
                  >
                    {product.map((optn, ind) => (
                      <MenuItem key={optn.slug} value={optn.slug
                      }>
                        <em>{optn.name}</em>
                      </MenuItem>
                    ))}

                  </Select>
                </FormControl>
                <FormControl variant="standard" className="loanType" fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Profession Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    name='employed_type'
                    label="Profession Type"
                    required
                    value={values.employed_type}
                    placeholder="Profession Type"
                    onChange={(e) => {
                      handleChange(e)
                    }}
                  >
                    
                    <MenuItem value="Salaried">
                      <em>Salaried</em>
                    </MenuItem>
                    <MenuItem value="Self employed">
                      <em>Self employed</em>
                    </MenuItem>


                  </Select>
                </FormControl>
                
                {values.employed_type === "Salaried" ?<TextField         // Add a Conditions
                  fullWidth
                  label="Monthly Income "
                  variant="standard"
                  type="number"
                  autoComplete="off"
                  name="salary"
                  id="salary"
                  placeholder="Monthly income"
                  value={values.salary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />:<TextField
                fullWidth
                label="Turn Over "
                variant="standard"
                type="number"
                autoComplete="off"
                name="turnover"
                id="turnover"
                placeholder="Turn Over"
                value={values.turnover}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />}
                <TextField
                  fullWidth
                  label="Pincode"
                  variant="standard"
                  type="number"
                  autoComplete="off"
                  name="pincode"
                  id="pincode"
                  placeholder="Fill your Pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  pattern="[0-9]{6}" 
                  title="Five digit zip code"
                  required
                />
                {errors.pincode && <p style={{ color: 'red', fontSize:'12px' }}>{errors.pincode}</p>}
                <div className="search-button"><button className="mt-4" type="submit" >Continue</button></div>
              </form>}


              {response &&
              <form onSubmit={searchProduct}>
              {response && response.forms.map((elem, key) => (
                <>
                  {(elem.type === 'text' || elem.type === 'number' || elem.type === 'email')
                    && <><TextField
                      fullWidth
                      inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Data!" } : {}}
                      required={elem.is_required}
                      className={`mt-4 ${elem.is_visible ? '' : 'd-none'}`}
                      name={elem.param_name}
                      label={elem.field_name}
                      id={elem.param_name}
                      type={elem.type}
                      error={touched[elem.param_name] && errors[elem.param_name] && true}
                      onWheel={(e) => e.target.blur()}
                      variant="standard"
                      onChange={(e) => {
                        setFieldTouched(elem.param_name);
                        handleChange(e)
                      }}
                    />
                      {errors[elem.param_name] && touched[elem.param_name] ? (
                        <p className="form-error">{errors[elem.param_name]}</p>
                      ) : null}

                    </>

                  }

                  {elem.type == 'select' && <SelectField {...elem} values={values} handleChange={handleChange} />}


                  <div className="search-button"><button className="mt-4" type="submit" >Submit</button></div>
                </>
              ))}


            </form>}
          </div>

        </div>

      </Box>
    </Dialog>
  );

}


export function SelectField(props) {

  const { values, name, label, ParamOptions, handleChange, param_name, dependency, dependency_value } = props


  return (
    <>
      {/* {label && <label for={name}>{label}</label>} */}
      <FormControl variant="standard" className="loanType" fullWidth>

        <InputLabel id="demo-simple-select-standard-label">{props.field_name}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"

          name={props.param_name}
          label={props.field_name}
          required


          placeholder={props.field_name}
          value={values.param_name}
          onChange={(e) => {
            handleChange(e)
          }}
        >
          {ParamOptions.map((optn, ind) => (
            <MenuItem key={optn.value} value={optn.value
            }>
              <em>{optn.name}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )




}