import TextField from '@material-ui/core/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
export const inputField = ({errors,classes, label, ...props}) => {
console.log(props)
  return (
    <div>
      <div className={`form-group group ${ errors ? "has-error" : 'has-success'} `}>
      <TextField
            fullWidth
            id="name"
            name="fullName"
            label="Name"
            value={values.fullName}
            onChange={handleChange}
            error={touched.fullName && Boolean(errors.fullName)}
            helperText={touched.fullName && errors.fullName}
          />
      </div>
    </div>
  )
}


export const selectBox = ({errors,classes, label, ...props}) => {
  console.log(props)
    return (
      <FormControl variant="standard" fullWidth>

      <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={values.age}
        onChange={handleChange}
        name='age'
        errors={errors.age}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    )
  }
