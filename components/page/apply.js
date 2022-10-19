import axios from "axios";


const apply = ({ data, form_schema }) => {

  console.log("aaaaa " + form_schema)
  return (


    <div class="container">
      <section class="cardOffer_area">
        <div class="dealStep__leftArea">
          <div class="CardImg_box">
            {/* <img src="assets/images/axis-card.png" alt="" /> */}
          </div>
          <h2 style={{ textTransform: 'capitalize' }}>{data[0].name}</h2>

        </div>
        <div class="dealStep__wrapper">
          <div class="dealStep__Area">
            <h2 class="step_heading">Personal Details</h2>
            {form_schema.length}
            { form_schema.map((item, index) =>
              {item.section_name}
            )}
          </div>
        </div>
      </section>

      <div class="innerpage_bg">
        <section class="section_pad">
          <div class="container">
            <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
          </div>
        </section>
      </div>

    </div>

  )
}

export default apply