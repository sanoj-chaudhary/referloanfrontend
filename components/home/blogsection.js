import Image from "next/image"

const insuranceInvestment = () => {
  return (
    <section className="financeSimpli_area ">
    <div className="container">
        
        <h2>Blogs</h2>
        
        <ul className="stepArea">
            <li>
                <div className="step-imgBox"><img src="/images/SBI-e-Mudra-Loan.png" alt="" /></div>
                <h2 className="fin">SBI e-Mudra Loan</h2>
                <p className="fintext">State Bank of India is one of the government banks operating in India for a very long time. They have been serving their customers with various loan products at a very minimal interest rate. One such loan is SBI e-Mudra Loan. This venture was initiated…<strong> Read More »</strong></p>
            </li>
            <li>
                <div className="step-imgBox"><img src="/images/Investments.png" alt="" /></div>
                <h2 className="fin">Top 5 Investments </h2>
                <p className="fintext">Do you have a small amount of money to invest? Are you tired of searching for information regarding where to invest and how to double your money? If yes, then keep on reading because you sure aren’t going to regret it. Doubling your money is… <strong> Read More »</strong></p>
            </li>
            <li>
                <div className="step-imgBox"><img src="/images/digital-banking-1.png" alt="" /></div>
                <h2 className="fin">The development of digital banking </h2>
                <p className="fintext">On Sunday, India launched 75 digital banking facilities in rural and small-town locations to increase access to financial services. To promote digital banking throughout the country, India established 75 these digital banking units <strong>Read More » </strong></p>
            </li>


            <li>
                <div className="step-imgBox"><img src="/images/LIC-policies.png" alt="" /></div>
                <h2 className="fin">Looking for the Best Policies </h2>
                <p className="fintext">Having insurance coverage has become essential for everyone due to the increasing level of uncertainty in life, particularly following COVID-19. Policies are like a helping hand that comes to rescue when one is under unfavorable circumstances related to finances. <strong>Read More »</strong></p>
            </li>


        </ul>
    </div>
</section>
  )
}

export default insuranceInvestment