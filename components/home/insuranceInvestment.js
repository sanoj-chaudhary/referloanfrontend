import Image from "next/image"

const insuranceInvestment = () => {
  return (
      <section className="investment_section">
      <div className="container">
        <div className="cardAndLoan_section">
          <div className="heading__with__border">
            <h2>INSURANCE & INVESTMENT</h2>
          </div>
          <div className="row">

            <div className="col-sm-12 col-md-12 col-xl-12 loan_card_pnl">
              <ul >

                <li>
                  <a href="">
                    <img src="/images/health-icon.png" alt="" />
                    <h3>Health Insurance </h3>
                    <p>Protect Yourself & your family
                      against health expenses </p>
                    <a href="#" className="more"><span className="material-icons">east</span></a>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src={'/images/life-icon.png'} alt="" />
                    <h3>Life Insurance </h3>
                    <p>Get insurance for your loved
                      ones & secure their future</p>
                    <a href="#" className="more"><span className="material-icons">east</span></a>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src={"/images/guaranteed-icon.png"} alt="" />
                    <h3>Guaranteed Return Plan </h3>
                    <p>Get guaranteed returns along
                      with life cover </p>
                    <a href="#" className="more"><span className="material-icons">east</span></a>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src="/images/mutual-icon.png" alt="" />
                    <h3>Direct Mutual Funds</h3>
                    <p>Get higher returns on your
                      Mutual Fund investments </p>
                    <a href="#" className="more"><span className="material-icons">east</span></a>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default insuranceInvestment