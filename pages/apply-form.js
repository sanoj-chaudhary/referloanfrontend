import React, {useEffect} from 'react'
import axios from 'axios';
import { Link } from '@material-ui/core';

const formData = ({ param }) => {
 
console.log(param.data)
  
  return (
    <>
      <div className='productlistwrapper' >

      {Object.keys(param.data || {}).map((index, item) => {
                return (<div>test{param.data[item]['section']}</div>);
              })}

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let formData = context.query;
  let result = await axios.post(`${process.env.APP_URL}/apistructurebyapiid`, formData);
  let param = await result.data;
  return { props: { param } }
}

export default formData



