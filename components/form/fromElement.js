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
//    console.log(props)
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
    const {placeholder,label,name,type,options,...rest } = props

    return (
        <>
       {label && <label for={name}>{label}</label>}
            <Field
                className="form-control"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder || ""} 
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
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
                className="form-control"
                // name={name}
            >
                <option value="" >Choose...</option>
                {options.map((optn, index) => <option value={optn.id} label={optn.name || optn.value} />)}
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