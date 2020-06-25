import axios from 'axios';
import qs from 'qs';

class ApiService {
  static getInstance(token) {
    const axiosInstance = axios.create({
      baseURL: 'https://petstore.swagger.io/v2',
      headers: {
        Authorization: 'Bearer '.concat(token),
      },
      timeout: 30000,
      validateStatus: false,
      transformRequest: [(data, _headers) => JSON.stringify(data),
      ],
      transformResponse: [function (data) {
        return data;
      }],
      paramsSerializer: (params) => qs.stringify(params, { indices: false, arrayFormat: 'brackets' }),
      responseType: 'json',
    });
    return axiosInstance;
  }

  async get(url, data) {
    const r = this.constructor.getInstance().get(url, data);
    return r;
  }

  async post(url, data, token) {
    const r = this.constructor.getInstance(token).post(url, data);
    return r;
  }
}

export const apiService = new ApiService();
