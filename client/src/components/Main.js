import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar'
import Page from './Page'
import PatientDetails from './PatientDetails';

const Main = () => {
    return (
        <div className='w-100'>
            <NavigationBar/>
            <PatientDetails/>
            <Page/>
        </div>
    )
}

export default Main;
