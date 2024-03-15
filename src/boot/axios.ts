import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CommonFail } from 'src/components/dialog';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $base: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
export const base = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 2000
});

export default boot(({ app }) => {
  // for use inside Vue files (Options base) through this.$axios and this.$base

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options base form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$base = base;
  // ^ ^ ^ this will allow you to use this.$base (for Vue Options base form)
  //       so you can easily perform requests against your app's base

  // 请求拦截器
  base.interceptors.request.use((config) => {
    if (localStorage.getItem('token') == null) {
      window.location.href = "/#/login"
    }
    config.headers.set("token", localStorage.getItem('token'))
    return config;
  })

  // 响应拦截器
  base.interceptors.response.use((response: AxiosResponse) => {
    if (response.status == 200) {
      if (response.data.code != null && response.data.code != 200) {
        CommonFail("错误码: " + response.data.code + " " + response.data.msg)
      }
      return response.data
      // 如果再多一层 data 可能会导致某些 res 为空
    } else {
      CommonFail('错误:' + response.data.code + '  信息：' + response.data.msg)
    }
  }, (error) => {
    if (error.response == null) {
      CommonFail(error.message)
    } else {
      // 错误处理，错误不会有 res.data.code，不走上面
      CommonFail('请求失败' + '  错误码:' + error.response.status)
    }
  })
});

// 因为你需要返回res.data,但是base中封装的结果是Axiosresponse<T,D>呈现的，
// 确实是将T是设置为了Basebase,但是返回值仍然是Axiosresponse<T,D>
// 因为quasar自己封装的返回值给你写死了Axiosresponse，所以你需要自己设置
export const api = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return base.get(url, config)
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return base.post(url, data, config)
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return base.put(url, data, config)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return base.delete(url, config)
  }
}
