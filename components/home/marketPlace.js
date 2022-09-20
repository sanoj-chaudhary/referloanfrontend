
const marketPlace = () => {
  return (
      <section className="referSection">
      <div className="container">
        <h2 className="headingBlue">Refer Loan is India’s largest digital marketplace for loans & credit cards </h2>
        <div className="feature_area">
          <div className="feature_box">
            <div className="icon-box">
              <img src="/images/choise-icon.png" alt="" />
            </div>
            <div className="content_box">
              <h3>Wide Choice</h3>
              <p>We work with 110+ partners, including India’s largest banks, NBFCs and Fintechs, to offer you over 100 financial products</p>
            </div>
          </div>
          {/* <!-- next --> */}
          <div className="feature_box">
            <div className="icon-box">
              <img src="/images/trust-icon.png" alt="" />
            </div>
            <div className="content_box">
              <h3>Highly Trusted</h3>
              <p>Since our inception in 2020, we have earned the trust and goodwill of over 1 million happy customers</p>
            </div>
          </div>
          {/* <!-- next --> */}
          <div className="feature_box">
            <div className="icon-box">
              <img src="/images/safe-icon.png" alt="" />
            </div>
            <div className="content_box">
              <h3>Safe & Secure</h3>
              <p>Your data is completely safe with us. We have built industry-best controls to keep your information</p>
            </div>
          </div>
          {/* <!-- next --> */}
        </div>
      </div>
    </section>
  )
}

export default marketPlace