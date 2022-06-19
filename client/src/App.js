import './App.css';
import React, { useState, useEffect } from 'react';
import { useInterval } from 'usehooks-ts'
import Footer from './components/Footer'
import EntranceManagement from './components/EntranceManagement'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import ReceivingDataA from './MQTT/ReceivingDataA';
//import ReceivingDataB from './MQTT/ReceivingDataB';

// import {Buffer} from 'buffer';
// Buffer.from('anything','base64');
// global.Buffer = global.Buffer || require("buffer").Buffer;


const App = () => {
  
  let login = useSelector(state => state.isLogin);
  
  ReceivingDataA();
  //ReceivingDataB();
  return (
    <div className="App">
      {(login) ? <Main /> : <EntranceManagement/>}
      {/* <Footer/> */}
    </div>
  );
}

export default App;