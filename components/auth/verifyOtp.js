import React, { useState } from 'react'
import { useFormik } from 'formik';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import axios from 'axios';
import Router from 'next/router'
import { setAccessToken,getAccessToken,setCustomerAccessToken } from './../../utils';

const verifyOtp = ({values,registerStatus=false, phone,modal,setModal}) => {

  const [active, setActive] = useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [otp, setOtp] = useState("");
  const [token,setToken] = useState(getAccessToken());

  const handleChange = (otp) => setOtp(otp);

  const verifyOtp = async ()=>{
    try {
     
      const data={
        phone_no:phone,otp
      }
     
      if (otp) {
        const res = await axios.post(`${process.env.APIHOST}/api/verify-mobile-otp`, data);
        if (res.data.status) {
       
          setCustomerAccessToken(res.data.token);
          if(registerStatus){
            try {
              const headers = {
                'Authorization': "Bearer " + res.data.token
              }
              const updateResponse = await axios.post(`${process.env.APIHOST}/api/customers/update-mobile-details`, values, { headers });
             
            } catch (error) {
              console.log("Message:", error.message) 
            }
          }
          
          setModal(false)
          Router.push('/');
        } else {
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
        }
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
    }
  }
  return (
    <Dialog open={modal?true:false}
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
          <div className='verifyOtp'>

            <DialogTitle id="responsive-dialog-title" className='px-0'>
            
            </DialogTitle>
            <span className='verifyOtpTitle'> Enter the OTP sent to &nbsp; <span className='fw-bold'>+91-{phone}</span></span>
            <div className="otpInputWrapper">

              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid grey",
                  borderRadius: "8px",
                  width: "54px",
                  height: "54px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue"
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none"
                }}
              />
               <button type='submit' onClick={verifyOtp} className="verifyBtn button mt-3 button--aylen button--round-l button--text-thick">Verify OTP</button>
              
            </div>

          </div>
        </div>

      </Box>
    </Dialog>


  )
}

export default verifyOtp