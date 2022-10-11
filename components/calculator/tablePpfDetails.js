import { Table, TableCell, TableRow } from '@material-ui/core'
import { TableHead } from '@mui/material'

const tableDetails = (props) => {
  console.log(props)
  return (
   <Table style={{ width:"100%", border:"2px solid #ccc" }} area-lable="sample table" >
    <TableHead>
      <TableRow>
        <TableCell className='ETablecellText'>Interest Rate (%)</TableCell>
        <TableCell className='ETablecellValue'><strong>% </strong>{props.interest}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className='ETablecellText'>Duration (Years)</TableCell>
        <TableCell className='ETablecellValue'><strong> </strong>{props.duration}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className='ETablecellText'>Yearly Invested Amount</TableCell>
        <TableCell className='ETablecellValue'><strong>₹ </strong>{props.total_investment}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className='ETablecellText'>Wealth Gained</TableCell>
        <TableCell className='ETablecellValue'><strong>₹ </strong>{props.total_interest}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className='ETablecellText'>Total Wealth</TableCell>
        <TableCell className='ETablecellValue'><strong>₹ </strong>{props.total_amount}</TableCell>
      </TableRow>
    </TableHead>
   </Table>
  )
}

export default tableDetails