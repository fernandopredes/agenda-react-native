import * as config from '../config/api-config'
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";


export const postContato = (data) =>{
    
    return axios.post(`${config.api()}/contatos`, data)
    .then(
        response =>{
            return response.data
        }
    )
}

export const putContato = (data) =>{
    
    return axios.put(`${config.api()}/contatos`, data)
    .then(
        response =>{
            return response.data
        }
    )
}


export const getAllContato = () =>{
    
    return axios.get(`${config.api()}/contatos`)
    .then(
        response =>{
            return response.data
        }
    )
}

export const getContatoById = (id) =>{
    
    return axios.get(`${config.api()}/contatos/${id}`)
    .then(
        response =>{
            return response.data
        }
    )
}

export const deleteById = (id) =>{
    
    return axios.delete(`${config.api()}/contatos/${id}`)
    .then(
        response =>{
            return response.data
        }
    )
}

axios.interceptors.request.use(
    async config => {
        if(config.url.includes('api/contatos')){
            let content = await AsyncStorage.getItem('USER_DATA')
            let accessToken = JSON.parse(content).accessToken
            config.headers['Authorization'] = 'Bearer '+ accessToken
        }
        return config
    }
   
)

