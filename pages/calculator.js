import React, { useState,useEffect } from 'react'
import EmiCalculator from '../components/calculator/emiCalculator'
import SubsidyCalculator from '../components/calculator/subsidyCalculator'
import SipCalculator from '../components/calculator/sipCalculator'
import PpfCalculator from '../components/calculator/ppfCalculator'
import CalcSidebar from '../components/calculator/calculatorsidebar'
import RdCaculator from '../components/calculator/rdcalculator'
import EpfCalculator from '../components/calculator/epfCalculator'
import SsyCalculator from '../components/calculator/ssyCalculator'
import LumpsumCalculator from '../components/calculator/lumpsumpcalculator'

import { useRouter } from 'next/router'

const calculator = ({ data }) => {
  const router = useRouter()
  const {name} = router.query

  const [calcName, setCalcName] = useState(data.name);
  console.log('first',data)
 
 
  
  return (
    <div data-aos="fade-right">
      <div className='emiCalcHeading'>
        <h2>Calculator</h2>
        <p style={{ textTransform:"uppercase" }}>{calcName}</p>
      </div>

      <div className='emicontainer'>
        <div className='left'>
          {calcName=='emi-calculator' && <EmiCalculator  />}
          {calcName=='sip-calculator' && <SipCalculator  />}
          {calcName=='ppf-calculator' && <PpfCalculator  />}
          {calcName=='subsidy-calculator' && <SubsidyCalculator />}
          {calcName == 'rd-calculator' && <RdCaculator />}
          {calcName == 'epf-calculator' && <EpfCalculator />}
          {calcName == 'ssy-calculator' && <SsyCalculator />}
          {calcName == 'lumpsum-calculator' && <LumpsumCalculator />}
        </div>
        <div className='right'>
          <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
 const data = context.query;

  return { props: { data } }
}

export default calculator