import axios from 'axios';

axios.defaults.baseURL = 'https://test.hemantbhutanrealestate.com/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';