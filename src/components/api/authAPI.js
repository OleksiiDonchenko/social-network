import instance from "./instanceAPI";

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
      .then((response) => response.data)
  },
  authLogin(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data)
  },
  authLogout() {
    return instance.delete(`auth/login`)
      .then((response) => response.data)
  }
}