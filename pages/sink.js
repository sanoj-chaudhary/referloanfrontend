import { useRouter } from 'next/router'
import axios from 'axios';

function sink() {

  return (
    <div></div>
  )
}


export async function getServerSideProps(context)
{
  const res1  = await axios("https://testapi.referloan.in/api/categories");
  // sink to db

  const res2  = await axios("https://testapi.referloan.in/api/products");
  
  const res3  = await axios("https://testapi.referloan.in/api/banks");

}

export default sink