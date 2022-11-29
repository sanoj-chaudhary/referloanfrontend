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

export default function ResponsiveDialog({ open, setOpen, data, response }) {
    console.log(data);
    // console.log("response",response.forms[0])
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let initialValues = {}

    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
    useFormik({initialValues,
      validationSchema: '',
      onSubmit: async (values, actions) => {
        alert('product')
      },
    });
  
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
                          Fill  Basic information
                        </DialogTitle>
                        <form>
                          
                        </form>

                        <form>
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



                            </>
                        ))}

                        <div className="search-button"><button className="mt-4" type="submit" >Submit</button></div>
                        </form>
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
        <FormControl variant="standard" className="" fullWidth>
  
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