import axios, { type AxiosInstance } from 'axios'
import type { GQRequestConfig, GQRequestInterceptors } from './type'
// import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'

class GQRequest {
  instance: AxiosInstance
  showNprogress?: boolean
  interceptors?: GQRequestInterceptors
  constructor(config: GQRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showNprogress = config.showNprogress ?? true

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsErr
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsErr
    )

    this.instance.interceptors.request.use(
      (config) => {
        // if (this.showNprogress) {
        //   nprogress.start()
        // }
        return config
      },
      (err) => {
        // nprogress.done()
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // nprogress.done()
        return res.data
      },
      (err) => {
        // nprogress.done()
        return Promise.reject(err)
      }
    )
  }

  request<T>(config: GQRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showNprogress === false) {
        this.showNprogress = config.showNprogress
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
  put<T>(config: GQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export default GQRequest
