import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const EntranceManagement = () => {

    return (
        <div className="w-50 p-5 text-center">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-5 bgNavbar">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>כניסה</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>הרשמה</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Routes>
                        <Route exact path='/' element={<Login/>} />
                        <Route path="/sign-in" element={<Login/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )

}
export default EntranceManagement;
