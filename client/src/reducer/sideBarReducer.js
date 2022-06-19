import cloneDeep from 'lodash/cloneDeep';
import ReactFC from 'react-fusioncharts';
//import FusionCharts from "fusioncharts";
//import Column2D from "fusioncharts/fusioncharts.charts";
//ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
import FusionCharts from 'fusioncharts/core';
//import feedData from 'fusioncharts/';
//import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import realtimelinedy from "fusioncharts/viz/realtimelinedy";
import realtimeline from "fusioncharts/viz/realtimeline";
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
ReactFC.fcRoot(FusionCharts, realtimeline, FusionTheme);

// let dataGraphIntianal =
// {
//     type:"realtimeline",
//     renderAt: 'chart-container',
//     width:"700",
//     height:"500",
//     dataFormat:"JSON",
//     id:"pisyo",
//     dataSource:{
//   chart: {
//     caption: "גרף אימון",
//           //subCaption: "Harry's SuperMart",
//           xAxisName: "Time",
//           yAxisName: "Stock Price",
//          // refreshinterval: "0.05",
//           yaxisminvalue: "35",
//           yaxismaxvalue: "36",
//           numdisplaysets: "10",
//           labeldisplay: "rotate",
//          // showRealTimeValue: "0",
//           theme: "fusion"
//     // theme: "fusion",
//     // caption: "Stock Price Monitor",
//     // subCaption: "Harry's Supermart",
//     // captionFontSize: "14",
//     // subcaptionFontSize: "14",
//     // baseFontColor: "#333333",
//     // baseFont: "Helvetica Neue,Arial",
//     // subcaptionFontBold: "0",
//     // paletteColors: "#0075c2,#1aaf5d,#f2c500",
//     // bgColor: "#ffffff",
//     // canvasBgColor: "#ffffff",
//     // showBorder: "0",
//     // showShadow: "0",
//     // showCanvasBorder: "0",
//     // showRealTimeValue: "0",
//     // legendBorderAlpha: "0",
//     // legendShadow: "0",
//     // numberprefix: "$",
//     // setadaptiveymin: "1",
//     // setadaptivesymin: "1",
//     // xaxisname: "Time",
//     // labeldisplay: "Rotate",
//     // slantlabels: "1",
//     // pyaxisminvalue: "35",
//     // pyaxismaxvalue: "10",
//     // divlineAlpha: "100",
//     // divlineColor: "#999999",
//     // showAlternateHGridColor: "0",
//     // divlineThickness: "1",
//     // divLineIsDashed: "1",
//     // divLineDashLen: "1",
//     // divLineGapLen: "1",
//     // numDisplaySets: "10"
//     // caption: "Reach of Social Media Platforms amoung youth",
//     // yaxisname: "% of youth on this platform",
//     // subcaption: "2012-2016",
//     // showhovereffect: "1",
//     // numbersuffix: "%",
//     // drawcrossline: "1",
//     // plottooltext: "<b>$dataValue</b> of youth were on $seriesName",
//     // theme: "fusion",
//     // showRealTimeValue: "0"
//   },
//   categories: [
//     {
//       category: [
//         {
//           label: "תחילת אימון"
//         },
//       ]
//     }
//   ],
//   dataset: [
//     {
//       seriesname: "hrys",
//       showvalues: "0",
//       data: [
//         {value:"20"}
//       ]
//     },
//     {
//       seriesname: "nyse",
//       showvalues: "0",
//       data: [
//         { value: "16"}
//       ]
//     }
//   ]
// },};
// let dataGraphIntianal = new FusionCharts.ready({
//       type: 'realtimelinedy',
//       dataFormat: 'json',
//       id: 'stockMonitor',
//       renderAt: 'chart-container',
//       width: '500',
//       height: '350',
//       dataSource: {
//         "chart": {
  
//           "theme": "fusion",
//           "caption": "Stock Price Monitor",
//           "subCaption": "Harry's Supermart",
//           "captionFontSize": "14",
//           "subcaptionFontSize": "14",
//           "baseFontColor": "#333333",
//           "baseFont": "Helvetica Neue,Arial",
//           "subcaptionFontBold": "0",
//           "paletteColors": "#0075c2,#1aaf5d,#f2c500",
//           "bgColor": "#ffffff",
//           "canvasBgColor": "#ffffff",
//           "showBorder": "0",
//           "showShadow": "0",
//           "showCanvasBorder": "0",
//           "showRealTimeValue": "0",
//           "legendBorderAlpha": "0",
//           "legendShadow": "0",
//           "numberprefix": "$",
//           "setadaptiveymin": "1",
//           "setadaptivesymin": "1",
//           "xaxisname": "Time",
//           "labeldisplay": "Rotate",
//           "slantlabels": "1",
//           "pyaxisminvalue": "35",
//           "pyaxismaxvalue": "36",
//           "syaxisminvalue": "10000",
//           "syaxismaxvalue": "12000",
//           "divlineAlpha": "100",
//           "divlineColor": "#999999",
//           "showAlternateHGridColor": "0",
//           "divlineThickness": "1",
//           "divLineIsDashed": "1",
//           "divLineDashLen": "1",
//           "divLineGapLen": "1",
//           "numDisplaySets": "10"
//         },
//         "categories": [{
//           "category": [{
//             "label": "התחלת אימן"
//           }]
//         }],
//         "datasets": [{
//             "seriesname": "nyse",
//             "showvalues": "0",
//             "visible": true,
//             "data": [{
//               "value": ""
//             }]
//           },
//           {
//             "seriesname": "hrys",
//             "showvalues": "0",
//             "parentyaxis": "S",
//             "visible": true,
//             "data": [{
//               "value": ""
//             }]
//           }
//         ],
//         "trendlines": [{
//           "line": [{
//               "parentyaxis": "P",
//               "startvalue": "60",
//               "displayvalue": "עומס מירבי",
//               "thickness": "1",
//               "color": "#0075c2",
//               "dashed": "1",
//               "visible": true
//             }
//           ]
//         }]
// }});



let dataGraphIntianal = {

    viewScale: 600,
    labels: Array().fill("-"),
    datasets: [
      {
        type: 'scatter',
        mode: 'lines+points',
        visible: true,
        name: "עומס שריר מרבי",
        marker: { color: 'red' },
        y: Array(600).fill(4),
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
        y:Array(600).fill(0),
      }
    ]
};

// const formatTime=(num)=> 
// {
//   return (num <= 9) ? ("0" + num) : num;
// };

// const dataGraphIntianal = {
//   chart: {
//     theme: "fusion",
//     caption: "Stock Price Monitor",
//     subCaption: "Harry's Supermart",
//     captionFontSize: "14",
//     subcaptionFontSize: "14",
//     baseFontColor: "#333333",
//     baseFont: "Helvetica Neue,Arial",
//     subcaptionFontBold: "0",
//     paletteColors: "#0075c2,#1aaf5d,#f2c500",
//     bgColor: "#ffffff",
//     canvasBgColor: "#ffffff",
//     showBorder: "0",
//     showShadow: "0",
//     showCanvasBorder: "0",
//     showRealTimeValue: "0",
//     legendBorderAlpha: "0",
//     legendShadow: "0",
//     numberprefix: "$",
//     setadaptiveymin: "1",
//     setadaptivesymin: "1",
//     xaxisname: "Time",
//     labeldisplay: "Rotate",
//     slantlabels: "1",
//     pyaxisminvalue: "35",
//     pyaxismaxvalue: "36",
//     syaxisminvalue: "10000",
//     syaxismaxvalue: "12000",
//     divlineAlpha: "100",
//     divlineColor: "#999999",
//     showAlternateHGridColor: "0",
//     divlineThickness: "1",
//     divLineIsDashed: "1",
//     divLineDashLen: "1",
//     divLineGapLen: "1",
//     numDisplaySets: "10"
//     // caption: 'Countries With Most Oil Reserves [2017-18]',
//     // subCaption: 'In MMbbl = One Million barrels',
//     // xAxisName: 'Country',
//     // yAxisName: 'Reserves (MMbbl)',
//     // numberSuffix: 'K',
//     // theme: 'fusion'
//   },
//   datasets: [{
//         seriesname: "nyse",
//         showvalues: "0",
//         //visible: true,
//         value: "30"
        
//       },
//       {
//         seriesname: "hrys",
//         showvalues: "0",
//         parentyaxis: "S",
//         //visible: true,
//         value: ""
//       },
//     ]
// };


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
          // var prevDs = Object.assign({}, this.state.dataSource);
          // prevDs.data[2].value = this.getRandomNumber();
          // prevDs.data[3].value = this.getRandomNumber();
          // this.setState({
          //   dataSource: prevDs,

        //   let copyState = cloneDeep(state);
        //   // console.log(copyState);
        //   //console.log(copyState);
        //   var chartRef = FusionCharts(copyState.id),
        //   label = action.payload[0],
        //   hrys=action.payload[1],
        //   nyse=action.payload[2],
        //   strData = "&label=" + label + "&value=" + hrys + "|" + nyse;
        //  chartRef.feedData(strData);
        // console.log(action.payload)
        // console.log(copyState.dataSource.dataset[0].data);
        // copyState.dataSource.dataset[0].data.value = nyse;
        // console.log("update2");
        //  copyState.dataSource.dataset[1].data.value = hrys;
        //  copyState.dataSource.categories.category = label;
        // // console.log(copyState);
        // // console.log(nyse);
        // return copyState;
        
        let copyState = cloneDeep(state);
        let rigth=action.payload[1];
        let left=action.payload[2];
        copyState.labels.unshift(action.payload[0]);
        copyState.labels.pop();
        console.log(copyState.labels)
        for (let element in rigth){
          copyState.datasets[1].y.unshift(rigth[element]);
          copyState.datasets[1].y.pop();
        }
        for (let element2 in left){
          copyState.datasets[2].y.unshift(left[element2]);
          copyState.datasets[2].y.pop();
        }
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
          //console.log(action.payload);
          let data=action.payload;
          copyState.datasets[2].y[data[0]]=[data.slice(1)];
          //copyState.datasets[2].y.pop();
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
          //console.log(time);
          const copyState = cloneDeep(state);
          copyState.labels.unshift(time);
          copyState.labels.pop();
          return copyState;
        }
        case "CHANGE_MAXIMUM":{
          let copyState = cloneDeep(state);
          copyState.datasets[0].y = Array(600).fill(action.payload);
          //copyState.trendlines[0].startvalue = action.payload;
          return copyState;
        }
        default:
            return state;
    }
}

export default dataGraph;