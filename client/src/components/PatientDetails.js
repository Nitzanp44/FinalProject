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
  const statePatient = useSelector((state) => state.patient);
  const dispatch = useDispatch();

  return (
      <div>
        {/* חלון מטופל נוכחי */}
        <MDBContainer>
          <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardBody>
          
              <MDBCardTitle tag="h6" sub className="mb-2 text-muted">מטופל: {statePatient.Name}</MDBCardTitle>
              <button type="button" className="btn btn-link" variant="link" onClick={() => dispatch(changeCanvasShow())}>בחר מטופל </button>
              
              <Offcanvas show={stateShowCanvas} onHide={() => dispatch(changeCanvasShow())}>
                <UserSelection/>
              </Offcanvas>

            </MDBCardBody>
          </MDBCard>
        </MDBContainer>

        {/* הוספת מטופל */}
        <Modal show={stateShowModal} fullscreen={true} size={'l'} onHide={() => dispatch(changeModalShow())}>
          <AddPatient/>
        </Modal>
      </div>
  )
}

export default PatientDetails;
