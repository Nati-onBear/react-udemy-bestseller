import axios from 'axios';

const ins = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

ins.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default ins