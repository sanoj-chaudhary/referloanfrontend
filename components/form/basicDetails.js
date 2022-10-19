import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from '@material-ui/core/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';

const formSchema = {
  name: {
    type: "text",
    label: "Name",
    required: true
  },
  email: {
    type: "email",
    label: "Email",
    required: true
  },
  role: {
    type: "select",
    label: "Role",
    required: true,
    options: [
      {
        label: "Admin",
        value: "admin"
      },
      {
        label: "User",
        value: "user"
      }
    ]
  }
}

const PANCARD_NAME_REGEX = '[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}';
const REQUIRED_ERROR_MESSAGE = "Required Field";
const TOO_SMALL_ERROR_MESSAGE =
  "Pancard must be 10 character";
const INVALID_FORMAT_ERROR_MESSAGE =
  "Invalid Pancard";
// Using custom test method
function isValidPancard(message) {
  return this.test("isValidPancard", message, function (value) {
    const { path, createError } = this;

    if (!value) {
      return createError({ path, message: message ?? REQUIRED_ERROR_MESSAGE });
    }

    if (value.length < 10) {
      return createError({ path, message: message ?? TOO_SMALL_ERROR_MESSAGE });
    }

    if (!value.match(PANCARD_NAME_REGEX)) {
      return createError({
        path,
        message: message ?? INVALID_FORMAT_ERROR_MESSAGE
      });
    }

    return true;
  });
}

Yup.addMethod(Yup.mixed, "isValidPancard", isValidPancard);

const BasicDetails = () => {
  const signupSchema = Yup.object({
    name: Yup.string().min(2).required("Please enter your name "),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string().min(10).max(10),
    gender: Yup.string().required(),
    dob: Yup.date().required(),
    pincode: Yup.string().required().min(6).max(6),
    panNumber: Yup.mixed().isValidPancard(),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    pincode: "",
    panNumber: "",
    age: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      
      onSubmit: showPopup(values),
    });
    console.log(values)
  return (
    <div className='container mb-5'>
      <div className='row mt-4'>
        <div className='col-md-3'>
          <TextField
            fullWidth
            id="name"
            name="fullName"
            label="Name"
            value={values.fullName}
            onChange={handleChange}
            error={touched.fullName && Boolean(errors.fullName)}
            helperText={touched.fullName && errors.fullName}
          />
        </div>

        <div className='col-md-3'>
          <TextField fullWidth
            label="Email"
            name="email"
            type='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.email}
          />
        </div>

        <div className='col-md-3'>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        
      </RadioGroup>
    </FormControl>
        </div>


        <div className='col-md-3'>
          <TextField
          fullWidth
            label="Date Of Birth"
            name="dob"
            type='text'
            value={values.dob}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={handleChange}
            errors={errors.dob} />
        </div>
        <div className='col-md-3'>
          <TextField fullWidth
            label="Pincode"
            name="pincode"
            type='number'
            value={values.pincode}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.pincode} />
        </div>
        <div className='col-md-3'>
          <TextField fullWidth
            label="Pan Number"
            name="panNumber"
            type='text'
            value={values.panNumber.toUpperCase()}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.panNumber} />
        </div>
        <div className='col-md-3'>
          <FormControl variant="standard" fullWidth>

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
          </FormControl>

        </div>
      </div>

    </div>
  )
}

export default BasicDetails