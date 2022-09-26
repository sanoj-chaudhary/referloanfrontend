import Link from 'next/link'

const subMenu = (props) => {
  const items = props.data.map((item, index) => (

    item.post_title != null
      ? (<li key={index} className=""><Link href={item.full_url}><a tabIndex="-1" >{item.post_title}</a></Link></li>)
      : null

  ))

  return (
    <>{items}</>
  )
}

export default subMenu