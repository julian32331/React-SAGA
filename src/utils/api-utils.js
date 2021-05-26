import axios from 'axios';

const env = require('../env.json');

export const xapi = axios.create({
    baseURL: env.apiHost,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept' : 'application/json'
    }
});