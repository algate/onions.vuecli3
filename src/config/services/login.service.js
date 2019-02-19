import axios from 'axios'
import { /*Domain,*/ baseURL } from '../GlobalConfig'
const nativePath = 'static/data'
const login = baseURL + nativePath + '/getUser.json'
export default {
    login(params) {
        return new Promise((resolve, reject) => {
            axios.get(login,params).then(function(res) {
                resolve(res);
            }).catch(function(reason){
                reject( new Error(reason) );
            });
        });
    }
}
