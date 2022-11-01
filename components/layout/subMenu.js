import Link from 'next/link'

const subMenu = (props) => {
  const items = props.data.map((item, index) => (

    item.id != null
      ? (<li key={index}><Link href={'/'+item.slug+process.env.UTM}><a tabIndex="-1" >{item.name}</a></Link></li>)
      : null

  ))

  return (
    <>{items}</>
  )
}

export default subMenu