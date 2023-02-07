import * as Yup from 'yup' 
import Router from 'next/router';
export const makeUpperCase = (data,seprator) =>{
  const mySentence = data.trim();
  const productName = mySentence.split(" ");
  const newProductName = productName.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(seprator);
  return newProductName;
}

export const setCustomerAccessToken = async (token)=>{
  if (typeof window !== 'undefined') {
    localStorage.setItem("customertoken", JSON.stringify(token));
  }
}

export const getCustomerAccessToken = ()=>{
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem("customertoken")
  }
  return true
}

export const setAccessToken = async (token)=>{
  if (typeof window !== 'undefined') {
    localStorage.setItem("token", JSON.stringify(token));
  }
}


export const getAccessToken = ()=>{
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem("token")
  }
  return true
}

export const logoutUser =  () =>{
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem("customertoken");
    window.localStorage.removeItem("RfUser");
  }
  Router.push('/');
  return true
}


export const setUserProfile = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("RfUser", JSON.stringify(token));
  }
}
export const getUserProfile = (token) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem("RfUser")
  }
}

export const generateOtpSchema = Yup.object({
  full_name: Yup.string().min(2, 'Invalid name').required("Please enter your name "),
  phone_no: Yup.string().min(10, 'Invalid phone number').max(10, 'Invalid phone number').required("Please enter your phone number").matches(/^\+?[6-9][0-9]{1,10}$/, "Invalid phone number"),
});
export const verifyOtpSchema = Yup.object({
  otp: Yup.string().min(4, 'Invalid OTP').required("Please enter OTP "),
 
});

export const CustomApplyForm = Yup.object({
  title: Yup.string().min(2).required("Please select title"),
  full_name: Yup.string().min(2).required("Please enter your name "),
  phone_number: Yup.string().min(10).max(10).required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
  email: Yup.string().email().required('Please enter email'),
  gender: Yup.string().required('Please select gender'),
  marital_status: Yup.string().required('Please select marital status'),
  pan: Yup.string().min(10).max(10).required("Please fill the pan card").matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid Pancard"),
  residence_type: Yup.string().required('Please select residence type'),
  residence_pincode: Yup.string().min(6).max(6).required('Please enter pincode').matches(/^[0-9]+$/, "Must be only digits"),
  qualification: Yup.string().required('Please select residence type'),
  occupation: Yup.string().required('Please select occupation'),
});

export const signupSchema = Yup.object({
  full_name: Yup.string().min(2).required("Please enter your name "),
  phone_no: Yup.string().min(10).max(10).required("Please enter your phone number").matches(/^\+?[6-9][0-9]{1,10}$/, "Invalid phone number"),
  pancard: Yup.string().min(10).max(10).required("Please fill the pan card").matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid Pancard"),
  pincode: Yup.string().min(6).max(6).required('Please enter pincode').matches(/^[0-9]+$/, "Must be only digits"),
  dob: Yup.date().required('Please select date'),
});

