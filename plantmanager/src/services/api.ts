import axios from 'axios'

const api = axios.create({
    //poderia colocar "localhost", mas melhor colocar o ip
    baseURL: 'http://192.168.0.117:3333',
});

export default api;