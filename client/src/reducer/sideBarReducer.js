import cloneDeep from 'lodash/cloneDeep';

let dataGraphIntianal = {

    viewScale: 600,
    labels: Array(600).fill("-"),
    datasets: [
      {
        type: 'scatter',
        mode: 'lines+points',
        visible: true,
        name: "עומס שריר מרבי",
        marker: { color: 'red' },
        y: Array(600).fill(60),
      },
      {
        type: 'scatter',
        mode: 'lines+points',
        visible: true,
        name: "שמאל",
        marker: { color: 'blue' },
        y: Array(600).fill(0),
      },
      {
        type: 'scatter',
        mode: 'lines+points',
        visible: true,
        name: "ימין",
        marker: { color: 'green' },
        y: Array(600).fill(0),
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
        case "DATA_LEFT":{
          let copyState = cloneDeep(state);
          copyState.datasets[1].y.unshift(action.payload);
          // copyState.datasets[1].y.[מספור].(action.payload);
          copyState.datasets[1].y.pop();
          return copyState;
        }
        case "DATA_RIGHT":{
          let copyState = cloneDeep(state);
          copyState.datasets[2].y.unshift(action.payload);
          copyState.datasets[2].y.pop();
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