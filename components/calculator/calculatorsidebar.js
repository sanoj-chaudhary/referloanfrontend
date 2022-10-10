import Link from 'next/link'
const calcSidebar = () => {
 return(
<div classname= "sidebar">
<Link href="/emi-calculator"><a title="EMI Calculator">EMI Calculator</a></Link>
<Link href="/eligibility-calculator"><a title="Eligibility Calculator">Eligibility Calculator</a></Link>
<Link href="/subsidy-calculator"><a title="SUBSIDY Calculator">SUBSIDY Calculator</a></Link>
<Link href="/sip-calculator"><a title="SIP Calculator">SIP Calculator</a></Link>
<Link href="/rd-calculator"><a title="RD Calculator">RD Calculator</a></Link>
<Link href="/ssy-calculator-for-sukanya"><a title="SSY Calculator">SSY Calculator</a></Link>
<Link href="/ppf-calculator"><a title="PPF Calculator">PPF Calculator</a></Link>
<Link href="/epf-calculator"><a title="EPF Calculator">EPF Calculator</a></Link>
<Link href="/lumpsum-calculator"><a title="Lumpsum Calculator">Lumpsum Calculator</a></Link>
<Link href="/mf-calculator"><a title="MF Returns Calculator">MF Returns Calculator</a></Link>
</div>
    )}
    export default calcSidebar;