import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeModalShow, changePatient, changeCanvasShow, restartPractice } from '../actions/index';
import { axiosPost } from '../actions/serverHelper';

const UserSelection =  () =>  {

    const userState = useSelector((state) => state.user)
    const patientState = useSelector((state) => state.patient);
    const isPatientListChangeState = useSelector((state) => state.isPatientListChange)
    const dispatch = useDispatch();
    const [recordList, setRecordList] = useState([]);  
    const therapist = {ID: userState.ID};
    
    const getAnswer = async () => {
        let res = await axiosPost(therapist, 'patientsList');
        setRecordList(res.data);
    };

    if (recordList.length === 0 || isPatientListChangeState === true){
        getAnswer();
    }

    const handlechange = (e) => {
        let patient = {ID: "", Name: ""};
        let patientName = {Name: e.target.innerHTML};
        getPatient(patient, patientName);
    }

    const getPatient = async (patient, patientName) => {
        if(patientName.Name !== patientState.Name){
            let res = await axiosPost(patientName, 'choosePatient');
            if(res.data){
                patient.ID = res.data.ID;
                patient.Name = res.data.Name;      
                dispatch(changePatient(patient)); 
                dispatch(restartPractice(patient.ID)); 
            } 
        }
        dispatch(changeCanvasShow())
    };

    return (
        <div>
           <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                {recordList.map((patient) => <button type="button" key={patient.Name} className="list-group-item list-group-item-action text-center" onClick={handlechange}>{patient.Name}</button>)}
                <div className='d-flex justify-content-center'>
                    <button type="button" className="btn btn-outline-secondary mt-4" onClick={() => dispatch(changeModalShow())}>+ הוסף מטופל</button>
                </div>
            </Offcanvas.Body>
        </div>
    )
};

export default UserSelection;