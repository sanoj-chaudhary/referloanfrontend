import Link from 'next/link'

const subMenu = (props) => {

 let data = props.data;
  const items = props.data.map((item) => (

    item.post_title != null
      ? (<li className=""><Link href={item.full_url}><a tabIndex="-1" >{item.post_title}</a></Link></li>)
      : null
    
  ))

  return (
    <>{items}</>
  )
}

export default subMenu