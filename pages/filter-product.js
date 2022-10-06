import React, {useEffect} from 'react'
import axios from 'axios';
import { Link } from '@material-ui/core';
const Filterproduct = ({ product }) => {
 

console.log(product.data)
  
  return (
    <>
      <div className='productlistwrapper' >
      <ul>

      {Object.keys(product.data || {}).map((index, item) => {
                return (<li>
                  <a >{product.data[item]['bank_name']}</a>&nbsp;&nbsp;
                  <spna>{product.data[item]['fee']}</spna>&nbsp;&nbsp;
                  <spna>{product.data[item]['interest']}</spna>&nbsp;&nbsp;
              
                </li>);
              })}
      </ul>

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let formData = context.query;
  let result = await axios.post(`${process.env.APP_URL}/getcontentbysearch`, formData);
  let product = await result.data;
  return { props: { product } }
}

export default Filterproduct



