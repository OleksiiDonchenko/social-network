import instance from "./instanceAPI";

export const headerAPI = {
  authMe() {
    return instance.get(`auth/me`)
      .then((response) => response.data)
  },
}