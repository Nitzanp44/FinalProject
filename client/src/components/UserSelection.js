import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeModalShow, changePatient, changeCanvasShow } from '../actions/index';
import axios from 'axios';

const UserSelection =  () =>  {

    const userState = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const [recordList, setRecordList] = useState([]);
  
    const patient = Object.assign({}, userState.Patients);
    const therapist = {ID: userState.ID};
    const getAnswer = async () => {
        console.log(therapist);
        try{
            let res = await axios.post(
                'http://localhost:5000/patientsList', 
                therapist, 
                {headers: {"Content-Type": "application/json"}}
            );
            if(res.data){
                setRecordList(res.data); 
            } 
        } catch(err){
            console.log('err --->', err);
        }
    };

    getAnswer();

    const handlechange = (e) => {
        console.log(e.target.innerHTML);
        dispatch(changePatient(e.target.innerHTML)); 
        dispatch(changeCanvasShow())
    };

    return (
        <div>
           <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                {recordList.map((patient) => <button type="button" className="list-group-item list-group-item-action" onClick={handlechange}>{patient.Name}</button>)}
                <button type="button" className="btn btn-primary" variant="link" onClick={() => dispatch(changeModalShow())}>+ הוסף מטופל</button>
            </Offcanvas.Body>
        </div>
    )
};
export default UserSelection;

//dispatch(changePatient(e.target.value))