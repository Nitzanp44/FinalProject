import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import { setPracticeList} from '../actions/index';
import { axiosPost } from '../actions/serverHelper';
import SideBar from './SideBar';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import Timer from './Timer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const PracticePage = () =>  {
  var Plot = createPlotlyComponent(Plotly);
  const stateSideBar = useSelector((state) => state.sideBar);
  const statePractice = useSelector((state) => state.practice);
  const patientState = useSelector((state) => state.patient);
  const patient = {ID: patientState.ID};
  let lineDate = cloneDeep(stateSideBar);
  
  const dispatch = useDispatch();
  const getAnswer = async () => {
    let res = await axiosPost(patient, 'practiceList');
    if(res.data){
        dispatch(setPracticeList(res.data));
    };
};

  const finishPractice = async () => {
    await axiosPost(statePractice, 'addPractice');
    getAnswer();
  }

  return (
    <div>
      <div className='d-flex'>
        <Timer/>         
        <Plot className='mx-5' data={lineDate.datasets} layout={lineDate.layout}/>  
        <SideBar/>
      </div>
      <div className='d-flex align-items-center justify-content-center mt-3'>
        <Link to="/practiceSummary" type="button" className='btn btn-outline-secondary' onClick={finishPractice}>סיום אימון</Link >
      </div>
    </div>
  )
}

export default PracticePage;