import { db } from './../config/db'
import { useRouter } from 'next/router'
import axios from 'axios';

import ProductBankList from '../components/page/product_bank_list';
import ContentPage from '../components/page/content_page';
import Apply from '../components/page/apply';
import Error from '../components/page/error';

function contentPage({ url, Component, data, form_schema }) {
  //console.log(url)
  //console.log(Component)
  //console.log(data)
  //console.log(form_schema)
  const router = useRouter();
  return (
    <>
      {Component == 'ContentPage' && <ContentPage data={data} />}
      {Component == 'ProductBankList' && <ProductBankList url={url} data={data} />}
      {Component == 'Apply' && <Apply data={data} form_schema={form_schema} />}
      {Component == 'Error' && <Error data={data} />}
    </>
  )
}

export async function getServerSideProps(context) {

  let url = context.query.page;
  let p = context.query.p;
  let data;
  let Component = 'blank';
  let bank_product_id;
  let form;
  let form_schema = '1';

  url = url.join("/");
  console.log(p)

  const res = await db.query("SELECT * FROM `pages` WHERE `slug` =  '" + url + "' ");
  if (res.length != 0) {
    if (res[0].bank_product_id != null) {
      try {
        // bank_product_id = res[0].bank_product_id;
        form = await axios.get(`https://api.referloan.in/api/sections/form/3`);
        form_schema = form.data
      } catch (error) {
        console.log('eeeeee')
      }

      Component = 'Apply'
    }
    else {
      Component = 'ContentPage'
    }
  }
  else
  {
    if(p)
    {
      console.log(p)
      Component = 'ProductBankList'

    }
    else {
      Component = 'Error'
    }
  }


  data = JSON.parse(JSON.stringify(res))

  return { props: { url, Component, data,form_schema } }
}

export default contentPage

