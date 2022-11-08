
import Image from 'next/image'

function Partner(props) {
  return (
    <section className="partnerArea">
      <div className="container">
        <h2 className="heading text-center">Our partners from across the industry</h2>
       
        <ul>
          {props.partner && props.partner.map((item, index) =>
            <li key={index}><Image src={'/uploads/partner/' + item.logo_path} height={100} width={249} alt={item.name} loading='lazy' /></li>
          )}
        </ul>
      </div>
    </section>
  )

}

export default Partner