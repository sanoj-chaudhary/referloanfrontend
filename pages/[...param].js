import axios from 'axios';
import { useEffect } from 'react';
import Error from "./error";
function contentPage({ data }) {
 
  if(data.length == 0){
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
   
  const res = await axios.get(`${process.env.APP_URL}/page/${url}`);
  const data = await res.data;
  return { props: { data } }
}

export default contentPage

