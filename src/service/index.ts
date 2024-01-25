import HYRequest from './request'
import { TIME_OUT } from './config'
// import { localCache } from '@/utils/cache'
const hyRequest = new HYRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // const token = localCache.getCache('token')
      // if (token && config.headers) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
