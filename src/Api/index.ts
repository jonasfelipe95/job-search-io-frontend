import Axios, { AxiosRequestConfig } from 'axios';

export interface IAxiosRequestConfig extends AxiosRequestConfig {
  getAll?: boolean;
}

export interface IRequest {
  url: string;
  body?: any;
  config?: IAxiosRequestConfig;
}

const API_URL = process.env.REACT_APP_API_URL;

Axios.interceptors.request.use((config: IAxiosRequestConfig) => {
  if (!config.url?.includes('/auth/login') && !config.url?.includes('/users/register')) {
    const token = localStorage.getItem('authToken');

    (config as any).headers.Authorization = `Bearer ${token}`;
  }
  console.info(`Request in ${config.url}`);
  return config;
});

const Api = {
  post: ({ url, body, config }: IRequest): Promise<string> =>
    Axios.post(`${API_URL}${url}`, body, config),
  delete: ({ url }: IRequest): Promise<string> => Axios.delete(`${API_URL}${url}`),
  async get<T>({ url, config }: IRequest): Promise<any> {
    return Axios.get<T>(`${API_URL}${url}`, config);
  },
  async patch<T>({ url, body, config }: IRequest): Promise<any> {
    return Axios.patch<T>(`${API_URL}${url}`, body, config);
  },
  async put<T>({ url, body, config }: IRequest): Promise<any> {
    return Axios.patch<T>(`${API_URL}${url}`, body, config);
  },
};

export default Api;
