
import { db } from './../config/db'
import Apply from './../components/page/apply';
import MidContent from './../components/page/midcontent';
import Head from 'next/head';
import {useRouter} from 'next/router'
import Button from '@mui/material/Button';
function contentPage({ url, data }) {
const router = useRouter();
  if (data.length == 0) {
    return <div className='error404'>
      <h2>Page Not Found</h2>
      <Button variant="contained" onClick={() => router.push('/')}>Back Home</Button>
    </div>
  } else {
    return (
      <>
        <Head>
          <title>{data[0].meta_title}</title>
          <meta name={'description'} content={data[0].meta_description} />
          <meta name={'keywords'} content={data[0].meta_keyword} />
        </Head>

        <div class="innerpage_bg">
          <section class="section_pad">
            <div class="container">

              {/* <h1 style={{textTransform: 'capitalize'}}>{data[0].name}</h1>
              <p></p> */}
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


}

export async function getServerSideProps(context) {

  let url = context.query.page;


  url = url.join("/");

  const res = await db.query("SELECT * FROM `pages` WHERE `slug` =  '" + url + "' ");

  const data = JSON.parse(JSON.stringify(res))
  return { props: { url, data } }
}

export default contentPage

