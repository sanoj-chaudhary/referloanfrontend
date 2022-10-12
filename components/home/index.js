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

import { db } from './../../config/db'
const index = () => {
 
  return (
    <>
      <Herosection />
      <CardLoan />
      <EsiestPlaceApply />
      <CustomerSupport />
      <InsuranceInvestment />
      <ServiceArea />

      <AboutUs />
      <Ourpartner />
      <Ourvideo />
      <Testimonial slice={3} />
      <Getapp />
      <Form />
    </>
  )
}

export default index