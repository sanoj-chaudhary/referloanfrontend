import React, { useState } from 'react'
import EmiCalculator from '../components/calculator/emiCalculator'
import SubsidyCalculator from '../components/calculator/subsidyCalculator'
import SipCalculator from '../components/calculator/sipCalculator'
import CalcSidebar from '../components/calculator/calculatorsidebar'
import RdCaculator from '../components/calculator/rdcalculator'
const calculator = () => {
  const [calcName, setCalcName] = useState('Emi Calculator');
  return (
    <div data-aos="fade-right">
      <div className='emiCalcHeading'>
        <h2>Calculator</h2>
        <p>{calcName}</p>
      </div>

      <div className='emicontainer'>
        <div className='left'>
          {calcName == 'Emi Calculator' && <EmiCalculator />}
          {calcName == 'RD Calculator' && <RdCaculator />}
          {calcName == 'SIP Calculator' && <SipCalculator />}
          {calcName == 'Subsidy Calculator' && <SubsidyCalculator />}
        </div>
        <div className='right'>
          <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
        </div>
      </div>
    </div>
  )
}

export default calculator