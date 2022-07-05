import cloneDeep from 'lodash/cloneDeep';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import realtimeline from "fusioncharts/viz/realtimeline";
ReactFC.fcRoot(FusionCharts, realtimeline, FusionTheme);

let len=0;
let dataGraphIntianal = {
    viewScale: 600,
    labels: [],
    datasets: [
      {
        type: 'scatter',
        mode: 'lines+points',
        visible: true,
        name: "עומס שריר מרבי",
        marker: { color: 'yellow' },
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
        y: Array(),
      },
      {
        type: 'scatter',
        mode: 'lines+points',
        visible: true,
        name: "ימין",
        marker: { color: 'green' },
        //x:Array(600).fill("-"),
        y:Array(),
      },
    ],
    layout:{
      shapes:[],
       width: 600, 
       height: 600, 
       title: 'גרף האימון', 
       xaxis: {title:"זמן"}}
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
          if (copyState.datasets[1].y.length>600)
          {copyState.datasets[1].y.pop();}
        }
        for (let element2 in left){
          copyState.datasets[2].y.unshift(left[element2]);
          if (copyState.datasets[2].y.length>600)
          {copyState.datasets[2].y.pop();}
        }
        if (copyState.layout.shapes.length>0)
        {
          copyState.layout.shapes.forEach(s=>{
            s.x0+=left.length;
            s.x1+=left.length;
          })
        }
        return copyState;
      }
      case "CHANGE_VIEW_SCALE":{
        let copyState = cloneDeep(state);
        copyState.viewScale = action.payload;
        return copyState;
      }
      case "CHANGE_MAXIMUM":{
        let copyState = cloneDeep(state);
        copyState.datasets[0].y = Array(600).fill(action.payload);
        return copyState;
      }
      case "CYCLE_COMPLTE":{
        let copyState = cloneDeep(state);
        copyState.layout.shapes.push({
          type: 'line',
                    xref: 'x',
                    yref: 'paper',
                    x0: 0,
                    y0: 0,
                    x1: 0,
                    y1: 1,
                    fillcolor: 'orenge',
                    // opacity: 0.2,
                    line: {
                        color: 'red',
                        width: 4,
                        dash: 'dot'}
        })
        return copyState;
      }
      case "LOGOUT":{
        let copyState = cloneDeep(state);
        copyState = dataGraphIntianal;
        return copyState;
      }
      default:
          return state;
  }
}

export default dataGraph;