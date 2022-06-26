import { updateCycle } from '../actions/index';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const CycleSetup = (props) =>  {
    
    const dispatch = useDispatch();
    const options = [0.5, 1, 1.5 ,2, 2.5 ,3, 3.5 ,4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

    return (
        <div className='mr-5 mb-4'>      
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">משקולת (ק"ג)</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={(e)=> dispatch(updateCycle([props.cycleSetupKey, "KG", e.target.value]))}>
                        {options.map(option =>{return(<MenuItem key={option} value={option}>{option}</MenuItem>)})}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                        <TextField id="outlined-number" label="זמן מחזור" type="number" InputProps={{inputProps: {min: 0}}} onChange={(e)=> dispatch(updateCycle([props.cycleSetupKey, "Time", e.target.value]))}/>
                </FormControl>
            </Box>
        </div>
    )
}
export default CycleSetup;