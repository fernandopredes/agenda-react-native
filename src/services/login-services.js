import * as config from '../config/api-config'
import axios from 'axios'

export const postLogin = (data) =>{
    return axios.post(`${config.api}/login`, data)
    .then(
        response =>{
            return response.data
        }
    )
}