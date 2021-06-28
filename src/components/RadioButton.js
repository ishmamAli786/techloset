import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('6 months or less');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" style={{marginTop:"20px"}}>
      <FormLabel component="legend">Work Experience</FormLabel>
      <RadioGroup aria-label="Work Experience" name="Work Experience" value={value} onChange={handleChange}>
        <FormControlLabel value="6 months or less" control={<Radio />} label="6 months or less" />
        <FormControlLabel value="1-2 years" control={<Radio />} label="1-2 years" />
        <FormControlLabel value="More." control={<Radio />} label="More." />
      </RadioGroup>
    </FormControl>
  );
}