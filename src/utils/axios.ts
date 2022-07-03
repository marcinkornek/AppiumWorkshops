import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {'x-api-key': Config.API_KEY},
});

export default instance;
