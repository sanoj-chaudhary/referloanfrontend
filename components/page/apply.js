import axios from "axios";
import { Form, TextField, SelectField, SubmitButton } from './../form/fromElement';
import { useFormik } from 'formik'  

  const apply = (props) => {

    const getFormElement = (elementName, elementSchema) => {
      const props = {
        name: elementSchema.name,
        label: elementSchema.label,
        options: elementSchema.options,
        type: elementSchema.type,
        placeholder: elementSchema.placeholder,
        elementName
      };
    
      if (elementSchema.type === "text" || elementSchema.type === "email") {
        return <TextField {...props} />
      }
    
      if (elementSchema.type === "select") {
        return <SelectField  {...props} />
      }
    }


    return (
      <>
        <div className="container">
          <section className="cardOffer_area">
            <div className="dealStep__leftArea">
              <div className="CardImg_box">
                {/* <img src="assets/images/axis-card.png" alt="" /> */}
              </div>
              <h2 style={{ textTransform: 'capitalize' }}>{props.data[0].name}</h2>

            </div>

            <div className="dealStep__wrapper">
              <div className="dealStep__Area">

                <form action="">

                  {props.form_schema && props.form_schema.map((item, index) =>

                    <div>
                      <h2 className="step_heading" key={item.step_id}>{item.section_name}</h2>
                      {item.forms.map((item1, index1) => <>
                        <div className="inputRow">
                          {/* {getFormElement(index1, item1)} */}

                          <label>{item1.field_name} {item1.is_required ? <span>*</span> : ""}</label>
                          {item1.type == 'text' ? "<input type='text' />" : ""}
                          {item1.type == 'number' ? 'number' : ""}
                          {item1.type == 'checkbox' ? 'checkbox' : ""}
                          {item1.type == 'select' ? 'select' : ""}
                        </div>
                      </>
                      )}
                      <button className="custom__btn">Save & Proceed</button>
                    </div>
                  )}

                </form>

              </div>
            </div>
          </section>

          <div className="innerpage_bg">
            <section className="section_pad">
              <div className="container">
                <div dangerouslySetInnerHTML={{ __html: props.data[0].description }}></div>
              </div>
            </section>
          </div>

        </div>
      </>
    )
  }



  export default apply