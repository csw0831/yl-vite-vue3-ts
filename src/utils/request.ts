import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"
// import { objectToQueryString } from "@/utils/common"
import { ElMessage } from "element-plus"

class HttpClient {
  private instance: AxiosInstance
  static baseURL = import.meta.env.VITE_BASE_URL
  constructor() {
    this.instance = axios.create({
      baseURL: HttpClient.baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    })

    this.initializeResponseInterceptor()
    this.initializeRequestInterceptor()
  }

  private initializeResponseInterceptor() {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError)
  }
  private initializeRequestInterceptor() {
    this.instance.interceptors.request.use(this.handleRequest, this.requestHandleError)
  }
  private handleRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
    if (config.method === "get") {
      config.params = { ...config.params, domain: "www196.com" }
    }
    return config
  }

  private handleResponse = ({ data }: AxiosResponse) => {
    console.log(data, "data")
    if (data && data.code === 0) {
      ElMessage.error(data.msg ?? "请求失败，请重试")
      return Promise.reject(data.msg)
    }
    return data
  }

  private handleError = (error: Error | Response) => {
    console.log(error, "error")
    Promise.reject(error)
  }
  private requestHandleError = (error: Error | Response) => {
    console.log(error, "error")
    Promise.reject(error)
  }
  public get<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, { ...config, params: data })
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put(url, data, config)
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config)
  }
}

export default HttpClient
