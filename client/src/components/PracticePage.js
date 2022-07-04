import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import { dataCycels} from '../actions/index';
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
  let lineDate = cloneDeep(stateSideBar);
  const dispatch = useDispatch();

  const finishPractice = async () => {
    await axiosPost(statePractice, 'addPractice');
  }

  return (
    <div>
      <div className='d-flex'>
        <Timer/>         
        <Plot className='mx-5' data={lineDate.datasets} layout={ { width: 600, height: 600, title: 'גרף האימון', xaxis: {title:"זמן"}}}/>  
        <SideBar/>
      </div>
      <div className='d-flex align-items-center justify-content-center mt-3'>
        <Link to="/practiceSummary" type="button" className='btn btn-outline-secondary' onClick={finishPractice}>סיום אימון</Link >
      </div>
    </div>
  )
}

export default PracticePage;