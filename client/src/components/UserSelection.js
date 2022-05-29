import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux';
import { changeModalShow, changePatient } from '../actions/index';
import axios from 'axios';


const UserSelection = () =>  {

    // const stateShowCanvas = useSelector((state) => state.showCanvas);
    // const stateShowModal = useSelector((state) => state.showModal);
    const dispatch = useDispatch();

    let record;
    axios.get('http://localhost:5000/patientsList' 
        // ,{headers: {
        //     "Content-Type": "application/json",
        //     }})
          ).then(res => {
              record=res.data;
              console.log("userSel");
              console.log(res.data);
            //   dispatch(changeUser(record));
            //   dispatch(changeLogin());
            }
            ); 
    return (
        <div>
           <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                {record.map((patient) =>   <button type="button" className="list-group-item list-group-item-action" onChange={(e) => dispatch(changePatient(e.target.value))}>{patient.Name}</button>)}
                <button type="button" className="btn btn-primary" variant="link" onClick={() => dispatch(changeModalShow())}>+ הוסף מטופל</button>
            </Offcanvas.Body>
        </div>
    )
};
export default UserSelection;