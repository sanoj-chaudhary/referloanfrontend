import axios from 'axios';
import { useEffect } from 'react';
import Error from "./error";
import { db } from './../config/db'
function contentPage({ data }) {
  if(data == 0){
   return Error(404);
  }else{
    return (
      <div className='container'
        dangerouslySetInnerHTML={{ __html: data[0].post_content }}
      />
    )
  }
}

export async function getServerSideProps(context) {
  let url;
if(context.query.param[1]){
  url = context.query.param[1].toString();
}else{
  url = context.query.param.toString();
}
const res = await db.query("SELECT description FROM `pages` WHERE `slug` = '" + url + "' ");
  const data = JSON.parse(JSON.stringify(res))
  return { props: { data } }
}

export default contentPage

