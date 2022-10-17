import axios from 'axios';
import { useEffect } from 'react';
import Error from "./error";
import { db } from './../config/db'
import Apply from './../components/page/apply';
import MidContent from './../components/page/midcontent';
import Head from 'next/head';

function contentPage({ data }) {
  return (
    <>
      <Head>
        <title>{data[0].meta_title}</title>
        <meta name={ 'description' } content={data[0].meta_description} />
        <meta name={ 'keywords' } content={data[0].meta_keyword} />
      </Head>
      
      <Apply />
      <div class="innerpage_bg">
        <section class="section_pad">
          <div class="container">

            <h1>{data[0].name}</h1>
            <p></p>
            <MidContent midcontent={data[0].description} />

            <div class="faqSetion">
              <h3>FREQUENTLY ASKED QUESTIONS</h3>
              <h2>Have a question? We've got answers!</h2>
              <div class="faq_row">
                {/* FAQ List */}
              </div>
            </div>
          </div>
        </section>



      </div>
    </>

  )
}

export async function getServerSideProps(context) {

  let url = context.query.page;

  const res = await db.query("SELECT * FROM `pages` WHERE `slug` = '" + url + "' ");
  const data = JSON.parse(JSON.stringify(res))
  return { props: { data } }
}

export default contentPage

