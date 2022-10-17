import Link from 'next/link'
const calcSidebar = ({setCalcName,calcName}) => {
    console.log(calcName)
    return (

        <div className="article_list" data-aos="fade-left">
            <h2>CALCULATOR</h2>
            <ul>
                <li><a onClick={()=>{setCalcName('emi-calculator')}} title="EMI Calculator">EMI Calculator</a></li>
             
                <li><a onClick={()=>{setCalcName('subsidy-calculator')}} title="SUBSIDY Calculator">SUBSIDY Calculator</a></li>
                <li><a onClick={()=>{setCalcName('sip-calculator')}} title="SIP Calculator">SIP Calculator</a></li>
                <li><a onClick={()=>{setCalcName('rd-calculator')}} title="RD Calculator">RD Calculator</a></li>

                <li><a  onClick={()=>{setCalcName('ssy-calculator')}} title="SSY Calculator">SSY Calculator</a></li>
                <li><a  onClick={()=>{setCalcName('ppf-calculator')}} title="PPF Calculator">PPF Calculator</a></li>
                <li><a  onClick={()=>{setCalcName('epf-calculator')}} title="EPF Calculator">EPF Calculator</a></li>
                <li><a  onClick={()=>{setCalcName('lumpsum-calculator')}} title="Lumpsum Calculator">Lumpsum Calculator</a></li>
                <li><a onClick={()=>{setCalcName('MF Returns Calculator')}} title="MF Returns Calculator">MF Returns Calculator</a></li>
            </ul>
        </div>
    )
}
export default calcSidebar;