import instance from "./instanceAPI"

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`)
      .then((response) => response.data)
  },
  getUserStatus(id) {
    return instance.get(`profile/status/${id}`)
      .then((response) => response.data)
  },
  updateUserStatus(status) {
    return instance.put(`profile/status`, { status: status })
  }
}