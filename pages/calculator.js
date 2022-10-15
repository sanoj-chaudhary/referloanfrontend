import React, { useState } from 'react'
import EmiCalculator from '../components/calculator/emiCalculator'
import SubsidyCalculator from '../components/calculator/subsidyCalculator'
import SipCalculator from '../components/calculator/sipCalculator'
import PpfCalculator from '../components/calculator/ppfCalculator'
import CalcSidebar from '../components/calculator/calculatorsidebar'
import RdCaculator from '../components/calculator/rdcalculator'
import EpfCalculator from '../components/calculator/epfCalculator'
import SsyCalculator from '../components/calculator/ssyCalculator'
import LumpsumCalculator from '../components/calculator/lumpsumpcalculator'


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
          {calcName == 'RD Calculator' && <RdCaculator />}
          {calcName == 'EPF Calculator' && <EpfCalculator />}
          {calcName == 'SSY Calculator' && <SsyCalculator />}
          {calcName == 'Lumpsum Calculator' && <LumpsumCalculator />}

        </div>
        <div className='right'>
          <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
        </div>
      </div>
    </div>
  )
}

export default calculator