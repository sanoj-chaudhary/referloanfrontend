import Head from "next/head";
import { useState, useEffect } from "react";
import Loader from "./loader";
import Script from 'next/script';

const midcontent = ({ data, faq }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  });

  return (
    <>
      {loading && <Loader />}
      <div className="innerpage_bg">
        <section className="section_pad">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
            <div className="table_with_img_content">

              {faq != '' ? <div className="faqSetion" itemscope itemtype="https://schema.org/FAQPage">
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
                <h2>Have a question? We've got answers!</h2>
                <div className="faq_row">
                  <div
                    className="accordion accordion-flush faqAccordion "
                    id="accordionFlushExample"
                  >
                    {faq.map((item, key) => (
                      <div key={key} className="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h2 className="accordion-header" id={"flush-heading" + key} itemprop="name">
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
                          data-bs-parent="#accordionFlushExample" itemscope
                        >
                          <div className="accordion-body" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="faqImg">
                    <img src="/images/faq.png" alt="" />
                  </div>
                </div>
              </div> : ''}

              <Script type="application/ld+json">
                {`
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "1What is the return policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "<p>Most unopened items in new condition and returned within <b>90 days</b> will receive a refund or exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or in-store may be returned to any store.</p><p>Online purchases may be returned via a major parcel carrier. <a href=http://example.com/returns> Click here </a> to initiate a return.</p>"
        }
      }, {
        "@type": "Question",
        "name": "2How long does it take to process a refund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We will reimburse you for returned items in the same way you paid for them. For example, any amounts deducted from a gift card will be credited back to a gift card. For returns by mail, once we receive your return, we will process it within 4–5 business days. It may take up to 7 days after we process the return to reflect in your account, depending on your financial institution's processing time."
        }
      }, {
        "@type": "Question",
        "name": "3What is the policy for late/non-delivery of items ordered online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "<p>Our local teams work diligently to make sure that your order arrives on time, within our normaldelivery hours of 9AM to 8PM in the recipient's time zone. During  busy holiday periods like Christmas, Valentine's and Mother's Day, we may extend our delivery hours before 9AM and after 8PM to ensure that all gifts are delivered on time. If for any reason your gift does not arrive on time, our dedicated Customer Service agents will do everything they can to help successfully resolve your issue.</p><p><a href=https://example.com/orders/>Click here</a> to complete the form with your order-related question(s).</p>"
        }
      }, {
        "@type": "Question",
        "name": "4When will my credit card be charged?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We'll attempt to securely charge your credit card at the point of purchase online. If there's a problem, you'll be notified on the spot and prompted to use another card. Once we receive verification of sufficient funds, your payment will be completed and transferred securely to us. Your account will be charged in 24 to 48 hours."
        }
      }, {
        "@type": "Question",
        "name": "5Will I be charged sales tax for online orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":"Local and State sales tax will be collected if your recipient's mailing address is in: <ul><li>Arizona</li><li>California</li><li>Colorado</li></ul>"}
        }]
    `}
              </Script>


            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default midcontent;
