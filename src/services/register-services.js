import * as config from '../config/api-config'
import axios from 'axios'

export const postRegister = (data) =>{
    return axios.post(`${config.api}/register`, data)
    .then(
        response =>{
            return response.data
        }
    )
}