
import Image from 'next/image'

function Partner(props) {
  return (
    <section class="partnerArea">
      <div class="container">
        <h2 class="heading text-center">Our partners</h2>
        <h3>from across the industry</h3>
        <ul>
          {props.partner && props.partner.map((item, index) =>
            <li><img src={'/uploads/partner/' + item.logo_path} layout='fill' /></li>
          )}
        </ul>
      </div>
    </section>
  )

}

export default Partner