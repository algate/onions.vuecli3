import axios from 'axios'
import { baseURL } from '../GlobalConfig'

const system = {
    deptTrees: baseURL + 'sysmanagement/deptView/deptTrees',
    depts: baseURL + 'sysmanagement/deptView/depts'
}

export default {
    deptTrees(params) {
        return new Promise((resolve, reject) => {
            axios.post(system.deptTrees,params).then(function(res) {
                resolve(res);
            }, function(res, status, request) {
                reject(res, status, request);
            });
        });
    },
    depts(params) {
        return new Promise((resolve, reject) => {
            axios.post(system.depts,params).then(function(res) {
                resolve(res);
            }, function(res, status, request) {
                reject(res, status, request);
            });
        });
    }
}
