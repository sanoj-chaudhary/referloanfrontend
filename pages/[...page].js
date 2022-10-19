import { db } from './../config/db'
import {useRouter} from 'next/router'
import Button from '@mui/material/Button';
import ProductBankList from '../components/page/product_bank_list';
import ContentPage from '../components/page/content_page';

function contentPage({ url, component, data }) {
console.log(url)
console.log(component)
console.log(data)

  const router = useRouter();
  if (data== "") {
    return <div className='error404'>
      <h2>Page Not Found</h2>
      <Button variant="contained" onClick={() => router.push('/')}>Back Home</Button>
    </div>
  } else {
    return (
      <>
        <ProductBankList data={data}  />
        <ContentPage data={data} />
      </>
    )
  }
}

export async function getServerSideProps(context) {

  let url = context.query.page;
  let data;
  let component = 'page';
  url = url.join("/");

  const res = await db.query("SELECT * FROM `pages` WHERE `slug` =  '" + url + "' ");
  if(res.length!=0)
  {   
    if(res[0].bank_product_id != null )
    {
        component = 'product_bank' // apply
    }
    
    data = JSON.parse(JSON.stringify(res))
  }
  else
  {
    data = "apply"
  }
  
  return { props: { url, component, data } }
}

export default contentPage

