
import Image from 'next/image'

function Partner(props) {
  return (
    <section className="partnerArea">
      <div className="container">
        <h2 className="heading text-center">Our partners from across the industry</h2>
       
        <ul>
          {props.partner && props.partner.map((item, index) =>
            <li key={index}><img src={'/uploads/partner/' + item.logo_path} layout='fill' /></li>
          )}
        </ul>
      </div>
    </section>
  )

}

export default Partner