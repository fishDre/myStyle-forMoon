import axios from 'axios';

const baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.baseURL = baseURL;

// eslint-disable-next-line no-console
console.log(baseURL);
if (process.env.NODE_ENV === 'development') {
  (axios.defaults.headers as any).Authorization = 'Bearer 36eb6e5a-ab15-46ff-961e-27f29a0f6f65';
}

// axios.defaults.timeout = 1000;
axios.interceptors.response.use(
  (res) => res,
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-alert
    window.alert('网络请求失败');
  }
);

const setToken = (token: string): void => {
  (axios.defaults.headers as any).Authorization = `Bearer ${token}`;
};
export { baseURL, setToken };
export default axios;
