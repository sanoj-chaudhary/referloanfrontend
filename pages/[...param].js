import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

function Router({ data }) {

  return (
    <div className='container'
      dangerouslySetInnerHTML={{ __html: data[0].post_content }}
    />
  )
}

export async function getServerSideProps(context) {

  const url = context.query.param[1].toString();
  const res = await axios.get('http://localhost:3000/api/page/' + url);
  const data = await res.data;
  
  return { props: { data } }
}

export default Router

