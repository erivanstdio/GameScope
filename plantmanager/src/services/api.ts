import axios from 'axios'

const api = axios.create({
    //poderia colocar "localhost", mas melhor colocar o ip
    baseURL: 'http://192.168.1.228:3333',
});

export default api;