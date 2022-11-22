import { db } from './../config/db'
import { useRouter } from 'next/router'
import axios from 'axios';

import ProductBankList from '../components/page/product_bank_list';
import ContentPage from '../components/page/content_page';
import Apply from '../components/page/apply';
import Error from '../components/page/error';

function contentPage({ url, refer, Component, data, form_schema, specification, faq,ratingg }) {

  const router = useRouter();
  return (
    <>
      {Component == 'ContentPage' && <ContentPage data={data} faq={faq} />}
      {Component == 'ProductBankList' && <ProductBankList url={url} refer={refer} data={data} />}
      {Component == 'Apply' && <Apply data={data} form_schema={form_schema} specification={specification} faq={faq} ratingg={ratingg} />}
      {Component == 'Error' && <Error data={data} />}
    </>
  )
}

export async function getServerSideProps(context) {

  let url = context.query.page;
  let ref = context.query.ref;
  let refer = ''
  let data;
  let Component = 'blank';

  // Content Page
  let content_response;
  let faq = [];

  // Apply Page
  let apply_response;
  let specification = [];
  let rating_response;
  let ratingg = 1;

  // Product Bank Page
  let bank_product_id;
  let form;
  let form_schema = [];


  url = url.join("/");
  console.log(ref)

  const res = await db.query("SELECT * FROM `pages` WHERE `slug` =  '" + url + "' ");
  if (res.length != 0) {
    bank_product_id = res[0].bank_product_id;
    if (bank_product_id != null) {
      try {
        form = await axios.get(`https://api.referloan.in/api/sections/form/` + bank_product_id);
        form_schema = form.data

        apply_response = await db.query("SELECT * FROM `product_bank_specifications` WHERE product_bank_specifications.bank_product_id =  '" + bank_product_id + "' ");
       
        if(apply_response)
        {
          specification = JSON.parse(JSON.stringify(apply_response))
        }

        content_response = await db.query("SELECT * FROM `faqs` WHERE faqs.page_id =  '" + res[0].id + "' ORDER BY `order` ");
        
        if(content_response)
        {
           faq = JSON.parse(JSON.stringify(content_response))
        }

        rating_response = await db.query(" SELECT * FROM `view_rating` WHERE `bank_product_id` = '"+bank_product_id +"'  ");
        
        if(rating_response)
        {
           ratingg = JSON.parse(JSON.stringify(rating_response))
        }


      } catch (error) {
        console.log('bank product id missing - can not call apply page')
      }

      Component = 'Apply'
    }
    else {

      try {
         content_response = await db.query("SELECT * FROM `faqs` WHERE faqs.page_id =  '" + res[0].id + "' ORDER BY `order` ");
        
         if(content_response)
         {
           faq = JSON.parse(JSON.stringify(content_response))
         }

      }
      catch (error) {
        console.log('page id missing - can not call content page')
      }


      Component = 'ContentPage'
    }
  }
  else {
    if (ref) {
      console.log(ref)
      refer = ref
      Component = 'ProductBankList'

    }
    else {
      Component = 'Error'
    }
  }


  data = JSON.parse(JSON.stringify(res))

  return { props: { url, refer, Component, data, form_schema, specification, faq,ratingg } }
}

export default contentPage

