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
import TableSipDetails from './tableSipDetails';

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

const sipCalculator = () => {
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setInterest] = useState(9.56);
  const [duration, setDuration] = useState(12)
  const maxvalue = 100000000;
  const maxint = 20;
  const maxduration = 30;

  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;
  var futureValue = 0;
  var total_investment = (pAmount*months);
  futureValue = Math.round(pAmount * (1+monthlyRate) * ((Math.pow((1+monthlyRate),months)) - 1)/monthlyRate);
  /*var total_interest = ((pAmount*duration*interest));*/
  var total_interest = ((futureValue-total_investment));

  function valuetext(value) {
    return `${value} Lac`;
  }
  return (
    <>

      <div className="row">
        <div className="col-sm-12 col-md-12  col-xl-12">
          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Monthly SIP Amount</h2>
              <small>(Up to 1 Crore)</small>
              <div className="outputArea">
                <input type="text" value={pAmount} name="loan_amount" id="loan_amount" className="emi_check" onChange={(e) => { setpAmount(e.target.value) }} /> <span className="emi-icon"> <i className="fa fa-rupee"></i> </span>
              </div>

            </div>

            <PrettoSlider value={pAmount} onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
            ></PrettoSlider>
          </div>
          <div className="rangeArea">
            <div className="rangeHead">
              <h2>Expected Return Rate (p.a)</h2>
              <small>(9.50% to 19.55%)</small>
              <div className="outputArea">
                <input type="number" value={interest} name="intrest_rate" id="intrest_rate" className="emi_check" onChange={(e) => { setInterest(e.target.value) }} /> <span className="emi-icon"> <i className="fa fa-percent" ></i> </span>
              </div>
            </div>
            <PrettoSlider value={interest} aria-label="Default" valueLabelDisplay="auto" onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>
          </div>
          <div className="rangeArea">
            <div className="rangeHead">
              <h2>SIP Period</h2>
              <small>(1 year - 30 years)</small>
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
            <Table>
              <TableRow>
                <TableCell>
                  <TableSipDetails total_amount={futureValue} interest={interest} duration={duration} total_investment={total_investment} total_interest={total_interest} />
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

export default sipCalculator