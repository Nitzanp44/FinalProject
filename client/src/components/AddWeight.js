import { axiosPost } from '../actions/serverHelper';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientList, changeCanvasShow, changeModalShow } from '../actions/index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const AddWeight = () => {
  
    const onSubmit =  async () =>{
        await axiosPost(weight, 'addWeight');
    }

    const updateUserDetails = (e) =>{
        weight[e.target.name] = e.target.value;
    }
    
    let inputsArr = [
        {label: 'MAC כתובת', name: 'macAdress', type: 'email', placeHolder: 'אנא הקלד שם', icon: 'fa-sitemap'},
        {label: 'מספר מזהה', name: 'ID', type: 'text', placeHolder: 'אנא הקלד שם', icon: 'fa-tag'},
    ]

    let weight = {
        ID:"",
        macAdress:"",
    };

    return(
        <div>
            <form className="mx-1 mx-md-4">
                {inputsArr.map((input) => 
                    <div className='d-flex flex-column'>
                        <div className="align-items-center mb-4">
                            <div className="form-outline mb-0 mr-4">
                                <div className='d-flex'>
                                    <div className='w-75'>
                                        <input type={input.type} name={input.name} placeholder={input.label} className="form-control" onChange={updateUserDetails}/>
                                    </div>
                                    <div className='w-25 d-flex align-items-center justify-content-end'>
                                        <i className={'fas fa-lg me-3 fa-fw ' + input.icon + '  float-right'} ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='d-flex justify-content-center mt-4'>
                    <Link to="/viewAllWeights" type="button" className='btn btn-outline-secondary' onClick={onSubmit}>הוסף משקולת</Link >
                </div>
            </form>
        </div>
    )
}

export default AddWeight;
