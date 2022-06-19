import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar'
import Page from './Page'
import * as Space from "react-spaces";

const Main = () => {
    return (
        <div className="App">
            <NavigationBar/>
            <Page/>
        </div>
    )
}

export default Main;
