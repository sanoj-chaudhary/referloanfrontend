import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import Slider from '@mui/material/Slider';
import { Typography } from '@material-ui/core'
import { Table, TableCell, TableRow } from '@material-ui/core'
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import TableDetails from './tableDetails';

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

const emiCalculator = () => {
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setInterest] = useState(9.56);
  const [duration, setDuration] = useState(12)
  const maxvalue = 1000000;
  const maxint = 20;
  const maxduration = 360;

  const intrate = interest / 1200;
  const emi = duration ? Math.round(pAmount * intrate / (1 - (Math.pow(1 / (1 + intrate), duration)))) : 0;
  const totalAmt = duration * emi;
  const totalAmountofCredit = Math.round((emi / intrate) * (1 - Math.pow((1 + intrate), (-duration))));
  const totalAmountofInterest = Math.round(totalAmt - totalAmountofCredit);
  const payableAmt = pAmount + totalAmountofInterest;
  function valuetext(value) {
    return `${value} Lac`;
  }

  function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
    return true;
  }
  return (
    <>

      <div className="rangeArea">
        <div className="rangeHead">
          <h2>Loan Amount</h2>
          <small>(Up to 1 Crore)</small>
          <div className="outputArea">
            <input type="text" onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }} value={pAmount} name="loan_amount" id="loan_amount" className="emi_check" onChange={(e) => { setpAmount(e.target.value) }} maxLength="8" /> <span className="emi-icon"> ₹ </span>
          </div>

        </div>

        <PrettoSlider value={pAmount} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
        ></PrettoSlider>
      </div>
      <div className="rangeArea">
        <div className="rangeHead">
          <h2>Interest Rate</h2>
          <small>(9.50% to 19.55%)</small>
          <div className="outputArea">
            <input onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }} type="number" value={interest} name="intrest_rate" id="intrest_rate" min="1" max="30" className="emi_check" onChange={(e) => { setInterest(e.target.value) }} /> <span className="emi-icon"> % </span>
          </div>
        </div>
        <PrettoSlider value={interest} aria-label="Default" valueLabelDisplay="auto" onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>

      </div>
      <div className="rangeArea">
        <div className="rangeHead">
          <h2>Loan Tenure</h2>
          <small>(1 year - 30 years)</small>
          <div className="outputArea">
            <input type="text" onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }} 
            value={duration} name="tenure" id="tenure" maxLength="5" className="emi_check" onChange={(e) => { setDuration(e.target.value) }} /> <span className="emi-icon" >Mo
            </span></div>

        </div>
        <PrettoSlider
          onChange={(e, vdur) => { setDuration(vdur) }} value={duration} max={maxduration}
          valueLabelDisplay="auto"
        />
      </div>

      <div>

        <div className='container'>
          <div className='row gy-1'>
            <div className='col-md-6 col-12'>
              <Table className="mb-1">
                <TableRow style={{ borderBottom: "2px solid white" }}>
                  <TableCell>
                    <TableDetails emi={emi} loanamt={pAmount} interest={interest} tenure={duration} totalIntrest={totalAmountofInterest} tatalpayment={payableAmt} />
                  </TableCell>
                </TableRow>
              </Table>
            </div>
            <div className='col-md-6 col-12 ' style={{ borderBottom: "2px solid white" }}>
              <Table className="mt-5">
                <TableRow  >

                  <TableCell>
                    <Pie className='clChart'
                      data={{

                        datasets: [{
                          data: [totalAmountofInterest, pAmount],
                          backgroundColor: ['rgb(0, 121, 106)', 'rgb(255, 147, 2)']
                        }],
                        labels: ['Total Interest', 'Total Amount']
                      }}
                      width={150}
                      height={150}
                      options={{ maintainAspectRatio: false }}
                    />
                  </TableCell>
                </TableRow>
              </Table>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default emiCalculator