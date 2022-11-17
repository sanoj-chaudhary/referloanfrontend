import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import Slider from '@mui/material/Slider';
import { Typography } from '@material-ui/core'
import { Table, TableCell, TableRow , TableHead } from '@material-ui/core'
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

  // A = P(r/n+1) ^ nt
const SsyCalculator = () => {
  const [pAmount, setpAmount] = useState(150000);
  const [age, setAge] = useState(0)
  const [duration, setDuration] = useState(15)
  const maxvalue = 150000;                           
  const maxint = 10;
  const maxduration = 15; 
  const interest = "7.6";
  const maxage = 10;
  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;
  
  // A = P (1 + r/n) ^ nt


  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;

  var total_investment = (pAmount*duration);
  var maturityAmount = Math.round( pAmount*( (((1+interest)*duration)-1)/interest ) );
  var total_interest = (maturityAmount-total_investment);
  var maturityValue = (maturityAmount+total_investment);

  

  function valuetext(value) {
    return `${value} Lac`;
  }
  return (
    <>

      <div className="row">
        <div className="col-sm-12 col-md-12  col-xl-12">
          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Yearly Investment </h2>
              <small>(Up to 150000)</small>
              <div className="outputArea">
                <input type="text" value={pAmount} name="loan_amount" id="loan_amount" className="emi_check" onChange={(e) => { setpAmount(e.target.value) }} maxlength="6" /> <span className="emi-icon"> <i className="fa fa-rupee"></i> </span>
              </div>

            </div>

            <PrettoSlider value={pAmount} onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
            ></PrettoSlider>
          </div>
          <div className="rangeArea"> 
            <div className="rangeHead">
              <h2>Expected Girl Age </h2>
              <small>(10 years)</small>
              <div className="outputArea">
                <input type="number" value={age} name="intrest_rate" id="intrest_rate" className="emi_check" onChange={(e) => { setAge(e.target.value) }} min="1" max="10" /> <span className="emi-icon"> <i className="fa fa-percent" ></i> </span>
              </div>
            </div>
            <PrettoSlider value={age} aria-label="Default" valueLabelDisplay="auto" onChange={(e, vamt) => { setAge(vamt) }} max={maxage} ></PrettoSlider>
          </div>
          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Total Maturity Period</h2>
              <small>(In Years)</small>
              <div className="outputArea">
                <input type="number" value={duration} name="tenure" id="tenure" className="emi_check" onChange={(e) => { setDuration(e.target.value) }} /> <span className="emi-icon" >
                </span></div>

            </div>
            <PrettoSlider
              onChange={(e, vdur) => { setDuration(vdur) }} value={duration} max={maxduration}
              valueLabelDisplay="auto"
            />
          </div>

        </div>

        <div className="col-sm-12 col-md-12  col-xl-12">

          <div className="table-responsive">
            <Table style={{ borderBottom: "none" }}>
              <TableRow style={{ borderBottom: "2px solid white" }}>
                <TableCell>
                <TableHead>
                  <TableRow>
                    <TableCell className='ETablecellText'>Girl's Age</TableCell>
                    <TableCell className='ETablecellValue'><strong>Must be less than 10 Years</strong></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='ETablecellText'>Max Rate of Interest</TableCell>
                    <TableCell className='ETablecellText'><strong>7.6%</strong></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='ETablecellText'> Total Investment </TableCell>
                    <TableCell className='ETablecellValue'><strong>₹ </strong>{total_investment}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='ETablecellText'>Maturity Value</TableCell>
                    <TableCell className='ETablecellValue'><strong>₹ </strong>{maturityValue}</TableCell>
                  </TableRow>
                </TableHead>
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

export default SsyCalculator