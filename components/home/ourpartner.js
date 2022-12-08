
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Partner(props) {
  const router = useRouter()
  let utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (!utm_campaign) {
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  } else {
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }

  return (
    <section className="partnerArea">
      <div className="container">
        <h2 className="heading text-center">Our partners from across the industry</h2>
        <ul>
          {props.partner && props.partner.map((item, index) =>
          (item.url != null) ?  
            <li key={index}><Link href={item.url + utmData}><a><Image src={'/uploads/partner/' + item.logo_path} height={100} width={249} alt={item.name} loading='lazy' /></a></Link></li>
       : <li key={index}><Image src={'/uploads/partner/' + item.logo_path} height={100} width={249} alt={item.name} loading='lazy' /></li> 
        )}
        </ul>
      </div>
    </section>
  )

}

export default Partner