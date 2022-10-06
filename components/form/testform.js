import React, { useState, useEffect } from 'react';
import { Form, TextField, SelectField, SubmitButton } from './fromElement';
import * as Yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik'

// const formSchema = {
//     name: {
//         type: "text",
//         label: "Name",
//         required: true
//     },
//     email: {
//         type: "email",
//         label: "Email",
//         required: true
//     },
//     role: {
//         type: "select",
//         label: "Role",
//         required: true,
//         options: [
//             {
//                 label: "Admin",
//                 value: "admin"
//             },
//             {
//                 label: "User",
//                 value: "user"
//             }
//         ]
//     }
// }
const formSchema = {
  "status": true,
  "section":
  {
    "step1": {
      "column": {
        "column1": {
          "field_name": "First Name",
          "name": "first_name",
          "label": "First Name",
          "is_required": true,
          "is_visible": "1",
          "type": "text",
          "is_header": false,
          "pattern": "/[^a-zA-Z ]/g",
          'options': ""
        },
        "column2": {
          "label": "Last Name",
          "field_name": "Last Name",
          "name": "last_name",
          "is_required": false,
          "is_visible": true,
          "type": "text",
          "is_header": false,
          "pattern": "/[^a-zA-Z ]/g",
          'options': ""
        },
        "column3": {
          "label": "Email Id",
          "name": "email",
          "is_required": true,
          "is_visible": true,
          "type": "text",
          "is_header": false,
          "pattern": "",
          'options': ""
        },
        "column4": {
          "label": "Phone No",
          "name": "phone",
          "is_required": true,
          "is_visible": true,
          "type": "text",
          "is_header": false,
          "pattern": "/[^0-9]/g",
          'options': ""
        }
      },
      "url": "http://127.0.0.1:3000/api/getdatabyapiid1"
    },
    "step2": {
      "column": {
        "column1": {
          "field_name": "Company Name",
          "name": "company_name",
          "is_required": true,
          "is_visible": true,
          "type": "text",
          "is_header": false,
          "pattern": "/[^a-zA-Z]/g",
          'options': ""
        },
        "column2": {
          "field_name": "Address",
          "name": "address",
          "is_required": true,
          "is_visible": true,
          "type": "textarea",
          "is_header": false,
          "pattern": "/[^A-Za-z0-9 ().,-]/g",
          'options': ""
        },
        "column3": {
          "field_name": "State",
          "name": "state",
          "is_required": true,
          "is_visible": true,
          "type": "select",
          "is_header": false,
          "pattern": "",
          'options': {
            "0": {
              "id": "1",
              "name": "Raj"
            },
            "1": {
              "id": "2",
              "name": "Pan"
            }
          }
        }
      },
      "url": "http://127.0.0.1:3000/api/getdatabyapiid2"
    },
    "step3": {
      "column": {
        "column1": {
          "field_name": "Salary",
          "name": "salary",
          "is_required": true,
          "is_visible": true,
          "type": "text",
          "is_header": false,
          "pattern": "/[^0-9]/g",
          'options': ""
        },
        "column2": {
          "field_name": "Loan Amount",
          "name": "loan_amt",
          "is_required": true,
          "is_visible": true,
          "type": "text",
          "is_header": false,
          "pattern": "/[^0-9]/g",
          'options': ""
        }
      },
      "url": "http://127.0.0.1:3000/api/getdatabyapiid3"
    }
  }
};
function testForm(props) {
  console.log("data:" + props.data);
  const [formData, setFormData] = useState({});
  const [validationSchema, setValidationSchema] = useState({});

  useEffect(() => {
    initForm(formSchema);
  }, []);

  const initForm = (formSchema) => {
    let _formData = {};
    let _validationSchema = {};

    for (var key of Object.keys(formSchema.section.step1.column)) {
      _formData[key] = "";

      if (formSchema.section.step1.column[key].type === "text") {
        _validationSchema[key] = Yup.string();
      } else if (formSchema.section.step1.column[key].type === "email") {
        _validationSchema[key] = Yup.string().email()
      } else if (formSchema.section.step1.column[key].type === "select") {
        _validationSchema[key] = Yup.string().oneOf(formSchema.section.step1.column[key].options.map(o => o.value));
      }

      if (formSchema.section.step1.column[key].required) {
        _validationSchema[key] = _validationSchema[key].required('Required');
      }
    }

    setFormData(_formData);
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
  }

  const getFormElement = (elementName, elementSchema) => {
    const props = {
      name: elementSchema.name,
      label: elementSchema.label,
      options: elementSchema.options,
      type: elementSchema.type
    };

    if (elementSchema.type === "text" || elementSchema.type === "email") {
      return <TextField {...props} />
    }

    if (elementSchema.type === "select") {
      return <SelectField  {...props} />
    }

  }

  // const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
  //     console.log(values);
  //     setSubmitting(false);
  // }
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000)
  };
  return (
    <div>
      <Form
        enableReinitialize
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}

      >

        {Object.keys(formSchema.section.step1.column).map((key, ind) => (
          <div key={key}>
            {getFormElement(key, formSchema.section.step1.column[key])}
          </div>
        ))}
        <SubmitButton title="Submit" />
      </Form>
    </div>
  );
}




export default testForm;