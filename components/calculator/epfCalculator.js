import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import Slider from '@mui/material/Slider';
import { Typography } from '@material-ui/core'
import { Table, TableCell, TableRow } from '@material-ui/core'
// import { Chart } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
// export const PretoSlider = withStyles({
//   color: { color: "#ff9302", height: 10 },
//   thumb: { height: 20, width: 20, backgroundColor: 'ff9302', marginTop: -1, marginLeft: -9 },
//   track: { height: 20, borderRadius: 4 },
//   rail: { height: 40, color:"red", borderRadius: 4 }
// })(Slider);
import TableDetails from './tableDetails';
import TableEpfDetails from './tableEpfDetails';

const PrettoSlider = styled(Slider)({
  color: '#00796a',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#ff9302',
    border: 'none',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#00796a',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100000,
    label: '1',
  },
  {
    value: 2000000,
    label: '20',
  },
  {
    value: 100,
    label: '100',
  },
];

const marksss = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100000,
    label: '1 Lac',
  },
  {
    value: 2000000,
    label: '20 Lac',
  }

];

const ppfCalculator = () => {
  const [pAmount, setpAmount] = useState(500);
  const [interest, setInterest] = useState(8.1);
  const [duration, setDuration] = useState(15);
  const [age, setAge] = useState(15);
  const [retirement_age, setRetirementAge] = useState(58);
  const [bcom_salary, setBCOMSalary] = useState(10000);
  const [current_epf_amount, setEPFAmount] = useState(0);
  const [yearly_growth , setYearlyGrowth] = useState(10);
  const maxvalue = 150000;
  const maxint = 20;
  const maxduration = 50;
  const maxage = 60;
  const maxRetirementAge = 60;
  const maxBCOMSalary = 150000;
  const maxEPFAmount = 150000;
  const maxYearlyGrowth = 20;

  // F = P[{(1+i)n-1}/i]
  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;

  var total_investment = (pAmount*duration);
  //var futureValue = Math.round(pAmount*(((1+interest)*duration-1)/interest));
  //var maturityAmount = Math.round(Math.pow(pAmount*(1+interest),duration));
  // 120000[({(1+7.1)15}-1)/7.1]
  var maturityAmount = Math.round( pAmount*( (((1+interest)*duration)-1)/interest ) );
  var total_interest = (maturityAmount-total_investment);
  var futureValue = (maturityAmount+total_investment);

  /*
  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;
  var futureValue = 0;
  var total_investment = (pAmount*duration);
  futureValue = Math.round(pAmount * (1+monthlyRate) * ((Math.pow((1+monthlyRate),months)) - 1)/monthlyRate);
  var total_interest = ((futureValue-pAmount));
  //var total_interest = ((pAmount*duration*interest));
  */

  function valuetext(value) {
    return `${value} Lac`;
  }
  return (
    <>

      <div className="row">
        <div className="col-sm-12 col-md-12  col-xl-12">

          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Your age</h2>
              <small>(15 to 59)</small>
              <div className="outputArea">
                <input type="number" value={age} name="age" id="age" min="15" max="59" className="age_check" onChange={(e) => { setAge(e.target.value) }} /> <span className="emi-icon" > Years
                </span>
              </div>
            </div>
            <PrettoSlider onChange={(e, vdur) => { setAge(vdur) }} value={age} max={maxage} valueLabelDisplay="auto" />
          </div>

          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Retirement age</h2>
              <small>(Up to 60)</small>
              <div className="outputArea">
                <input type="number" value={retirement_age} name="retirement_age" id="retirement_age" max="60" className="retirement_age_check" onChange={(e) => { setRetirementAge(e.target.value) }} /> <span className="emi-icon" > Years
                </span>
              </div>
            </div>
            <PrettoSlider onChange={(e, vdur) => { setRetirementAge(vdur) }} value={retirement_age} max={maxRetirementAge} valueLabelDisplay="auto" />
          </div>

          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Basic component of monthly salary</h2>
              <small>(Up to 150000)</small>
              <div className="outputArea">
                <input type="text" value={bcom_salary} name="bcom_salary" id="bcom_salary" className="emi_check" onChange={(e) => { setBCOMSalary(e.target.value) }} maxlength="6" /> <span className="emi-icon"> ₹<i className="fa fa-rupee"></i> </span>
              </div>
            </div>
            <PrettoSlider onChange={(e) => { setBCOMSalary(e.target.value) }} value={bcom_salary} max={maxBCOMSalary} getAriaValueText={valuetext} valueLabelDisplay="auto" />
          </div>

          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Current EPF Balance</h2>
              <small>(Up to 1Cr)</small>
              <div className="outputArea">
                <input type="text" value={current_epf_amount} name="current_epf_amount" id="current_epf_amount" className="current_epf_check" onChange={(e) => { setEPFAmount(e.target.value) }} maxlength="8" /> <span className="emi-icon"> ₹<i className="fa fa-rupee"></i> </span>
              </div>
            </div>
            <PrettoSlider value={current_epf_amount} onChange={(e) => { setEPFAmount(e.target.value) }} max={maxEPFAmount} getAriaValueText={valuetext}
            ></PrettoSlider>
          </div>

          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Your expected yearly salary growth</h2>
              <small>(Up to 20%)</small>
              <div className="outputArea">
                <input type="number" value={yearly_growth} name="yearly_growth" id="yearly_growth" className="yearly_growth_check" onChange={(e) => { setYearlyGrowth(e.target.value) }} min="1" max="20" /> <span className="emi-icon"> <i className="fa fa-percent" ></i> </span>
              </div>
            </div>
            <PrettoSlider value={yearly_growth} aria-label="Default" valueLabelDisplay="auto" onChange={(e, vamt) => { setYearlyGrowth(vamt) }} max={maxYearlyGrowth} ></PrettoSlider>
          </div>

          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Rate of interest</h2>
              <small>(8.1%)</small>
              <div className="outputArea">
                <input type="number" value={interest} name="intrest_rate" id="intrest_rate" className="emi_check" onChange={(e) => { setInterest(e.target.value) }} min="1" max="20"/> <span className="emi-icon"> <i className="fa fa-percent" ></i> </span>
              </div>
            </div>
            <PrettoSlider value={interest} aria-label="Default" valueLabelDisplay="auto" onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>
          </div>

        </div>
        
        <div className="col-sm-12 col-md-12  col-xl-12">

          <div className="table-responsive">
            <Table>
              <TableRow>
                <TableCell>
                  <TableEpfDetails age={age} retirement_age={retirement_age} bcom_salary={bcom_salary} current_epf_amount={current_epf_amount} yearly_growth={yearly_growth} futureValue={futureValue} maturityAmount={maturityAmount} interest={interest} duration={duration} total_investment={total_investment} total_interest={total_interest} />
                </TableCell>
                <TableCell>
                  <Pie className='clChart'
                    data={{
                      datasets: [{
                        data: [total_interest, total_investment],
                        backgroundColor: ['rgb(0, 121, 106)', 'rgb(255, 147, 2)']
                      }],
                      labels: ['Total Interest', 'Total Amount']
                    }}
                    width={180}
                    height={180}
                    options={{ maintainAspectRatio: false }}
                  />
                </TableCell>
              </TableRow>
            </Table>
          </div>
        </div>

      </div>

    </>
  )
}

export default ppfCalculator