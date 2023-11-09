import instance from "./instanceAPI"

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then((response) => response.data)
  },
  follow(id) {
    return instance.post(`follow/${id}`)
      .then((response) => response.data)
  }
}