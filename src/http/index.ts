import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service: AxiosInstance = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // headers: {'Content-Type': 'application/json;charset=utf-8'},
  // 超时
  timeout: 150000,
})

// 请求拦截器
service.interceptors.request.use(
  /*
  * AxiosRequestConfig 在最新的axios@1.3中已经失效
  * 改成 InternalAxiosRequestConfig, 不然ts的类型声明会报错
  */
  (config: AxiosRequestConfig) => {
    // token
    // config.headers['Authorization'] = 'Bearer ' // 让每个请求携带自定义token 请根据实际情况自行修改
    // 防止重复请求，可以尝试使用vueuse防抖节流实现

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    Promise.reject(error)
  },
)

export default service
