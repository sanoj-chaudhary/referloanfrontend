
import TextField from '@material-ui/core/TextField';
import {FormControl} from '@material-ui/core';
import {FormLabel} from '@material-ui/core';
import {RadioGroup} from '@material-ui/core';
import {FormControlLabel} from '@material-ui/core';
import {Radio} from '@material-ui/core';

const apply = () => {
  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <TextField name="name" label="Name" />
        
      </FormControl>

      <div class="row px-0">
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="name" label="Name" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="email" label="Email Id" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="phone" label="Phone No" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="adhar" label="Adhaar Card" />
        </div>
      </div>

      <div class="row px-0">
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="address1" label="Gender" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="address2" label="Address 2" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="state" label="State" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="pincode" label="Pincode" />
        </div>
      </div>

      <div class="row px-0">
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="address1" label="Address 1" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="address2" label="Address 2" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="state" label="State" />
        </div>
        <div class="col-sm-4 col-md-2 col-lg-2 pb-3">
          <TextField name="pincode" label="Pincode" />
        </div>
      </div>


    </>
  )
}

export default apply