import Link from 'next/link'
const calcSidebar = ({setCalcName,calcName}) => {
    console.log(calcName)
    return (

        <div class="article_list">
            <h2>CALCULATOR</h2>
            <ul>
                <li><a onClick={()=>{setCalcName('Emi Calculator')}} title="EMI Calculator">EMI Calculator</a></li>
             
                <li><a onClick={()=>{setCalcName('Subsidy Calculator')}} title="SUBSIDY Calculator">SUBSIDY Calculator</a></li>
                <li><a onClick={()=>{setCalcName('SIP Calculator')}} title="SIP Calculator">SIP Calculator</a></li>
                <li><a onClick={()=>{setCalcName('RD Calculator')}} title="RD Calculator">RD Calculator</a></li>

                <li><a  onClick={()=>{setCalcName('SSY Calculator')}} title="SSY Calculator">SSY Calculator</a></li>
                <li><a  onClick={()=>{setCalcName('PPF Calculator')}} title="PPF Calculator">PPF Calculator</a></li>
                <li><a  onClick={()=>{setCalcName('EPF Calculator')}} title="EPF Calculator">EPF Calculator</a></li>
                <li><a  onClick={()=>{setCalcName('Lumpsum Calculator')}} title="Lumpsum Calculator">Lumpsum Calculator</a></li>
                <li><a onClick={()=>{setCalcName('MF Returns Calculator')}} title="MF Returns Calculator">MF Returns Calculator</a></li>
            </ul>
        </div>
    )
}
export default calcSidebar;