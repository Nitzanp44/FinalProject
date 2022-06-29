import { useSelector, useDispatch } from 'react-redux';
import {changeModalShow, changeCanvasShow, changePatient} from '../actions/index';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import UserSelection from './UserSelection';
import AddPatient from './AddPatient';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBContainer } from "mdbreact";

const PatientDetails = () => {

  const stateShowCanvas = useSelector((state) => state.showCanvas);
  const stateShowModal = useSelector((state) => state.showModal);
  const statePatientName = useSelector((state) => 'מטופל : ' + state.patient.Name);
  const dispatch = useDispatch();

  return (
      <div>
        
        {/* חלון בחר מטופל */}
        <div className='choocePatient'>
          <p>{statePatientName}</p>
          <button type="button" className="btn btn-outline-secondary mt-2 btn-sm" variant="link" onClick={() => dispatch(changeCanvasShow())}>בחר מטופל</button>
        </div>

        {/* חלון מטופל נוכחי */}
        <Offcanvas show={stateShowCanvas} onHide={() => dispatch(changeCanvasShow())}>
          <UserSelection/>
        </Offcanvas>

        {/* הוספת מטופל */}
        <Modal show={stateShowModal} fullscreen={true} size={'l'} onHide={() => dispatch(changeModalShow())}>
          <AddPatient/>
        </Modal>
      </div>
  )
}

export default PatientDetails;
