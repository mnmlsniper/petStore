import axios from 'axios';
import qs from 'qs';

export const axiosInstance = axios.create({
  baseURL: 'https://petstore.swagger.io/v2',
  timeout: 30000,
  transformRequest: [(data, _headers) => JSON.stringify(data),
  ],
  transformResponse: [function (data) {
    return data;
  }],
  paramsSerializer: (params) => qs.stringify(params, { indices: false, arrayFormat: 'brackets' }),
  responseType: 'json',
});
axiosInstance.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

const Login = function Login() {
  this.get = async function AuthLogin(data, token) {
    const url = '/user/login';
    const method = 'post';
    return axiosInstance.request({
      url,
      method,
      validateStatus: false,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      //   ...headers,
      // },
      params: method === 'get' ? data || {} : {},
      data: method !== 'get' ? data || {} : {},
    });

    // try {
    //   const response = await axios.get(
    //     `${url}/user/login`,
    //     {
    //       params: credential,
    //       validateStatus(status) {
    //         return status < 500;
    //       },
    //     },
    //   );
    //   return response;
    // } catch (err) {
    //   console.log(err);
    //   throw new Error(`URL - ${err}`);
    // }
  };
};
export default new Login();
