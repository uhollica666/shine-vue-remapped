import axios from 'axios';

axios.defaults.baseURL = 'https://shop.shinebhutan.com/api/v1/';
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = ('GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS');



