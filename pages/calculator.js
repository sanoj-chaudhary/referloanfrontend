import React, { useState } from 'react'
import EmiCalculator from '../components/calculator/emiCalculator'
import SubsidyCalculator from '../components/calculator/subsidyCalculator'
import SipCalculator from '../components/calculator/sipCalculator'
import PpfCalculator from '../components/calculator/ppfCalculator'
import CalcSidebar from '../components/calculator/calculatorsidebar'
import RdCaculator from '../components/calculator/rdcalculator'
import EpfCalculator from '../components/calculator/epfCalculator'

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
          {calcName=='Emi Calculator' && <EmiCalculator  />}
          {calcName=='SIP Calculator' && <SipCalculator  />}
          {calcName=='PPF Calculator' && <PpfCalculator  />}
          {calcName=='Subsidy Calculator' && <SubsidyCalculator />}
          {calcName == 'Emi Calculator' && <EmiCalculator />}
          {calcName == 'RD Calculator' && <RdCaculator />}
          {calcName == 'SIP Calculator' && <SipCalculator />}
          {calcName == 'Subsidy Calculator' && <SubsidyCalculator />}
          {calcName == 'EPF Calculator' && <EpfCalculator />}
        </div>
        <div className='right'>
          <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
        </div>
      </div>
    </div>
  )
}

export default calculator