import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeModalShow, changePatient, changeCanvasShow } from '../actions/index';
import axios from 'axios';

const UserSelection =  () =>  {

    const userState = useSelector((state) => state.user)
    const isPatientListChangeState = useSelector((state) => state.isPatientListChange)
    const dispatch = useDispatch();
    const [recordList, setRecordList] = useState([]);
  
    const patient = Object.assign({}, userState.Patients);
    const therapist = {ID: userState.ID};
    const getAnswer = async () => {
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

    if (recordList.length == 0 || isPatientListChangeState == true){
        getAnswer();
    }

    const handlechange = (e) => {
        let patient = {ID: "", Name: ""};
        let patientName = {Name: e.target.innerHTML};
        const getPatient = async () => {
            try{
            let res = await axios.post(
                'http://localhost:5000/choosePatient', 
                patientName,
                {headers: {"Content-Type": "application/json"}}
            );
            if(res.data){
                patient.ID = res.data.ID;
                patient.Name = res.data.Name;      
                dispatch(changePatient(patient)); 
            } 
        } catch(err){
            console.log('err --->', err);
        }};
        getPatient();
        dispatch(changeCanvasShow())
    };

    return (
        <div>
           <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                {recordList.map((patient) => <button type="button" className="list-group-item list-group-item-action text-center" onClick={handlechange}>{patient.Name}</button>)}
                <button type="button" className="btn btn-outline-secondary mt-4 float-right" variant="link" onClick={() => dispatch(changeModalShow())}>+ הוסף מטופל</button>
            </Offcanvas.Body>
        </div>
    )
};

export default UserSelection;