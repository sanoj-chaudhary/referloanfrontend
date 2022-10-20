import Head from 'next/head';

const midcontent = ({data}) => {

  return (
    <>
      <Head>
        <title>{data[0].meta_title}</title>
        <meta name={'description'} content={data[0].meta_description} />
        <meta name={'keywords'} content={data[0].meta_keyword} />
      </Head>

      <div className="innerpage_bg">
        <section className="section_pad">
          <div className="container">

            <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
            
            <div className="faqSetion">
              <h3>FREQUENTLY ASKED QUESTIONS</h3>
              <h2>Have a question? We've got answers!</h2>
              <div className="faq_row">
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