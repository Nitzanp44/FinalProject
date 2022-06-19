import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CycleSetup from './CycleSetup';
import { startPractice, IntianalCycle, updateCycle, changeMaximum } from '../actions/index';

const PracticeSetup = () =>  {
    const stateCycles = useSelector((state) => state.cycle);
    const statePatient = useSelector((state) => state.patient);
    const stateTherapist = useSelector((state) => state.user);

    const [numCycle, setNumCycle] = useState(0);
    const dispatch = useDispatch();


    const updateCycle = (val) => {
        let intVal = parseInt(val);
        if(Number.isInteger(intVal)){
            if(intVal < 0){
                setNumCycle(0);
            } else {
            setNumCycle(intVal);
            dispatch(IntianalCycle(intVal));
            }
        } else {
            setNumCycle(0);
        }
    }

    return (
        <div>
            <h4>פרטי אימון:</h4> 
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                        <TextField id="outlined-number" label="עומס שריר מרבי" type="number" InputProps={{inputProps: {min: 0}}} onChange={(e) => dispatch(changeMaximum(e.target.value))}/>
                </FormControl>
            </Box>
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                        <TextField id="outlined-number" label="מספר מחזורים" type="number" InputProps={{inputProps: {min: 0, max: 10}}} onChange={(e) => updateCycle(e.target.value)}/>
                </FormControl>
            </Box>
            <div className="d-flex">
                {[...Array(numCycle)].map((x,i) => {return <CycleSetup key={i} cycleSetupKey={i}/>})}
            </div>
            <button type="button" className="btn btn-primary" variant="link" onClick={() => dispatch(startPractice([statePatient, stateTherapist, stateCycles]))}>התחל אימון</button>
        </div>
    )
}
export default PracticeSetup;