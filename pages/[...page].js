import { db } from './../config/db'
import {useRouter} from 'next/router'


import ProductBankList from '../components/page/product_bank_list';
import ContentPage from '../components/page/content_page';
import Apply from '../components/page/apply';
import Error from '../components/page/error';

function contentPage({ url, Component, data }) {
console.log(url)
console.log(Component)
console.log(data)

  const router = useRouter();
    return (
      <>
      {Component=='ContentPage' && <ContentPage data={data} />}
      {Component=='ProductBankList' && <ProductBankList data={data} />}
      {Component=='Apply' && <Apply data={data} />}
      {Component=='Error' && <Error data={data} />}
      </>
    )
}

export async function getServerSideProps(context) {

  let url    = context.query.page;
  let banklist = context.query.banklist;
  let data;
  let Component = 'blank';
  url = url.join("/");
  console.log(banklist)
  const res = await db.query("SELECT * FROM `pages` WHERE `slug` =  '" + url + "' ");
  if(res.length!=0)
  {   
    if(res[0].bank_product_id != null )
    {
      Component = 'Apply'
    }
    else
    {
      Component = 'ContentPage'
    }
  }
  else
  {
    if(banklist)
    {
      Component = 'ProductBankList'
    }
    else
    {
      Component = 'Error'
    } 
  }

  data = JSON.parse(JSON.stringify(res))
  
  return { props: { url, Component, data } }
}

export default contentPage

