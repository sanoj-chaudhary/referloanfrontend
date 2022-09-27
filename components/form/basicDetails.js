import InputField from './InputField'
import { useFormik } from "formik";
import * as Yup from "yup";

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
    panNumber:Yup.mixed().isValidPancard(),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    pincode: "",
    panNumber: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        
        action.resetForm();
      },
    });

  return (
    <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-3'>
            <InputField
              label="Full Name"
              name="fullName"
              type='text'
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className='col-md-3'>
            <InputField
              label="Phone Number"
              name="phone"
              type='number'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.phone}
            />
          </div>
          <div className='col-md-3'>
            <InputField
              label="Email"
              name="email"
              type='email'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.phone}
            />
          </div>

          <div className='col-md-3'>
            <label>Gender</label><br />
            <div class="form-check form-check-inline">
              <input class="form-check-input" checked type="radio" name="gender" id="inlineRadio1" value="male" />
              <label class="form-check-label" htmlFor="gender">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio"  name="gender" id="inlineRadio2" value="female" />
              <label class="form-check-label" htmlFor="gender">Female</label>
            </div>
          </div>


          <div className='col-md-3'>
            <InputField
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
            <InputField
              label="Pincode"
              name="pincode"
              type='number'
              value={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.pincode} />
          </div>
          <div className='col-md-3'>
            <InputField
              label="Pan Number"
              name="panNumber"
              type='text'
              value={values.panNumber.toUpperCase()}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.panNumber} />
          </div>
        </div>
    
    </div>
  )
}

export default BasicDetails