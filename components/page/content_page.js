import Head from "next/head";
import { useState, useEffect } from "react";
import Loader from "./loader";

const midcontent = ({ data, faq }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  });

  return (
    <>
      <Head>
        <title>{data[0].meta_title}</title>
        <meta name={"description"} content={data[0].meta_description} />
        <meta name={"keywords"} content={data[0].meta_keyword} />
      </Head>
      {loading && <Loader />}
      <div className="innerpage_bg">
        <section className="section_pad">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
            <div class="table_with_img_content">

              <div className="faqSetion">
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
                <h2>Have a question? We've got answers!</h2>
                <div className="faq_row">
                  <div
                    className="accordion accordion-flush faqAccordion "
                    id="accordionFlushExample"
                  >
                    {faq.map((item, key) => (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id={"flush-heading" + key}>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#flush-collapse" + key}
                            aria-expanded="false"
                            aria-controls={"flush-collapse" + key}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={"flush-collapse" + key}
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="faqImg">
                    <img src="/images/faq.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default midcontent;
