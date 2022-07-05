import './App.css';
import React from 'react';
import Footer from './components/Footer'
import EntranceManagement from './components/EntranceManagement'
import Main from './components/Main'
import Spinner from './components/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import ReceivingDataA from './MQTT/ReceivingDataA';
import logoIconNavbar from './image/logoIconNavbar.png';

const App = () => {
  
  let login = useSelector(state => state.isLogin);

  // ReceivingDataA();
  return (
    <div className="h-100 d-flex justify-content-center align-items-center appBg">
      <Spinner/>
      <img className='logo' src={logoIconNavbar} alt={"logo"}/> 
      <div className='container h-100 d-flex justify-content-center align-items-center'>
        {(login) ? <Main/> : <EntranceManagement/>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;