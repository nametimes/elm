import { url } from '../config.js'
console.log('111111111111111')
class HTTP {
    request(params) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url.urlx + params.url,
                method: params.method || "GET",
                data: params.data || null,
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: res => {
                    resolve(res)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    }
}
export { HTTP }