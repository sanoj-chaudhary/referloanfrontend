import Herosection from "./herosection"
import CardLoan from './cardLoan'
import CustomerSupport from './customerSupport'
import InsuranceInvestment from './insuranceInvestment'
import Ourpartner from "./ourpartner"
import Testimonial from "./testimonial"
import EsiestPlaceApply from "./esiestPlaceApply"
import ServiceArea from "./serviceArea"
const index = (props) => {
 
  return (
    <>
      <Herosection loanProduct={loanProduct} />
      <CardLoan />
      <EsiestPlaceApply />
      <CustomerSupport />
      <InsuranceInvestment />
      <ServiceArea />
      <Ourpartner partner={props.partner} />
      <Testimonial testimonial={props.testimonial} />
     
    </>
  )
}

export default index