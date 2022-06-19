import react,{useState } from 'react';
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from './SideBar';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import ReactFC from "react-fusioncharts";
//import FusionCharts from "fusioncharts";
import FusionCharts from 'fusioncharts/core';
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import realtimelinedy from "fusioncharts/viz/realtimelinedy";
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
//ReactFC.fcRoot(FusionCharts, realtimelinedy, FusionTheme);
//ReactFC.fcRoot(FusionCharts, realtimelinedy);


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
  // const chartConfigs = {
  //   type: 'timeseries',
  //   container: 'renderAt',
  //   width: 600,
  //   height: 400,
  //   dataFormat: 'json',
  //   dataSource: lineDate
  // };
  
  // const chartConfigs = {
  //   type: 'realtimelinedy',
  //   dataFormat: 'json',
  //   id: 'stockMonitor',
  //   //renderAt: 'chart-container',
  //   width: '500',
  //   height: '350',
  //   container: 'renderAt',
  //   // dataSource: 
  //   // type: 'realtimelinedy',
  //   // width: 600,
  //   // height: 400,
  //   // dataFormat: 'json',
  //   dataSource: lineDate.datasets
  // };


  return (
      <div className='d-flex'>
          <SideBar/>
      {/* <ReactFC {...lineDate} /> */}
          <CDBContainer> 
            {/* <ReactFC {...chartConfigs} /> */}
             <Plot data={lineDate.datasets} layout={ { width: 900, height: 600, title: 'גרף האימון', xaxis: {ticktext:lineDate.labels}}}/>  
           </CDBContainer>              
      </div>
  )
}
export default PracticePage;