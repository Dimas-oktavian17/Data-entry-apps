import API from './API'
export default {
  getLocation() {
    return API().get()
  },
}
