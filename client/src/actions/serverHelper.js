import axios from 'axios';
import { SERVER_BASE_URL } from './constant';

export const axiosPost = async (payload, domain) => {
    try{
        let res = await axios.post(
            SERVER_BASE_URL + '/' + domain, 
            payload, 
            {headers: {"Content-Type": "application/json",}},
        );
       return res;
    } catch(err) {
        console.log('err --->', err);
        return err;
    }
}