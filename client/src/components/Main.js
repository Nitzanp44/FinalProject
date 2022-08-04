import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';
import ManagerNavigationBar from './ManagerNavigationBar';
import Page from './Page';
import PatientDetails from './PatientDetails';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
    const stateUser = useSelector((state) => state.user);

    if(stateUser.Type == "therapist"){
        return (
            <div className='w-100'>
                <NavigationBar/>
                <PatientDetails/>
                <Page/>
            </div>
        )
    }else{
        return (
            <div className='w-100'>
                <ManagerNavigationBar/>
                <Page/>
            </div>
        )
    }

}

export default Main;
