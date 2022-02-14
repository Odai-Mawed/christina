
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


function JaNeinCheckbox(){
    return(
        <>
            <FormControl >
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                >
                    <FormControlLabel  value="Ja" control={<Radio sx={{color:'white'}} />} label="Ja" />
                    <FormControlLabel value="Nein" control={<Radio sx={{color:'white'}} />} label="Nein" />
                </RadioGroup>
            </FormControl>
        </>
    )
};



export default JaNeinCheckbox;