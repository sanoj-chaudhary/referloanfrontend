import Link from 'next/link'
import { useRouter } from 'next/router';
const subMenu = (props) => {
  const router = useRouter()
  let  utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if(!utm_campaign){
      utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  }else{
      utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }
  const items = props.data.map((item, index) => (
    item.id != null
      ? (<li key={index}><Link href={'/'+item.slug+utmData}><a tabIndex="-1" >{item.name}</a></Link></li>)
      : null

  ))

  return (
    <>{items}</>
  )
}

export default subMenu