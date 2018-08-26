import axios from 'axios';
import config from '../../../config.json';

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? config.api_dev : config.api_prod,
});

instance.defaults.withCredentials = true;

export default instance;
