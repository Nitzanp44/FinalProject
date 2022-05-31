import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeModalShow } from '../actions/index';
import axios from 'axios';

const UserSelection =  () =>  {

    const dispatch = useDispatch();
    const [recordList, setRecordList] = useState([]);
    const getAnswer = async () => {
        let res = await axios.get('http://localhost:5000/patientsList'); 
        setRecordList(res.data); 
    };
    getAnswer();

    return (
        <div>
           <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                {recordList.map((patient) => <button type="button" className="list-group-item list-group-item-action">{patient.Name}</button>)}
                <button type="button" className="btn btn-primary" variant="link" onClick={() => dispatch(changeModalShow())}>+ הוסף מטופל</button>
            </Offcanvas.Body>
        </div>
    )
};
export default UserSelection;