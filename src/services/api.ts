// src/services/ApiService.ts
import HttpClient from "@/utils/request"
import type { ListParams } from "./model/apiModel"
const BASE_URL = "https://api.user.784yx.com"

class ApiService extends HttpClient {
  constructor() {
    super(BASE_URL)
  }

  public getUsers() {
    return this.get<ListParams>("/Api/thirdLoginList")
  }

  public getUser(userId: string) {
    return this.get(`/users/${userId}`)
  }

  public createUser(userData: any) {
    return this.post("/Api/thirdLoginList", userData)
  }

  public updateUser(userId: string, userData: any) {
    return this.put(`/users/${userId}`, userData)
  }

  public deleteUser(userId: string) {
    return this.delete(`/users/${userId}`)
  }
}

export default new ApiService()
