import { db } from './../../config/db'

import React, { useState,useEffect } from 'react'
import EmiCalculator from '../../components/calculator/emiCalculator'
import SubsidyCalculator from '../../components/calculator/subsidyCalculator'
import SipCalculator from '../../components/calculator/sipCalculator'
import PpfCalculator from '../../components/calculator/ppfCalculator'
import CalcSidebar from '../../components/calculator/calculatorsidebar'
import RdCaculator from '../../components/calculator/rdcalculator'
import EpfCalculator from '../../components/calculator/epfCalculator'
import SsyCalculator from '../../components/calculator/ssyCalculator'
import LumpsumCalculator from '../../components/calculator/lumpsumpcalculator'
import Mfcalculator from '../../components/calculator/mfcalculator'

import { useRouter } from 'next/router'

const calculator = ({ data,content }) => {
  const router = useRouter()
  const {name} = router.query

  const [calcName, setCalcName] = useState(data.name);

  return (
    <>
    <div data-aos="fade-right">
      <div className='emiCalcHeading'>
        <h2>Calculator</h2>
        <p style={{ textTransform:"uppercase" }}>{data}</p>
      </div>

      <div className='emicontainer'>
        <div className='left'>

          {data=='emi-calculator' && <EmiCalculator  />}
          {data=='sip-calculator' && <SipCalculator  />}
          {data=='ppf-calculator' && <PpfCalculator  />}
          {data=='subsidy-calculator' && <SubsidyCalculator />}
          {data == 'rd-calculator' && <RdCaculator />}
          {data == 'epf-calculator' && <EpfCalculator />}
          {data == 'ssy-calculator' && <SsyCalculator />}
          {data == 'lumpsum-calculator' && <LumpsumCalculator />}
          {data == 'mf-calculator' && <Mfcalculator />}
          
        </div>
        <div className='right'>
          <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
        </div>
 
      </div>
    </div>

    <div className="innerpage_bg">
        <section className="section_pad">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: content[0].description }}></div>
          </div>
        </section> 
    </div>   
    </>
  )
}

export async function getServerSideProps(context) {
 
 const data = context.query.calculator;  
 let res = await db.query("SELECT * FROM `pages` WHERE `slug` =  '" + data + "' ");
 let content = JSON.parse(JSON.stringify(res))
 
 return { props: { data,content } }
}

export default calculator