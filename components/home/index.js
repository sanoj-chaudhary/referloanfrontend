import Herosection from "./herosection"
import CardLoan from './cardLoan'
import CustomerSupport from './customerSupport'
import InsuranceInvestment from './insuranceInvestment'
import AboutUs from './aboutUs'
import Ourpartner from "./ourpartner"
import Ourvideo from './ourvideo'
import Testimonial from "./testimonial"
import Getapp from './getapp'
import Form from './../form/testform'
import EsiestPlaceApply from "./esiestPlaceApply"
import ServiceArea from "./serviceArea"
const index = (props) => {
 
  return (
    <>
      <Herosection />
      <CardLoan />
      <EsiestPlaceApply />
      <CustomerSupport />
      <InsuranceInvestment />
      <ServiceArea />
      <AboutUs />
      <Ourpartner partner={props.partner} />
      <Ourvideo video={props.video} />
      <Testimonial testimonial={props.testimonial} />
      <Getapp />
      <Form />
    </>
  )
}

export default index