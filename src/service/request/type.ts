import type { AxiosResponse, AxiosRequestConfig } from 'axios'
export interface GQRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig | any) => AxiosRequestConfig | any
  requestInterceptorsErr?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsErr?: (err: any) => any
}
export interface GQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GQRequestInterceptors<T>
  showNprogress?: boolean
}
