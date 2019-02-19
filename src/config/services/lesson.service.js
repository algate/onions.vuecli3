import axios from 'axios'
import { baseURL } from '../GlobalConfig'

const findOnlineCurriculumList = baseURL + 'study/onlineCurriculum/findOnlineCurriculumList'
const code = baseURL + 'sysmanagement/syscode/code'

export default {
    findOnlineCurriculumList(params) {
        return new Promise((resolve, reject) => {
            axios.post(findOnlineCurriculumList,params).then(function(res) {
                resolve(res);
            }, function(res, status, request) {
                reject(res, status, request);
            });
        });
    },
    code(params) {
        return new Promise((resolve, reject) => {
            axios.post(code,params).then(function(res) {
                resolve(res);
            }, function(res, status, request) {
                reject(res, status, request);
            });
        });
    }
}
