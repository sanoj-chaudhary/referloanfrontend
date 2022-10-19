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
        <div class="container">
          <section class="cardOffer_area">
            <div class="dealStep__leftArea">
              <div class="CardImg_box">
                {/* <img src="assets/images/axis-card.png" alt="" /> */}
              </div>
              <h2 style={{ textTransform: 'capitalize' }}>{props.data[0].name}</h2>

            </div>

            <div class="dealStep__wrapper">
              <div class="dealStep__Area">

                <form action="">

                  {props.form_schema && props.form_schema.map((item, index) =>

                    <div>
                      <h2 class="step_heading" key={item.step_id}>{item.section_name}</h2>
                      {item.forms.map((item1, index1) => <>
                        <div class="inputRow">
                          {/* {getFormElement(index1, item1)} */}

                          <label>{item1.field_name} {item1.is_required ? <span>*</span> : ""}</label>
                          {item1.type == 'text' ? "<input type='text' />" : ""}
                          {item1.type == 'number' ? 'number' : ""}
                          {item1.type == 'checkbox' ? 'checkbox' : ""}
                          {item1.type == 'select' ? 'select' : ""}
                        </div>
                      </>
                      )}
                      <button class="custom__btn">Save & Proceed</button>
                    </div>
                  )}

                </form>

              </div>
            </div>
          </section>

          <div class="innerpage_bg">
            <section class="section_pad">
              <div class="container">
                <div dangerouslySetInnerHTML={{ __html: props.data[0].description }}></div>
              </div>
            </section>
          </div>

        </div>
      </>
    )
  }



  export default apply