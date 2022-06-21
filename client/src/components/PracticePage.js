import react,{useState } from 'react';
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from './SideBar';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";


const PracticePage = () =>  {
  var Plot = createPlotlyComponent(Plotly);
  const state = useSelector((state) => state.sideBar);
  let lineDate = cloneDeep(state);
  let scale = lineDate.viewScale;
  // lineDate.labels = lineDate.labels.slice(0,scale);
  // for (let i = 0; i < lineDate.datasets.length; i++)
  // {
  //   lineDate.datasets[i].data = lineDate.datasets[i].data.slice(0,scale);
  // }


  return (
      <div className='d-flex'>
          <SideBar/>
          <CDBContainer> 
             <Plot data={lineDate.datasets} layout={ { width: 900, height: 600, title: 'גרף האימון', xaxis: {title:"זמן"}}}/>  
           </CDBContainer>              
      </div>
  )
}
export default PracticePage;