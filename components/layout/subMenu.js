import React from 'react'

const subMenu = (props) => {

 let data = props.data;
  const items = props.data.map((item) => (
    <li className=""><a tabIndex="-1" href="#">{item.post_title}</a></li>
  ))

  return (
    <>{items}</>
  )
}

export default subMenu