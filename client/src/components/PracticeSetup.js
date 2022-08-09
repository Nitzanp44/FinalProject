import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CycleSetup from './CycleSetup';
import { IntianalCycle, changeMaximum, startPractice,weigthsListChange } from '../actions/index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { axiosGet, axiosPost } from '../actions/serverHelper';


const PracticeSetup =() =>  {
    
    const weigthsList=useSelector((state) => state.weightsList);
    const stateCycles = useSelector((state) => state.cycle);
    const statePatient = useSelector((state) => state.patient);
    const stateTherapist = useSelector((state) => state.user);


    const [numCycle, setNumCycle] = useState(0);
    const [numMax, setNumMax] = useState(0);
    const [weight, setweight] = useState(0);
    const dispatch = useDispatch();

    let macAdress="";
    
    const getWeightsList = async () => {
        let WeightsList= await axiosGet('weightsList');
        dispatch(weigthsListChange(WeightsList));
    };

    if (weigthsList.length == 0){
        getWeightsList();
    }
    

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

    const startPracticeB = () => {
        dispatch(startPractice([statePatient.ID, stateTherapist.ID, stateCycles]));
        //useEffect(() => {ReceivingDataA();}, []);
    }

    const updateMaximum = (val) => {
        dispatch(changeMaximum(val));
        let intVal = parseInt(val);
        if(Number.isInteger(intVal)){
            if(intVal < 0){
                setNumMax(0);
            } else {
            setNumMax(intVal);
            }
        } else {
            setNumMax(0);
        }
    }

    const linkClassName = () => {
        return !(numCycle && statePatient.ID && numMax) ? 'btn btn-outline-secondary disabled' : 'btn btn-outline-secondary';
    }
    
    const selectedWeights=(e)=>
    {
        macAdress=e;
    }

    return (
        <div className='cmpBg p-5'>
            <div className="d-flex w-100">
                <div className="input-group mr-5 pl-5 pr-5 d-flex justify-content-sm-around">
                    <div className="input-group w-25">    
                        <div className="input-group-prepend">
                            <span className="input-group-text">מספר מחזורים</span>
                        </div>
                        <div className="custom-file">
                            <input type="number" className="form-control input-sm" max='10' min='0' onChange={(e) => updateCycle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input-group w-25">
                        <div className="input-group-prepend">
                            <span className="input-group-text">עומס שריר מרבי</span>
                        </div>
                        <div className="custom-file">
                            <input type="number" className="form-control input-sm" max='100' min='0' onChange={(e) => updateMaximum(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input-group w-25" id="numWeightsList"> 
                    <select id="Select" className="form-select" defaultValue={'DEFAULT'} onChange={(e)=>setweight(e.target.value)}>
                        <option key="DEFAULT" value='DEFAULT' disabled>בחר עמדת טיפול</option>
                            {weigthsList.map(Weight => {return(
                            <option key={Weight.ID} value={Weight.macAdress}>עמדה {Weight.ID}</option>)})}
                    </select>
                </div>
                </div>
            </div>
            <div className="d-flex my-5 flex-wrap">
                {[...Array(numCycle)].map((x,i) => {return <CycleSetup key={i} cycleSetupKey={i}/>})}
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <Link to="/practicePage" state={weight} type="button" className={'btn btn-outline-secondary ' + (!(numCycle && statePatient.ID && numMax) ? 'disabled' : '')} onClick={startPracticeB}>התחל אימון</Link >
            </div>
        </div>
    )
}
export default PracticeSetup;