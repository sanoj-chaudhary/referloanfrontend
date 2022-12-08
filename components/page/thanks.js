import { useRouter } from 'next/router';
import Link from 'next/link'
const Thanks = ({product,result}) => {
  const router = useRouter()
   let utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if (!utm_campaign) {
        utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
    } else {
        utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
    }

   
  const random = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000 ;
  return (
    <>

    <div class="jumbotron text-center">
  <h1 class="display-3">Thank You!</h1>
  <p class="lead">Apply successfully for <span style={{ textTransform: 'capitalize' }}>{product}</span></p>

  {result != 'custom' && <div className="fw-bold">Your reference number : {!result?random:result} </div> }

  <hr />
  
  <p>
  
Our team will contact you soon!
  </p>
  <p class="lead">
    <Link href={'/' +utmData}><a class="btn btn-bg "  role="button">Continue to homepage</a></Link>
  </p>
</div>
    
    
   
    </>
    
  )
}

export default Thanks