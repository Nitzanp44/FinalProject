
const SignUp = () =>  {
    
    return (
        <form>
            <h3>הרשמה</h3>

            <div className="form-group">
                {/* <label>שם</label> */}
                <input type="text" className="form-control" placeholder="שם פרטי" />
            </div>

            <div className="form-group">
                {/* <label>שם משפחה</label> */}
                <input type="text" className="form-control" placeholder="שם משפחה" />
            </div>

            <div className="form-group">
                {/* <label>כתובת מייל</label> */}
                <input type="email" className="form-control" placeholder="כתובת מייל" />
            </div>

            <div className="form-group">
                {/* <label>סיסמא</label> */}
                <input type="password" className="form-control" placeholder="סיסמא" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">הרשמה</button>
            <p className="forgot-password text-right">
                משתמש רשום? <a href="#">היכנס</a>
            </p>
        </form>
    );
}
export default SignUp;