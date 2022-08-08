import axios from 'axios';
import { SERVER_BASE_URL } from './constant';
import { store } from '../reducer/store';
import { stopSpinner, continueSpinner } from './index';

export const axiosPost = async (payload, domain) => {
  
    store.dispatch(continueSpinner());
    setTimeout(() => store.dispatch(stopSpinner()), 500);
    try{
        let res = await axios.post(
            SERVER_BASE_URL + '/' + domain, 
            payload, 
            {headers: {"Content-Type": "application/json",}},
        );
        return res;
    } catch(err) {
        store.dispatch(stopSpinner());
        console.log('err --->', err);
        return err;
    }
}

export const axiosGet = async (domain) => {
  
    store.dispatch(continueSpinner());
    setTimeout(() => store.dispatch(stopSpinner()), 500);
    try{
        let res = await axios.get(SERVER_BASE_URL + '/' + domain );
        return res;
    } catch(err) {
        store.dispatch(stopSpinner());
        console.log('err --->', err);
        return err;
    }
}