import './App.css';
import React, { useState, useEffect } from 'react';
import { useInterval } from 'usehooks-ts'
import Footer from './components/Footer'
import EntranceManagement from './components/EntranceManagement'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import ReceivingDataA from './MQTT/ReceivingDataA';

const App = () => {
  
  let login = useSelector(state => state.isLogin);
  
  ReceivingDataA();
  return (
    <div className="h-100 d-flex justify-content-center align-items-center container">
      {(login) ? <Main/> : <EntranceManagement/>}
      <Footer/>
    </div>
  );
}

export default App;