import React, { useState } from 'react'
import EmiCalculator from '../components/calculator/emiCalculator'
import SubsidyCalculator from '../components/calculator/subsidyCalculator'
import CalcSidebar from '../components/calculator/calculatorsidebar'
const calculator = () => {
  const [calcName,setCalcName] = useState('Emi Calculator');
  return (
    <>
      <div className='emiCalcHeading'>
        <h2>Calculator</h2>
        <p>{calcName}</p>
      </div>

      <div className='emicontainer'>
        <div className='left'>
          {calcName=='Emi Calculator' && <EmiCalculator  />}
          {calcName=='Subsidy Calculator' && <SubsidyCalculator />}
        
        </div>
        <div className='right'>
          <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
        </div>
      </div>
      
    </>
  )
}

export default calculator