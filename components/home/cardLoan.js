import Image from "next/image"
import ccicon from './../../public/images/cc-icon.png'
import plicon from './../../public/images/pl-icon.png'
import mlicon from './../../public/images/ml-icon.png'
import blicon from './../../public/images/bl-icon.png'
import elicon from './../../public/images/el-icon.png'
import glicon from './../../public/images/gl-icon.png'
import lapicon from './../../public/images/lap-icon.png'
import hlicon from './../../public/images/hl-icon.png'
const cardLoan = () => {
  return (
    <section className="cardAndLoan_section">
      <div className="container">
        <div className="heading__with__border">
          <h2>CARDS & LOANS</h2>
        </div>
        {/* <!-- flip Card Section --> */}
        <div className="flip-card-container">
          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={ccicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Credit Cards</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={ccicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Credit Cards</h3>
                  </div>
                  <div className="action-box">
                    <p>From 35+ options, you can choose a card that matches your needs and lifestyle. Now
                      spend and get rewards in return. </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- Next --> */}
          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={plicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Personal Loan</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={plicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Personal Loan</h3>
                  </div>
                  <div className="action-box">
                    <p>No need to put your dreams on hold. With our personal loan with the lowest interest
                      rate, it’s all possible </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- Next --> */}
          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={mlicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Micro Loans</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={mlicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Micro Loans</h3>
                  </div>
                  <div className="action-box">
                    <p>With us, you can easily get instant small-ticket loans to meet your immediate cash
                      needs </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- Next --> */}
          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={blicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Business Loan</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={blicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Business Loan</h3>
                  </div>
                  <div className="action-box">
                    <p>We have got the support you need to boost your business to success. Getting a
                      business loan was never this easy </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </a>
          </div>
          {/* <!-- Next --> */}

          {/* <!-- Second Row --> */}

          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={elicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Education Loan</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={elicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Education Loan</h3>
                  </div>
                  <div className="action-box">
                    <p>Great education opens great doors. With our education loan, your child can achieve
                      and surpass their dreams. </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </a>
          </div>
          {/* <!-- Next --> */}
          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={glicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Gold Loan</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={glicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Gold Loan</h3>
                  </div>
                  <div className="action-box">
                    <p>We put your gold at work, by offering you the quickest and easiest gold loan
                      approvals. It’s time to earn from your gold. </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </a>
          </div>
          {/* <!-- Next --> */}
          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={lapicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Loan Against Property</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={lapicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Loan Against Property</h3>
                  </div>
                  <div className="action-box">
                    <p>Gain access to capital against property at the lowest interest rates. with quick and
                      easy approval from ReferLoan. </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </a>
          </div>
          {/* <!-- Next --> */}
          <div className="flip-card">
            <a href="google.com">
              <div className="flip-card-inner">

                <div className="flip-card-front">
                  <div className="icon-box">
                    <Image src={hlicon} height={40} width={20} alt="" />
                  </div>
                  <div className="action-box">
                    <h3>Home Loan</h3>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="flip-content">
                    <div className="icon-box">
                      <Image src={hlicon} height={40} width={20} alt="" />
                    </div>
                    <h3>Home Loan</h3>
                  </div>

                  <div className="action-box">
                    <p>Get the home loan that's right for you with the lowest interest rates from ReferLoan.
                      Your dream home is awaiting you! </p>
                    <div className="icon">
                      <span className="material-icons">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- Next --> */}
        </div>
      </div>
    </section>
  )
}

export default cardLoan