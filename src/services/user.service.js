import axios from 'axios';

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users'
});

const createUser = (user) => axiosInstance.post('', user);


export {createUser};