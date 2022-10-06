import React from 'react';
import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
    useFormikContext,
    useField,
    useFormik
} from 'formik';
import Button from '@mui/material/Button';
export function Form(props) {
   console.log(props)
    return (
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation" novalidate="">
                {props.children}
            </FormikForm>
        </Formik>)
}

export function TextField(props) {
    const {label,name,type,options,...rest } = props
console.log(props)
    return (
        <>
        {label && <label for={name}>{label}</label>}
        <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <div>
            <input type={type}  {...field} />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
      </>
    )
}

export function SelectField(props) {
    const { name, label, options } = props
    return (
        <>
            {label && <label for={name}>{label}</label>}
            <Field
                as="select"
                id={name}
                // name={name}
            >
                <option value="" >Choose...</option>
                {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
            </Field>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function SubmitButton(props){
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    
    return (
        <Button variant="contained" type="submit"  {...rest} disabled={isSubmitting}>{title}</Button>
    )
}