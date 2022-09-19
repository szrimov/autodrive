import axios from './axios';

const api = {
  postUser(user) {
    return axios.post('/task-7/', user);
  },
};

export default api;
