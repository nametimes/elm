import {HTTP} from '../utils/http.js'
let _http = new HTTP()
class index {
  index1(index){
    return _http.request({
      type: 'GET',
      url: '5bc320ecb0bf35423bd75398/ele/goods',
    })
  }
}
export {index}