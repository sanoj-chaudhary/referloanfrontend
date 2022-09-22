import Herosection from "./herosection"
import CardLoan from './cardLoan'
import CustomerSupport from './customerSupport'
import InsuranceInvestment from './insuranceInvestment'
import MarketPlace from "./marketPlace"
import AboutUs from './aboutUs'
import Ourpartner from "./ourpartner"
import Ourvideo from './ourvideo'
import Testimonial from "./testimonial"
import Getapp from './getapp'
const index = () => {
 
  return (
    <>
      <Herosection />
      <CardLoan />
      <CustomerSupport />
      <InsuranceInvestment />
      <MarketPlace />
      <AboutUs />
      <Ourpartner />
      <Ourvideo />
      <Testimonial slice={3} />
      <Getapp />
   
    </>
  )
}

export default index