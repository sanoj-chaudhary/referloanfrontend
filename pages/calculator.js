import React, { useState } from 'react'
import EmiCalculator from '../components/calculator/emiCalculator'
import CalcSidebar from '../components/calculator/calculatorsidebar'
import RdCaculator from '../components/calculator/rdcalculator'
const calculator = () => {
  const [calcName,setCalcName] = useState('Emi Calculator');
  return (
    <div  data-aos="fade-right">
      <div className='emiCalcHeading'>
        <h2>Calculator</h2>
        <p>{calcName}</p>
      </div>

      <div className='emicontainer'>
        <div className='left'>
          {calcName=='Emi Calculator' && <EmiCalculator  />}
          {calcName=='RD Calculator' && <RdCaculator  />}
          {calcName=='Subsidy Calculator' && <h1>Subsidy</h1>}
        
        </div>
        <div className='right'>
          <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
        </div>
      </div>
      
    </div>
  )
}

export default calculator