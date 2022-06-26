import cloneDeep from 'lodash/cloneDeep';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import realtimeline from "fusioncharts/viz/realtimeline";
ReactFC.fcRoot(FusionCharts, realtimeline, FusionTheme);

let dataGraphIntianal = {
  dataRigth:[],
  dataLeft:[],
  viewScale: 600,
  labels: Array(600).fill("-"),
  datasets: [
    {
      type: 'scatter',
      mode: 'lines+points',
      visible: true,
      name: "עומס שריר מרבי",
      marker: { color: 'red' },
      // x:Array(600).fill("-"),
      y: Array(600).fill(4),
    },
    {
      type: 'scatter',
      mode: 'lines+points',
      visible: true,
      name: "שמאל",
      marker: { color: 'blue' },
      //x:Array(600).fill("-"),
      y: Array(600).fill(0),
    },
    {
      type: 'scatter',
      mode: 'lines+points',
      visible: true,
      name: "ימין",
      marker: { color: 'green' },
      //x:Array(600).fill("-"),
      y:Array(600).fill(0),
    }
  ]
};

const dataGraph = (state = dataGraphIntianal, action) =>{
  switch (action.type) {
      case "HIDDEN_LEFT":{
        let copyState = cloneDeep(state);
        copyState.datasets[1].visible = !copyState.datasets[1].visible;
        return copyState;
      }
      case "HIDDEN_RIGHT":{
        let copyState = cloneDeep(state);
        copyState.datasets[2].visible = !copyState.datasets[2].visible;
        return copyState;
      }
      case "UPDATE_DATA":{
        const copyState = cloneDeep(state);
        let rigth = action.payload[1];
        let left = action.payload[2];
        copyState.labels.unshift(action.payload[0]);
        copyState.labels.pop();

        
        for (let element in rigth){
          copyState.datasets[1].y.unshift(rigth[element]);
          copyState.datasets[1].y.pop();
          copyState.dataRigth.push(rigth[element]);
        }
        for (let element2 in left){
          copyState.datasets[2].y.unshift(left[element2]);
          copyState.datasets[2].y.pop();
          copyState.dataLeft.push(left[element2]);
        }
        return copyState;
      }

      case "CHANGE_VIEW_SCALE":{
        let copyState = cloneDeep(state);
        copyState.viewScale = action.payload;
        return copyState;
      }
      case "CHANGE_LABEL":{
        var today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const copyState = cloneDeep(state);
        copyState.labels.unshift(time);
        copyState.labels.pop();
        return copyState;
      }
      case "CHANGE_MAXIMUM":{
        let copyState = cloneDeep(state);
        copyState.datasets[0].y = Array(600).fill(action.payload);
        return copyState;
      }
      default:
          return state;
  }
}

export default dataGraph;