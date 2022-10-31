import React from 'react'
import Link from "next/link"

const esiestPlaceApply = () => {
  return (
    <div className='container'>
      <section className="applyLoans__Section">


        <div className="loanCol">
          <h2>Your Financial Stability Made Easy!</h2>
          <ul className="iconPnl p-0">
            <li>
              <Link href={"/loans/personal-loan" + process.env.UTM}><a>
                <img src="/images/icon/pl-icon.png" alt="" />
                <h3>Personal Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/credit-card" + process.env.UTM}><a>
                <img src="/images/icon/ccard-icon.png" alt="" />
                <h3>Credit Cards</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/home-loan" + process.env.UTM}><a>
                <img src="/images/icon/hl-icon.png" alt="" />
                <h3>Home Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/micro-loan" + process.env.UTM}><a>
                <img src="/images/icon/microLoan-icon.png" alt="" />
                <h3>Micro Loans</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/business-loan" + process.env.UTM}><a>
                <img src="/images/icon/bL-icon.png" alt="" />
                <h3>Business Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/education-loan" + process.env.UTM}><a>
                <img src="/images/icon/eduL-icon.png" alt="" />
                <h3>Education Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href={"/loans/gold-loan" + process.env.UTM}><a>
                <img src="/images/icon/gl-icon.png" alt="" />
                <h3>Gold Loan</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>
                <img src="/images/icon/sa-icon.png" alt="" />
                <h3>Saving Account</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>
                <img src="/images/icon/offer-icon.png" alt="" />
                <h3>Offers</h3>
              </a>
              </Link>
            </li>
            <li>
              <Link href="/"><a>
                <img src="/images/icon/other-icon.png" alt="" />
                <h3>More</h3>
              </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="cardBanner">
          <Link href="/"><a><img src="/images/axisBanner.png" alt="" /></a></Link>
        </div>


        {/* <!-- cardBanner Area --> */}


      </section>
    </div>
  )
}

export default esiestPlaceApply