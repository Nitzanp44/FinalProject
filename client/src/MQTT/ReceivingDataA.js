import { useSelector, useDispatch } from 'react-redux';
import {changeDataRight, changeDataLeft, changeLabel,changeData} from '../actions/index'
//import { useInterval } from 'usehooks-ts'
//import React, { useState, useEffect } from 'react';
//import * as Paho from 'react-paho-mqtt';
import Paho from 'paho-mqtt';

const ReceivingDataA = () =>  {

const dispatch = useDispatch();
var numMassageA=0;
var numMessageRecive=0;

var hostname = "localhost";
var port = 9001;
var clientId = "WebSocket";
//clientId += new Date().getUTCMilliseconds();;
var topicA = "esp32_hx711A";
var mqttClient = new Paho.Client(hostname, port, clientId);
mqttClient.onMessageArrived = MessageArrived;
mqttClient.onConnectionLost = ConnectionLost;
Connect();

/*Initiates a connection to the MQTT broker*/
function Connect(){
	mqttClient.connect({
	onSuccess: Connected,
	onFailure: ConnectionFailed,
	keepAliveInterval: 10,
});
}

/*Callback for successful MQTT connection */
function Connected() {
    mqttClient.subscribe(topicA);
}

/*Callback for failed connection*/
function ConnectionFailed(res) {
	console.log("Connect failed:" + res.errorMessage);
}

/*Callback for lost connection*/
function ConnectionLost(res) {
	if (res.errorCode !== 0) {
		//console.log("Connection lost:" + res.errorMessage);
		Connect();
	}
}

/*Callback for incoming message processing */
function MessageArrived(message) {
    var data = message.payloadString;
    var arrData=data.split(',');
    var arrDataT=[];
    arrDataT[0]=arrData[0];
    arrDataT[1]=[arrData[1],arrData[(arrData.length-1)/2]];
    arrDataT[2]=[arrData[(arrData.length-1)/2+1],arrData[arrData.length-1]];
    console.log(arrDataT);
    numMessageRecive=parseInt(arrDataT[0].replace(/:/g,""));
    if (numMessageRecive>numMassageA)
    {
        dispatch(changeData(arrDataT));
        numMassageA=numMessageRecive;
    }
}
}
export default ReceivingDataA;