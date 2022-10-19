import Head from 'next/head';

const midcontent = ({data}) => {

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

            <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
            
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

export default midcontent