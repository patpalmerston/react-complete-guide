import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// examples of various defaults you cna use
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// for posts only - example
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
    (req) => {
        console.log(req);
        return req;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => {
        console.log(res);
        return res;
    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
