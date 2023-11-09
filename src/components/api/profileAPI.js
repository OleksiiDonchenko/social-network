import instance from "./instanceAPI"

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`)
      .then((response) => response.data)
  }
}