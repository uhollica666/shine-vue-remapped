import axios from 'axios';

axios.defaults.baseURL = 'https://users.shinebhutan.com/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = ('GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS');



