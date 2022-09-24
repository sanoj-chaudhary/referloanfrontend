import React from 'react'

const subMenu = (props) => {

 let data = props.data;
  const items = props.data.map((item) => (

    item.post_title != null
      ? (<li className=""><a tabIndex="-1" href="#">{item.post_title}</a></li>)
      : null
    
  ))

  return (
    <>{items}</>
  )
}

export default subMenu