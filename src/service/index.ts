import GQRequest from './request'
import type { AxiosRequestConfig } from 'axios'

const gqRequest = new GQRequest({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 2000,
  interceptors: {
    requestInterceptors(config: AxiosRequestConfig) {
      // const token = localCache.getCache(LOGIN_TOKEN)
      // if (config.headers && token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorsErr(err) {
      return err
    },
    responseInterceptors(res) {
      return res
    },
    responseInterceptorsErr(err) {
      return err
    }
  }
})
export default gqRequest
