import axios from 'axios'

let ApiCall = (url) => {
    return axios.get(url).then(res => {
        return res
    }).catch(err => {
        return Promise.reject(err.response);
    })
}

export default ApiCall